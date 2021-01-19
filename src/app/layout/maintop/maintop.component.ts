import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintop',
  templateUrl: './maintop.component.html',
  styleUrls: ['./maintop.component.css']
})
export class MaintopComponent implements OnInit {
  name = '요셉재가노인복지센터'
  constructor() { }
  
  ngOnInit(): void {
  }

}
