import {FEED, SeniorDrug} from '../../interface/interface';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit ,AfterViewInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
import { Environment, filePath} from '../../environment/environment';
import { ATTENDANCE, Senior} from '../../interface/interface';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit ,AfterViewInit, OnDestroy {
  feedt = FEED;
  feeds ;
  feedn ;
  feedDate;

  subs = [];
  dataset: SeniorDrug[] = [];
  datasetu: SeniorDrug[] = [];
  user;
  info: any;
  msg = {
    today: null,
    centerId: null,
  }

  nd = new Date();
  year = this.nd.getFullYear();
  month = this.nd.getMonth();
  day = this.nd.getDate();
  filePath = Environment.filePath;
  forBox;
  today = new Date().setHours(0, 0, 0, 0);
  
  
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private phxChannel: PhxChannelService
  ) { }
    
    
  ngOnInit(): void {
    this.init();
  }
  ngAfterViewInit() {

  }
  ngOnDestroy(): void {
    for( let i = 0; i < this.subs.length; i++ ) {
      this.subs[i].unsubscribe();
    }
  }



  init(): void {
    this.user = JSON.parse(this.auth.getUserData());
    this.msg.centerId = this.user.centerId*1;
    this.msg.today = new Date(this.nd.setHours(0, 0, 0, 0));

    let sub;
    sub = this.phxChannel.Drugs.subscribe( data => {
      this.dataset = [];
      this.datasetu = [];
      data.forEach( dt => {
        if ( dt.drug.length > 0 ) {
          this.dataset.push(dt);
        } else {
          this.datasetu.push(dt);
        }
      })
      console.log(this.dataset, this.datasetu);
    })
    this.subs.push(sub);
    sub = this.phxChannel.DrugAdd.subscribe( () => {
      this.msg.today = new Date(this.nd);
      // console.log(this.msg);
      this.phxChannel.gets('drug', this.msg);
      this.downscroll();
    })
    this.subs.push(sub);

    this.phxChannel.gets('drug', this.msg);
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

  // feedMatch(){
  //   this.feeds = new Array;
  //   this.feedn = new Array;
  //   this.feedDate = new Date(this.nd);
  //   for(var i=0; i<this.feedt.length; i++){
  //     let chkdate = new Date(this.feedt[i].date);
  //     if(chkdate.getFullYear() == this.feedDate.getFullYear() && chkdate.getMonth() == this.feedDate.getMonth() && chkdate.getDate() == this.feedDate.getDate()){
  //       console.log(this.feedt[i])
  //       this.feeds.push(this.feedt[i]);
  //     }
  //     else{
  //       this.feedn.push(this.feedt[i]);
  //     }
  //   }

  // }
  chkfeed(){
    // 색,테두리
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
    this.msg.today = this.nd;
    this.phxChannel.gets('drug', this.msg);
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
    this.msg.today = this.nd;
    this.phxChannel.gets('drug', this.msg);
  }



  upscroll(att){
    this.forBox = att;
    var box = document.getElementsByClassName('animateBox')[0] as HTMLElement;
    box.style.bottom = 0+'px'
  }
  downscroll(){
    var box = document.getElementsByClassName('animateBox')[0] as HTMLElement;
    var boxHeight = box.clientHeight;
    box.style.bottom = -boxHeight+'px';
  }

  drug(el) {
    if(confirm('투약을 체크하시겠습니까?')) {
      let dt = new Date();

      let m = {
        seniorId: el.id,
        accountId: this.user.id,
        date: new Date(),
        completed: true,
      }
      // console.log(m);
      this.phxChannel.send('drug', m);
    }
  }
}
