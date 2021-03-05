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
  accountChannel: any;


  @Output() Device: EventEmitter<any> = new EventEmitter();
  @Output() Devices: EventEmitter<any> = new EventEmitter();
  @Output() Activities: EventEmitter<any> = new EventEmitter();
  @Output() Presents: EventEmitter<any> = new EventEmitter();
  @Output() PresentAdd: EventEmitter<any> = new EventEmitter();
  @Output() PresentAddInvalid: EventEmitter<any> = new EventEmitter();
  @Output() Drugs: EventEmitter<any> = new EventEmitter();
  @Output() DrugAdd: EventEmitter<any> = new EventEmitter();
  @Output() Meals: EventEmitter<any> = new EventEmitter();
  @Output() MealAdd: EventEmitter<any> = new EventEmitter();
  @Output() MealUp: EventEmitter<any> = new EventEmitter();
  @Output() MealDel: EventEmitter<any> = new EventEmitter();
  @Output() Senior: EventEmitter<any> = new EventEmitter();
  @Output() Seniors: EventEmitter<any> = new EventEmitter();
  @Output() Event: EventEmitter<any> = new EventEmitter();
  @Output() Access: EventEmitter<any> = new EventEmitter();
  @Output() AccessInvalid: EventEmitter<any> = new EventEmitter();


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
    this.mobileChannel.on('mobile:activity:list', payload => {
      // console.log('cpf:mobile:list from phx socket: ', payload);
      this.Activities.emit(payload.body);
    })
    this.mobileChannel.on('mobile:present:list', payload => {
      // console.log('cpf:mobile:list from phx socket: ', payload);
      this.Presents.emit(payload.body);
    })
    this.mobileChannel.on('mobile:present:add', payload => {
      // console.log('cpf:mobile:list from phx socket: ', payload);
      this.PresentAdd.emit(payload.body);
    })
    this.mobileChannel.on('mobile:present:add:invalid', payload => {
      // console.log('cpf:mobile:list from phx socket: ', payload);
      this.PresentAddInvalid.emit(payload.body);
    })
    this.mobileChannel.on('mobile:drug:list', payload => {
      // console.log('cpf:mobile:list from phx socket: ', payload);
      this.Drugs.emit(payload.body);
    })
    this.mobileChannel.on('mobile:drug:add', payload => {
      // console.log('cpf:mobile:list from phx socket: ', payload);
      this.DrugAdd.emit(payload.body);
    })
    this.mobileChannel.on('mobile:meal:list', payload => {
      // console.log('cpf:mobile:list from phx socket: ', payload);
      this.Meals.emit(payload.body);
    })
    this.mobileChannel.on('mobile:meal:add', payload => {
      // console.log('cpf:mobile:list from phx socket: ', payload);
      this.MealAdd.emit(payload.body);
    })
    this.mobileChannel.on('mobile:meal:up', payload => {
      // console.log('cpf:mobile:list from phx socket: ', payload);
      this.MealUp.emit(payload.body);
    })
    this.mobileChannel.on('mobile:meal:del', payload => {
      // console.log('cpf:mobile:list from phx socket: ', payload);
      this.MealDel.emit(payload.body);
    })

    this.seniorChannel = this.socket.channel('cpf:senior', {});
    this.seniorChannel
    .join()
    .receive('ok', resp => {
      console.log('Joined successfully', resp);
    })
    .receive('error', resp => {
      console.log('Unable to join', resp);
    });
    this.seniorChannel.on('senior:detail', payload => {
      this.Senior.emit(payload);
    })
    this.accountChannel = this.socket.channel('cpf:account', {});
    this.accountChannel
    .join()
    .receive('ok', resp => {
      console.log('Joined successfully', resp);
    })
    .receive('error', resp => {
      console.log('Unable to join', resp);
    });
    this.accountChannel.on('account:access', payload => {
      this.Access.emit(payload.body);
    })
    this.accountChannel.on('account:invalid', payload => {
      this.AccessInvalid.emit(payload.body);
    })

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
      case 'meal':
        this.mobileChannel.push("mobile:meal:add:req", {body: message});
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
      case 'activity':
        this.mobileChannel.push('mobile:activity:list:req', { body: message });
      break;
      case 'present':
        this.mobileChannel.push('mobile:presents:list:req', { body: message });
      break;
      case 'drug':
        this.mobileChannel.push('mobile:drug:list:req', { body: message });
      break;
      case 'meal':
        this.mobileChannel.push('mobile:meal:list:req', { body: message });
      break;
      
    
      default:
      break;
    }
  }

  get(channel, message) : void {
    switch (channel) {
      case 'senior':
        this.seniorChannel.push('senior:detail:req', { body: message });
      break;
      case 'access':
        this.accountChannel.push("account:access:req", {body: message});
      break;
      
      default:
      break;
    
    }
  }

  up(channel, message) : void {
    switch ( channel ) {
      case 'mobile':
        this.mobileChannel.push('mobile:detail:update:req', {body: message});
      break;
      case 'meal':
        this.mobileChannel.push('mobile:meal:up:req', {body: message});
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
      case 'meal':
        this.mobileChannel.push('mobile:meal:del:req', {body: message});
      break;

      default:
      break;
    }
  }
}
