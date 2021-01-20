import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-subtop',
  templateUrl: './subtop.component.html',
  styleUrls: ['./subtop.component.css']
})
export class SubtopComponent implements OnInit {

  title: any;

  constructor(
   private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe( data => {
      this.title = data.title;
    })
  }
  back(){
    history.back();
  }
}
