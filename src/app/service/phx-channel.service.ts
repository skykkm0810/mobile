import { Injectable, EventEmitter, Output } from '@angular/core';
import { Environment } from '../environment/environment';
import { Socket } from 'phoenix';

declare const Phoenix: any;

@Injectable({
  providedIn: 'root'
})

export class PhxChannelService {

  constructor() {
    this.init_channel();
  }

  id: any;
  confirm: any;

  get getId() {
    return this.id;
  }
  setId( el ) {
    this.id = el.id;
  }
  get getConfirm() {
    return this.confirm;
  }
  setConfirm( el ) {
    this.confirm = el;
  }


  socket: any;
  mobileChannel: any;
  seniorChannel: any;


  @Output() Device: EventEmitter<any> = new EventEmitter();
  @Output() Devices: EventEmitter<any> = new EventEmitter();
  @Output() Senior: EventEmitter<any> = new EventEmitter();
  @Output() Seniors: EventEmitter<any> = new EventEmitter();
  @Output() Event: EventEmitter<any> = new EventEmitter();


  private init_channel() {

    this.socket = new Socket( `${Environment.socket_channel}/socket`, {
      logger: (kind, msg, data) => {
        // console.log( `${kind}: ${msg}`, data );
      },
      transport: WebSocket
    });
    this.socket.connect();


    this.mobileChannel = this.socket.channel('cpf:mobile', {});
    this.mobileChannel
      .join()
      .receive('ok', resp => {
        console.log('Joined successfully', resp);
      })
      .receive('error', resp => {
        console.log('Unable to join', resp);
      });
    this.mobileChannel.on('mobile:add', payload => {
      // console.log('cpf:mobile from phx channel: ', payload);
      this.Event.emit(payload);
    })
    this.mobileChannel.on('mobile:list', payload => {
      // console.log('cpf:mobile:list from phx socket: ', payload);
      this.Devices.emit(payload);
    })
    this.mobileChannel.on('')

  }

  send(channel, message) {
    switch (channel) {
      case 'mobile':
        this.mobileChannel.push("mobile:add:req", {body: message});
      break;
      case 'drug':
        this.mobileChannel.push("mobile:drug:add:req", {body: message});
      break;
      case 'present':
        this.mobileChannel.push("mobile:present:add:req", {body: message});
      break;
      

      default:
        break;
    }
  }

  gets(channel, message?) : void {
    switch (channel) {
      case 'mobile':
        this.mobileChannel.push('mobile:list:req', { body: message });
        break;
    
      default:
        break;
    }
  }

  get(channel, message) : void {
    switch (channel) {
      
      default:
        break;
    
    }
  }

  up(channel, message) : void {
    switch ( channel ) {
      case 'mobile':
        this.mobileChannel.push('mobile:detail:update:req', {body: message});
        break;

      default:
        break;
    }
  }

  del(channel, message) : void {
    switch ( channel ) {
      case 'mobile':
        this.mobileChannel.push('mobile:delete:req', {body: message});
        break;

      default:
        break;
    }
  }
}
