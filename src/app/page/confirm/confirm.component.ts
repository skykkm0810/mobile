import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Environment } from 'src/app/environment/environment';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  height: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private phxChannel: PhxChannelService
  ) {
    phxChannel.Event.subscribe( data => {
      console.log(data);
      if ( data.body == 'feed' ) {
        this.router.navigate(['/feedOk']);
      } else {
        this.router.navigate(['/attendOk']);
      }
    })
    phxChannel.Senior.subscribe( data => {
      console.log(data);
      this.seniorInfo = data;
    })
  }

  filePath = Environment.filePath;
  id;
  seniorInfo ={ file: [{path: ''}], name: ''};
  info: any = {
    seniorId: '',
    confirm: '',
    date: new Date(),
    status: true,
  }
  ngOnInit(): void {
    this.id = this.phxChannel.getId;
    this.info.confirm = this.phxChannel.getConfirm;
    this.info.seniorId = this.phxChannel.getId;
    console.log(this.info.confirm);
    this.phxChannel.get('senior', {id: this.id})

    this.height = window.outerHeight;
    setTimeout(() => {
      this.fixBack()
    }, 300);
  }
  fixBack() {
    this.height = window.outerHeight;
    var back = document.getElementsByClassName('Wrap')[0] as HTMLElement
    back.style.height = this.height - 80 + 'px';
  }
  close(){
    history.go(-1);
  }
  link(){
    console.log(this.info.confirm);
    if( this.info.confirm == 1) {
      this.phxChannel.send('drug', this.info)
    } else {
      this.phxChannel.send('present', this.info)
    }
  }
}
