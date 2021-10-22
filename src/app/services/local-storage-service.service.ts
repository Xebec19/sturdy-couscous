import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(PLATFORM_ID) private platformId) {}
  get shippingAddress() {
    if(isPlatformBrowser(this.platformId))
    return localStorage.getItem('shippingAddress');
    else return '';
  }
  get shippingEmail() {
    if(isPlatformBrowser(this.platformId))
    return localStorage.getItem('shippingEmail');
    else return '';
  }
  get token() {
    if(isPlatformBrowser(this.platformId))
    return localStorage.getItem('token');
    else return '';
  }
  set shippingAddress(value: string) {
    if(isPlatformBrowser(this.platformId))
    localStorage.setItem('shippingAddress', value);
  }
  set shippingEmail(value: string) {
    if(isPlatformBrowser(this.platformId))
    localStorage.setItem('shippingEmail', value);
  }
  set token(value: string) {
    if(isPlatformBrowser(this.platformId))
    localStorage.setItem('token', value);
  }

  clear(){
    if(isPlatformBrowser(this.platformId))
    localStorage.clear();
  }
}
