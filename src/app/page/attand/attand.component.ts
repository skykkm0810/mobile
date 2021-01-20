import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-attand',
  templateUrl: './attand.component.html',
  styleUrls: ['./attand.component.css']
})
export class AttandComponent implements OnInit {

  info: any;
  title: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.info = this.route.snapshot.paramMap.get('key');
    console.log(this.info);
    this.route.data.subscribe( data => {
      this.title = data;
      console.log(this.title);
    })
  }
  
}
