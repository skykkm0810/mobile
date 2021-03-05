import { Route } from '@angular/compiler/src/core';
import { Component, OnInit ,AfterViewInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
import { Environment, filePath} from '../../environment/environment';
import { ATTENDANCE, Senior} from '../../interface/interface';
@Component({
  selector: 'app-attand',
  templateUrl: './attand.component.html',
  styleUrls: ['./attand.component.css']
})
export class AttandComponent implements OnInit, AfterViewInit, OnDestroy {
  attd = ATTENDANCE;
  subs = [];
  dataset: Senior[] = [];
  datasetu: Senior[] = [];
  user;
  info: any;
  nd;
  msg = {
    today: null,
    centerId: null,
  }

  attds;
  attdn;
  attDate;

  year :any;
  month : any;
  day : any;
  forBox:any;
  filePath = Environment.filePath;
  today = new Date().setHours(0, 0, 0, 0);

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private phxChannel: PhxChannelService
  ) {
  }
    
  ngOnInit(): void {
    this.user = JSON.parse(this.auth.getUserData());
    this.msg.centerId = this.user.centerId*1;
    this.info = this.route.snapshot.paramMap.get('date');
    this.msg.today = new Date(this.info);
    this.nd = new Date(this.info).setHours(0, 0, 0, 0);
    this.year = Number(this.info.split('-')[0]);
    this.month = Number(this.info.split('-')[1]);
    this.day = Number(this.info.split('-')[2]);
    // this.attendMatch();
    this.init();
    console.log(this.msg);
    this.phxChannel.gets('present', this.msg);
  }
  ngAfterViewInit(){
      
  }
  ngOnDestroy(): void {
    for( let i = 0; i < this.subs.length; i++ ) {
      this.subs[i].unsubscribe();
    }
  }

  init(): void {
    let sub;
    sub = this.phxChannel.Presents.subscribe( data => {
      this.dataset = [];
      this.datasetu = [];
      data.forEach( dt => {
        if ( dt.present.length > 0 ) {
          this.dataset.push(dt);
        } else {
          this.datasetu.push(dt);
        }
      })
      console.log(this.dataset, this.datasetu);
    })
    this.subs.push(sub);
    sub = this.phxChannel.PresentAdd.subscribe( () => {
      this.msg.today = new Date(this.info);
      this.phxChannel.gets('present', this.msg);
      this.downscroll();
    })
    this.subs.push(sub);
    sub = this.phxChannel.PresentAddInvalid.subscribe( () => {
      alert('이미 오늘 출석을 하셨습니다');
    })
    this.subs.push(sub);
  }

  Filter(){
    var filter, input, text,card ;
    input = document.getElementById('filter') as HTMLInputElement;
    filter = input.value;
    card = document.getElementsByClassName('list')
    
    for(var i=0; i<card.length; i++){
      (card[i] as HTMLElement).style.display = 'none';
      text = (card[i] as HTMLElement).getElementsByClassName('name')[0] as HTMLElement;
        if((text.textContent as string).indexOf(filter) > -1) {
          (card[i] as HTMLElement).style.display="block";
        }
    }
  }
  // attendMatch(){
  //   this.attds = new Array;
  //   this.attdn = new Array;
  //   this.attDate = new Date(this.info);
  //   for(var i=0; i<this.attd.length; i++){
  //     let chkdate = new Date(this.attd[i].date);
  //     if(chkdate.getFullYear() == this.attDate.getFullYear() && chkdate.getMonth() == this.attDate.getMonth() && chkdate.getDate() == this.attDate.getDate()){
  //       console.log(this.attd[i])
  //       this.attds.push(this.attd[i]);
  //     }
  //     else{
  //       this.attdn.push(this.attd[i]);
  //     }
  //   }
  // }

  dateprev(){
    this.day = this.day - 1
    if(this.day == 0){
      this.month = this.month - 1;
      if(this.month == 0){
        this.year = this.year - 1
        this.month = 12
      }
      this.day = new Date(this.year , this.month , 0).getDate();
    }
    var monthF = ('00' + this.month).slice(-2);
    var dayF = ('00' + this.day).slice(-2);
    this.info = this.year+'-'+monthF+'-'+dayF;
    this.msg.today = new Date(this.info);
    this.nd = new Date(this.info).setHours(0, 0, 0, 0);
    this.phxChannel.gets('present', this.msg);

    // this.attendMatch();
  }
  datenext(){
    this.day = this.day + 1
    var lastDay = new Date(this.year , this.month , 0).getDate();
    if(this.day == lastDay + 1){
      this.month = this.month + 1;
      if(this.month == 13){
        this.year = this.year + 1
        this.month = 1
      }
      this.day = 1
    }
    var monthF = ('00' + this.month).slice(-2);
    var dayF = ('00' + this.day).slice(-2);
    this.info = this.year+'-'+monthF+'-'+dayF;
    this.msg.today = new Date(this.info);
    this.nd = new Date(this.info).setHours(0, 0, 0, 0);
    this.phxChannel.gets('present', this.msg);

    // this.attendMatch();
  }
  upscroll(data){
    this.forBox = data;
    var box = document.getElementsByClassName('animateBox')[0] as HTMLElement;
    box.style.bottom = 0+'px'
  }
  downscroll(){
    var box = document.getElementsByClassName('animateBox')[0] as HTMLElement;
    var boxHeight = box.clientHeight;
    box.style.bottom = -boxHeight+'px';
  }

  present(el) {
    if(confirm('출석을 체크하시겠습니까?')) {
      let dt = new Date();

      let m = {
        seniorId: el.id,
        accountId: this.user.id,
        centerId: this.user.centerId*1,
        date: new Date()
      }
      // console.log(m);
      this.phxChannel.send('present', m);
    }
  }
}
