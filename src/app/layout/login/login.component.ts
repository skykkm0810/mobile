import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  height: any;
  today=new Date();
  constructor() { }

  ngOnInit(): void {
    this.height = window.innerHeight;
    this.fixBack()
  }
  fixBack() {
    var back = document.getElementsByClassName('Wrap')[0] as HTMLElement
    back.style.height = this.height + 'px';
  }
}
