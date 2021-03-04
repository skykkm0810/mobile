import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { PhxChannelService } from 'src/app/service/phx-channel.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  height: any;
  info = {
    uname: '',
    pwd: ''
  }

  today=new Date();
  constructor(
    private auth: AuthService,
    private router: Router,
    private phxChannel: PhxChannelService
  ) { }

  ngOnInit(): void {
    this.height = window.innerHeight;
    this.fixBack()
    this.init();
  }

  ngOnDestroy(): void {
    for( let i = 0; i < this.subs.length; i++ ) {
      this.subs[i].unsubscribe();
    }
  }

  subs = [];

  init(): void {
    let sub;
    sub = this.phxChannel.Access.subscribe( () => {
      this.router.navigate(['']);
    })
    this.subs.push(sub);
    sub = this.phxChannel.AccessInvalid.subscribe( () => {
      alert('계정정보가 틀렸습니다.');
      this.info.pwd = '';
    })
    this.subs.push(sub);
  }

  fixBack() {
    var back = document.getElementsByClassName('Wrap')[0] as HTMLElement
    back.style.height = this.height + 'px';
  }
}
