import { Component, OnInit } from '@angular/core';
import { PROGRAM} from '../../interface/interface';
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  program = PROGRAM
  constructor() { }
  ngOnInit(): void {
    this.background()
    var year = (new Date).getFullYear();
    var month = (new Date).getMonth() + 1;
    var date = (new Date).getDate();
  }
  date =''
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
  dateprev(){
    var nd = new Date();
    var year = nd.getFullYear();
    var month = nd.getMonth()+1;
    var date = nd.getDate();
    
  }
  datenext(){

  }
  
}
