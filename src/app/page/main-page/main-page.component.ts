import { Component, OnInit } from '@angular/core';
import {USER} from '../../interface/interface';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.user[0])
  }
  user = USER;
  center = '요셉재가노인복지센터';
}
