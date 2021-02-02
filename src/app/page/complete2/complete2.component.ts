import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete2',
  templateUrl: './complete2.component.html',
  styleUrls: ['./complete2.component.css']
})
export class Complete2Component implements OnInit {
  height: any;

  constructor() { }

  ngOnInit(): void {
    this.height = window.innerHeight;
    this.fixBack()
    setTimeout(() => {
      this.fixBack()
    }, 300);
  }
  fixBack() {
    var back = document.getElementsByClassName('Wrap')[0] as HTMLElement
    back.style.height = this.height - 80 + 'px';
  }
  close(){
    history.go(-2);
  }
}
