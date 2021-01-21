import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
@Component({
  selector: 'app-feed-medicine',
  templateUrl: './feed-medicine.component.html',
  styleUrls: ['./feed-medicine.component.css']
})
export class FeedMedicineComponent implements OnInit {
  height: any;

  constructor(
    public router : Router

  ) { }

  ngOnInit(): void {
    this.height = window.innerHeight;
    setTimeout(()=>
    this.fixBack()
    ,300)
  }
  fixBack() {
    var back = document.getElementsByClassName('Wrap')[0] as HTMLElement
    back.style.height = this.height - 80 + 'px';
  }
  linkMove(e:Event){
    var linkData = (e.target as HTMLElement).classList[0];
    this.router.navigate(['/confirm/' + linkData]);
  }
}
