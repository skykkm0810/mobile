import { Route } from '@angular/compiler/src/core';
import { Component, OnInit ,AfterViewInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
import { Environment, filePath} from '../../environment/environment';
import { ATTENDANCE, Senior} from '../../interface/interface';

@Component({
  selector: 'app-senior-list',
  templateUrl: './senior-list.component.html',
  styleUrls: ['./senior-list.component.css']
})
export class SeniorListComponent implements OnInit, AfterViewInit, OnDestroy {
  attd = ATTENDANCE;
  subs = [];
  dataset: Senior[] = [];
  datasetu: Senior[] = [];
  user;

  info;
  msg = {
    centerId: null,
    today: null,
  };

  attds : any;
  attdn : any;
  attDate;
  today=new Date();
  forBox;
  filePath = Environment.filePath;
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private phxChannel: PhxChannelService
  ) { }

  ngOnInit(): void {
    // this.attendMatch();
    this.init();
  }
  ngAfterViewInit(){

  }
  ngOnDestroy(): void {
    for( let i = 0; i < this.subs.length; i++ ) {
      this.subs[i].unsubscribe();
    }
  }

  init(): void {
    this.user = JSON.parse(this.auth.getUserData());
    console.log(this.user);
    this.msg.centerId = this.user.centerId*1;
    this.msg.today = new Date()

    this.phxChannel.gets('present', this.msg);

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
  //   this.attDate = this.today;
  //   for(var i=0; i<this.attd.length; i++){
  //     let chkdate = new Date(this.attd[i].date);
  //     if(chkdate.getFullYear() == this.attDate.getFullYear() && chkdate.getMonth() == this.attDate.getMonth() && chkdate.getDate() == this.attDate.getDate()){
  //       this.attds.push(this.attd[i]);
  //     }
  //     else{
  //       this.attdn.push(this.attd[i]);
  //     }
  //   }
  // }
  
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
}
