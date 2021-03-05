import { Component, OnInit } from '@angular/core';
import { Environment } from 'src/app/environment/environment';
import { AuthService } from 'src/app/service/auth.service';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
import {USER} from '../../interface/interface';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private phxChannel: PhxChannelService,
  ) { }

  ngOnInit(): void {
    console.log(this.user[0])
    this.info = JSON.parse(this.auth.getUserData());
    console.log(this.info);
    this.phxChannel.get('center', {id: this.info.centerId})

    this.phxChannel.Center.subscribe( data => {
      this.center = data.name
    })
  }

  f = Environment.filePath;
  info;
  user = USER;
  center = '';
}
