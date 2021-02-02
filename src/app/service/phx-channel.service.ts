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

  socket: any;
  mobileChannel: any;
  seniorChannel: any;


  @Output() Device: EventEmitter<any> = new EventEmitter();
  @Output() Devices: EventEmitter<any> = new EventEmitter();
  @Output() Senior: EventEmitter<any> = new EventEmitter();
  @Output() Seniors: EventEmitter<any> = new EventEmitter();


  private init_channel() {

    this.socket = new Socket( `${Environment.socket_channel}/socket`, {
      logger: (kind, msg, data) => {
        // console.log( `${kind}: ${msg}`, data );
      },
      transport: WebSocket
    });
    this.socket.connect();


    this.mobileChannel = this.socket.channel('cpf:device', {});
    this.mobileChannel
      .join()
      .receive('ok', resp => {
        console.log('Joined successfully', resp);
      })
      .receive('error', resp => {
        console.log('Unable to join', resp);
      });
    this.mobileChannel.on('device:add', payload => {
      // console.log('cpf:device from phx channel: ', payload);
      this.Devices.emit(payload);
    })
    this.mobileChannel.on('device:list', payload => {
      // console.log('cpf:device:list from phx socket: ', payload);
      this.Devices.emit(payload);
    })


    this.seniorChannel = this.socket.channel('cpf:mobile', {});
    this.seniorChannel
    .join()
    .receive('ok', resp => {
      console.log('Joined successfully', resp);
    })
    .receive('error', resp => {
      console.log('Unable to join', resp);
    });
    this.seniorChannel.on('senior:list', payload => {
      // console.log('cpf:device:list from phx socket: ', payload);
      this.Seniors.emit(payload);
    })
    this.seniorChannel.on('senior:detail', payload => {
      // console.log('cpf:device:list from phx socket: ', payload);
      this.Senior.emit(payload);
    })
    

  }

  send(channel, message) {
    switch (channel) {
      case 'device':
        this.mobileChannel.push("device:add:req", {body: message});
        break;

      default:
        break;
    }
  }

  gets(channel, message?) : void {
    switch (channel) {
      case 'device':
        this.mobileChannel.push('device:list:req', { body: message });
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
      case 'device':
        this.mobileChannel.push('device:detail:update:req', {body: message});
        break;

      default:
        break;
    }
  }

  del(channel, message) : void {
    switch ( channel ) {
      case 'device':
        this.mobileChannel.push('device:delete:req', {body: message});
        break;

      default:
        break;
    }
  }
}
