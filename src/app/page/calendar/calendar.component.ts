import { getLocaleDayNames } from '@angular/common';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ATTENDANCE } from '../../interface/interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements AfterViewInit {
  att = ATTENDANCE
  dateId =''
  constructor(
    private router: Router
  ) {
    var monthF = ('00' + this.month).slice(-2);
    this.date = this.year+'.'+monthF
    
   }

  ngAfterViewInit(): void {
    this.filldays()
    this.dataMatching()
  }

  // ds: any =[
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  //   { dat: '', selected: false, content: ''},
  // ]

  year = (new Date).getFullYear()
  month = (new Date).getMonth() + 1
  day = (new Date).getDate()
  date = ''
  monthprev(){
    this.month = this.month - 1;
    if(this.month == 0){
      this.year = this.year - 1
      this.month = 12
    }

    var monthF = ('00' + this.month).slice(-2);
    this.date = this.year +"."+ monthF
    this.filldays()
    this.dataMatching()
  }
  monthnext(){
    this.month = this.month + 1;
    if(this.month == 13){
      this.year = this.year + 1
      this.month = 1
    }

    var monthF = ('00' + this.month).slice(-2);
    this.date = this.year +"."+ monthF
    this.filldays()
    this.dataMatching()
  }
  filldays(){
    var LastMonthlastDay = new Date(this.year,this.month - 1,0).getDay();
    var lastDate = new Date(this.year,this.month,0).getDate();
    var dateContainer = document.getElementsByClassName('allDays')[0];
    var daybox = document.querySelectorAll('.days');
    for(var i=0; i<42; i++){
      
      daybox[i].textContent = '';
      if( i>LastMonthlastDay && i<=LastMonthlastDay+lastDate){
        daybox[i].textContent = i-LastMonthlastDay+"";
        // this.ds[i].dat = daybox[i].textContent
      }
    }
  }
  dataMatching(){
    var daybox = document.querySelectorAll('.days');
    var monthF2 = ('00' + this.month).slice(-2);
    for(var i=0; i<42; i++){
      (daybox[i] as HTMLElement).style.backgroundColor = '#fff' 
      var dateF = ('00' + daybox[i].textContent).slice(-2);
      var makeChk = this.year+'-'+monthF2 +'-'+dateF
      for(var j =0; j<this.att.length; j++){
        if(makeChk == this.att[j].date){
          (daybox[i] as HTMLElement).style.backgroundColor = '#357CD9' ;
          (daybox[i] as HTMLElement).style.color = '#fff';
        }
      }
    }
  }
  checkPick( e: Event ){
    // 근차니가 알려준 소중한정보
    // info.selected = !info.selected;
    // if ( info.selected ) {
    //   info.content = 'sel';
    // } else {
    //   info.content = '';
    // }
    var thisbox =  e.target as HTMLElement;
    var monthF3 = ('00' + this.month).slice(-2);
    var dateF2 = ('00' + thisbox.textContent).slice(-2);
    this.dateId = this.year + "-" + monthF3 + '-' + dateF2
    console.log(this.dateId)

    this.router.navigate(['attand', this.dateId])
    
  }
}
