import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class CheckoutService {
  shippingAddress = new BehaviorSubject('');
  shippingEmail = new BehaviorSubject('');

  setShippingDetails(address: string, email?: string) {
    this.shippingAddress.next(address.trim());
    localStorage.setItem('shippingAddress', address);
    if (email) {
      this.shippingEmail.next(email);
      localStorage.setItem('shippingEmail', email);
    }
  }

  constructor() {
    if (localStorage.getItem('shippingAddress'))
      this.shippingAddress.next(localStorage.getItem('shippingAddress'));
    if (localStorage.getItem('shippingEmail'))
      this.shippingAddress.next(localStorage.getItem('shippingEmail'));
  }
}
