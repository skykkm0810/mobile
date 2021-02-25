import { Route } from '@angular/compiler/src/core';
import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filePath} from '../../environment/environment';
import { ATTENDANCE} from '../../interface/interface';
@Component({
  selector: 'app-attand',
  templateUrl: './attand.component.html',
  styleUrls: ['./attand.component.css']
})
export class AttandComponent {
  attd = ATTENDANCE;
  attds;
  attdn;
  attDate;
  info: any;
  year :any;
  month : any;
  day : any;
  forBox:any;
  filePath = filePath;
  constructor(
    private route: ActivatedRoute
  ) {
   }
    
  ngOnInit(): void {
    this.info = this.route.snapshot.paramMap.get('date');
    console.log(this.info)
    this.year = Number(this.info.split('-')[0]);
    this.month = Number(this.info.split('-')[1]);
    this.day = Number(this.info.split('-')[2]);
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
    this.attDate = new Date(this.info);
    for(var i=0; i<this.attd.length; i++){
      let chkdate = new Date(this.attd[i].date);
      if(chkdate.getFullYear() == this.attDate.getFullYear() && chkdate.getMonth() == this.attDate.getMonth() && chkdate.getDate() == this.attDate.getDate()){
        console.log(this.attd[i])
        this.attds.push(this.attd[i]);
      }
      else{
        this.attdn.push(this.attd[i]);
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
    this.info = this.year+'-'+monthF+'-'+dayF;

    this.attendMatch();
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

    this.attendMatch();
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
