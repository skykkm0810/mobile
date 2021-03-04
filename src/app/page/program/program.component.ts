import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Activity, PROGRAM} from '../../interface/interface';
import { ActivatedRoute, Router } from '@angular/router';
import { filePath} from '../../environment/environment'
import { AuthService } from 'src/app/service/auth.service';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
import { inherits } from 'util';
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit, OnDestroy, AfterViewInit{
  
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private phxChannel: PhxChannelService,
  ) { }
  ngOnInit(): void {
    this.dataMatching();
    this.user = JSON.parse(this.auth.getUserData());
    this.info.centerId = this.user.centerId*1;
    this.getToday(this.nd);
    this.init()
  }
  ngAfterViewInit(): void {
  }
  ngOnDestroy(): void {
    for( let i = 0; i < this.subs.length; i++ ) {
      this.subs[i].unsubscribe();
    }
  }

  nd = new Date();
  info = {
    today: this.nd,
    centerId: null,
  }
  user;
  subs = [];
  dataset: Activity[] = [];

  program = PROGRAM
  title: any;
  filePath = filePath;
  year = this.nd.getFullYear();
  month = this.nd.getMonth();
  day = this.nd.getDate();
  backImg
  backName;
  clickOn;
  // 날짜 이동

  init() {
    let sub;
    sub = this.phxChannel.Activities.subscribe( data => {
      console.log(data);
      this.dataset = data;
    })
    this.subs.push(sub);
  }

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
    this.nd = new Date(this.year, this.month, this.day);
    this.getToday( this.nd );
    this.dataMatching();
    // (document.getElementsByClassName('program')[0] as HTMLElement).click();
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
    this.nd = new Date(this.year, this.month, this.day);
    this.getToday( this.nd );
    this.dataMatching();

    // (document.getElementsByClassName('program')[0] as HTMLElement).click();
  }

  getToday( el ) {
    this.info.today = el;
    this.phxChannel.gets('activity', this.info);
  }
  // 데이터 매칭
  rows = new Array;
  dataMatching() {
    this.rows = new Array;
    for(var i =0; i<this.program.length; i++){
      var pDate = new Date(this.program[i].date); 
      if(pDate.getFullYear() == this.nd.getFullYear() && pDate.getMonth() == this.nd.getMonth() && pDate.getDate() == this.nd.getDate()){
        this.rows.push(this.program[i])
      }
    }
  }
  
  clicked(data){
    this.clickOn = data; 
    this.backImg = data.imgurl;
    this.backName = data.name;
  }
  
}
