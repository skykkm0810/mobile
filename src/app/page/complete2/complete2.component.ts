import { Component, OnInit } from '@angular/core';
import { Environment } from 'src/app/environment/environment';
import { PhxChannelService } from 'src/app/service/phx-channel.service';


@Component({
  selector: 'app-complete2',
  templateUrl: './complete2.component.html',
  styleUrls: ['./complete2.component.css']
})
export class Complete2Component implements OnInit {
  height: any;

  constructor(
    private phxChannel: PhxChannelService
  ) {
    phxChannel.Senior.subscribe( data => {
      console.log(data);
      this.seniorInfo = data;
    })
  }

  ngOnInit(): void {
    this.id = this.phxChannel.getId;
    this.info.confirm = this.phxChannel.getConfirm;
    this.info.seniorId = this.phxChannel.getId;
    this.phxChannel.get('senior', {id: this.id})

    this.height = window.innerHeight;
    this.fixBack()
    setTimeout(() => {
      this.fixBack()
    }, 300);
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
  date = new Date();

  fixBack() {
    var back = document.getElementsByClassName('Wrap')[0] as HTMLElement
    back.style.height = this.height - 80 + 'px';
  }
  close(){
    history.go(-2);
  }
}
