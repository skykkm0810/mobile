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
  att = ATTENDANCE;
  dateId ='';
  constructor(
    private router: Router
  ) {
    var monthF = ('00' + this.month).slice(-2);
    var dayF = ('00' + this.day).slice(-2);
    this.date = this.year+'.'+monthF;
    this.todayformat = this.year+"-"+monthF+'-'+dayF;
    this.filldays();
    
   }

  ngAfterViewInit(): void {
    // this.filldays();
    this.dataMatching();
  }

  ds: any =[
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
    { date: '', day: ''},
  ]

  year = (new Date).getFullYear();
  month = (new Date).getMonth() + 1;
  day = (new Date).getDate();
  date = '';

  today = new Date();
  todayformat;
  monthprev(){
    this.month = this.month - 1;
    if(this.month == 0){
      this.year = this.year - 1;
      this.month = 12;
    }

    var monthF = ('00' + this.month).slice(-2);
    this.date = this.year +"."+ monthF;
    this.filldays();
    this.dataMatching();
  }
  monthnext(){
    this.month = this.month + 1;
    if(this.month == 13){
      this.year = this.year + 1
      this.month = 1
    }

    var monthF = ('00' + this.month).slice(-2);
    this.date = this.year +"."+ monthF;
    this.filldays();
    this.dataMatching();
  }
  filldays(){
    var LastMonthlastDay = new Date(this.year,this.month - 1,0).getDay();
    var lastDate = new Date(this.year,this.month,0).getDate();
    var dateContainer = document.getElementsByClassName('allDays')[0];
    for(var i=0; i<42; i++){
      this.ds[i].day = '';
      if( i>LastMonthlastDay && i<=LastMonthlastDay+lastDate){
        this.ds[i].day = ('00'+(i-LastMonthlastDay)).slice(-2);
        this.ds[i].date =this.year +"-"+ ('00'+this.month).slice(-2)+"-"+this.ds[i].day;
        // this.ds[i].dat = daybox[i].textContent
      }
    }
  }
  dataMatching(){
    // 수정필요
    var daybox = document.getElementsByClassName('days');
    for(var i=0; i<42; i++){
      daybox[i].classList.remove('attended');
      // console.log(daybox[i] as HTMLElement)
      for(var j =0; j<this.att.length; j++){
        console.log(this.ds[i].date,this.att[j].date)
        if(this.ds[i].date == this.att[j].date){
          daybox[i].classList.add('attended');
        }
      }
    }
  }
  checkPick( date ){
    // 근차니가 알려준 소중한정보
    // info.selected = !info.selected;
    // if ( info.selected ) {
    //   info.content = 'sel';
    // } else {
    //   info.content = '';
    // }
    this.router.navigate(['attand', date])
  }
}
