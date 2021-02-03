import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PhxChannelService } from 'src/app/service/phx-channel.service';

@Component({
  selector: 'app-feed-medicine',
  templateUrl: './feed-medicine.component.html',
  styleUrls: ['./feed-medicine.component.css']
})
export class FeedMedicineComponent implements OnInit {
  height: any;

  constructor(
    public router : Router,
    private phxChannel: PhxChannelService,
    private route: ActivatedRoute
  ) {
  }
  
  id;
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params;
    console.log(this.id);
    this.phxChannel.setId(this.id);
    this.height = window.innerHeight;
    setTimeout(()=>
    this.fixBack()
    ,300)
  }
  fixBack() {
    var back = document.getElementsByClassName('Wrap')[0] as HTMLElement
    back.style.height = this.height - 80 + 'px';
  }
  linkMove(el){
    // var linkData = (e.target as HTMLElement).classList[0];
    this.phxChannel.setConfirm( el );
    this.router.navigate(['confirm']);
  }
}
