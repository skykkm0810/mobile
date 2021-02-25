import { Component, OnInit } from '@angular/core';
import { PROGRAM} from '../../interface/interface';
import { ActivatedRoute, Router } from '@angular/router';
import { filePath} from '../../environment/environment'
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent{
  
  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {

    this.dataMatching();
  }
  ngAfterViewInit(): void {
  }
  program = PROGRAM
  title: any;
  filePath = filePath;
  nd = new Date();
  year = this.nd.getFullYear();
  month = this.nd.getMonth();
  day = this.nd.getDate();
  backImg
  backName;
  clickOn;
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
    this.nd = new Date(this.year, this.month, this.day);
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

    this.dataMatching();

    // (document.getElementsByClassName('program')[0] as HTMLElement).click();
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
    this.backImg = this.rows[0].imgurl;
    this.backName = this.rows[0].name;
    this.clickOn = this.rows[0];
  }
  
  clicked(data){
    this.clickOn = data; 
    this.backImg = data.imgurl;
    this.backName = data.name;
  }
  
}
