import { Component, OnInit,AfterViewInit } from '@angular/core';
import {ATTENDANCE} from '../../interface/interface'
import {filePath} from '../../environment/environment';
@Component({
  selector: 'app-senior-list',
  templateUrl: './senior-list.component.html',
  styleUrls: ['./senior-list.component.css']
})
export class SeniorListComponent implements OnInit,AfterViewInit {
  attd = ATTENDANCE;
  attds : any;
  attdn : any;
  attDate;
  today=new Date();
  forBox;
  filePath = filePath;
  constructor() { }

  ngOnInit(): void {
    this.attendMatch();
  }
  ngAfterViewInit(){

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
  attendMatch(){
    this.attds = new Array;
    this.attdn = new Array;
    this.attDate = this.today;
    for(var i=0; i<this.attd.length; i++){
      let chkdate = new Date(this.attd[i].date);
      if(chkdate.getFullYear() == this.attDate.getFullYear() && chkdate.getMonth() == this.attDate.getMonth() && chkdate.getDate() == this.attDate.getDate()){
        this.attds.push(this.attd[i]);
      }
      else{
        this.attdn.push(this.attd[i]);
      }
    }
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
}
