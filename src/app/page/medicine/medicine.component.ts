import { Component, OnInit } from '@angular/core';
import {FEED} from '../../interface/interface'
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  feed = FEED
  feeds :any
  nd = new Date();
  year = this.nd.getFullYear();
  month = this.nd.getMonth()+1;
  day = this.nd.getDate();
  date=''
  constructor() { }
  ngOnInit(): void {
    var year = (new Date).getFullYear();
    var month = (new Date).getMonth() + 1;
    var day = (new Date).getDate();
    var monthF = ('00' + month).slice(-2);
    var dayF = ('00' + day).slice(-2);
    this.date = year+'-'+monthF+'-'+dayF;

    this.feedMatch();
    setTimeout(()=>{
      this.chkfeed();
    },200)
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

  feedMatch(){
    var result = new Array;
    for(var i=0; i<this.feed.length; i ++){
      if(this.feed[i].date == this.date){
        result.push(this.feed[i])
      }
    }
    this.feeds = result
  }
  chkfeed(){
    // 색,테두리
    var lists = document.getElementsByClassName('list');
    var feeds = this.feeds;
    for(var i=0; i<feeds.length; i++){
      console.log(feeds[i].putter)
      if(feeds[i].putter !== ''){
        (lists[i] as HTMLElement).style.backgroundColor ='#F2F7FF';
        (lists[i].getElementsByClassName('chkIcon')[0] as HTMLElement).style.backgroundImage = 'url(../../../assets/icon/check-blue.png)';
        lists[i].getElementsByClassName('imgWrap')[0].classList.remove('none');
        lists[i].getElementsByClassName('imgWrap')[0].classList.add('ok');
      }
    }
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
    var monthF = ('00' + this.month).slice(-2);
    var dayF = ('00' + this.day).slice(-2);
    this.date = this.year+'-'+monthF+'-'+dayF;

    this.feedMatch();
    setTimeout(()=>{
      this.chkfeed();
    },300)
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
    this.date = this.year+'-'+monthF+'-'+dayF;

    this.feedMatch();
    setTimeout(()=>{
      this.chkfeed();
    },300)
  }



  boxUp(feed:any ,e:Event){
    var box = document.getElementsByClassName('animateBox')[0] as HTMLElement;
    box.style.position = 'absolute'
    box.style.bottom = 0+'px'

    document.getElementsByClassName('teacher')[0].getElementsByClassName('contents')[0].textContent = feed.putter;
    document.getElementsByClassName('what')[0].getElementsByClassName('contents')[0].textContent = feed.what;
    document.getElementsByClassName('time')[0].getElementsByClassName('contents')[0].textContent = feed.time;
    document.getElementsByClassName('contact')[0].getElementsByClassName('contents')[0].textContent = feed.puterContact;
    
  }
  downscroll(){
    var box = document.getElementsByClassName('animateBox')[0] as HTMLElement;
    box.style.position = 'fixed'
    box.style.bottom = -350+'px'
  }
}
