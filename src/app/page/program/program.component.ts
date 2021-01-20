import { Component, OnInit } from '@angular/core';
import { PROGRAM} from '../../interface/interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  program = PROGRAM
  title: any;
  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.background()

    var year = (new Date).getFullYear();
    var month = (new Date).getMonth() + 1;
    var day = (new Date).getDate();
    var monthF = ('00' + month).slice(-2);
    var dayF = ('00' + day).slice(-2);
    this.date = year+'-'+monthF+'-'+dayF;

    this.dataMatching()

    
  }
  // background
  backImg = ''
  background(){
    var back = document.getElementsByClassName('background')[0] as HTMLElement;
    back.style.height = back.clientWidth + 'px';
    back.style.background = 'no-repeat center center / contain'
    if(this.backImg !== ''){
      back.style.backgroundImage = 'url('+ this.backImg +')'
    }
    else {
      back.style.backgroundImage = 'url(../../../assets/photo/noimg.png)';
    }
  }
  nd = new Date();
  year = this.nd.getFullYear();
  month = this.nd.getMonth()+1;
  day = this.nd.getDate();
  date=''
  // 날짜 이동
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

    var noProgram = document.getElementsByClassName('noProgram')[0] as HTMLElement;
        noProgram.style.display = 'block';
    this.dataMatching()
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
    
    var noProgram = document.getElementsByClassName('noProgram')[0] as HTMLElement;
        noProgram.style.display = 'block';
    this.dataMatching()
  }
  // 데이터 매칭
  rows = new Array;
  dataMatching() {
    this.rows = new Array;
    for(var i =0; i<this.program.length; i++){
      if(this.program[i].date == this.date){
        this.rows.push(this.program[i])
        var noProgram = document.getElementsByClassName('noProgram')[0] as HTMLElement;
        noProgram.style.display = 'none';
      }
    }
  }
}
