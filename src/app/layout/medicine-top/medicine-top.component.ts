import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicine-top',
  templateUrl: './medicine-top.component.html',
  styleUrls: ['./medicine-top.component.css']
})
export class MedicineTopComponent implements OnInit {

  constructor(
   private route: ActivatedRoute,
  ) { }
  title ='요셉제가노인복지센터';

  ngOnInit(): void {
    // this.route.data.subscribe( data => {
    //   this.title = data.title;
    // })
  }
}
