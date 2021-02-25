import { Component, OnInit,ViewChild,AfterViewInit,ViewChildren } from '@angular/core';
import {FEED} from '../../interface/interface';
import {filePath} from '../../environment/environment';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit ,AfterViewInit{
  feedt = FEED;
  feeds ;
  feedn ;
  feedDate;
  nd = new Date();
  year = this.nd.getFullYear();
  month = this.nd.getMonth();
  day = this.nd.getDate();
  filePath = filePath;
  forBox;
  constructor() { }
  ngOnInit(): void {
    this.feedMatch();
  }
  ngAfterViewInit() {

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
    this.feeds = new Array;
    this.feedn = new Array;
    this.feedDate = new Date(this.nd);
    for(var i=0; i<this.feedt.length; i++){
      let chkdate = new Date(this.feedt[i].date);
      if(chkdate.getFullYear() == this.feedDate.getFullYear() && chkdate.getMonth() == this.feedDate.getMonth() && chkdate.getDate() == this.feedDate.getDate()){
        console.log(this.feedt[i])
        this.feeds.push(this.feedt[i]);
      }
      else{
        this.feedn.push(this.feedt[i]);
      }
    }

  }
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
    this.feedMatch();

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

    this.feedMatch();
    
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
}
