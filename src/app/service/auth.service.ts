import { Injectable, Output, EventEmitter } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PhxChannelService } from './phx-channel.service';

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  @Output() Log: EventEmitter<any> = new EventEmitter();
  constructor(
    private phxChannel: PhxChannelService,
  ) {
    phxChannel.Access.subscribe( data => {
      this.setToken(data);
      this.Log.emit();
    })
  }

  TOKEN_NAME = 'cpf_m_token';

  signin( el ): void {
    this.phxChannel.get( 'access', el );
  }

  signout(): void {
    this.removeToken();
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? !this.isTokenExpired(token) : false;
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_NAME);
    this.Log.emit();
  }

  isTokenExpired(token: string) {
    return jwtHelper.isTokenExpired(token);
  }

  getUserData(): string {
    return jwtHelper.decodeToken(this.getToken()).sub;
  }
}
