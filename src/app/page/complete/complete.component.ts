import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
  height: any;

  constructor() { }

  ngOnInit(): void {
    this.height = window.innerHeight;
    this.fixBack()
    setTimeout(()=>
    this.fixBack()
    ,300)
  }
  fixBack() {
    var back = document.getElementsByClassName('Wrap')[0] as HTMLElement
    back.style.height = this.height - 80 + 'px';
  }
  close(){
    history.go(-2);
  }
  
}
