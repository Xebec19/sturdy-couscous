import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as CheckoutSDK from "@bambora/checkout-sdk-web";
import { environment} from '../../../environments/environment'
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

  async makePayment(){
  //   try{
  //   const checkout = new ModalCheckout(environment.BamboraAccessPasscode);
  //   checkout.on(
  //     Event.Authorize,
  //     payload => console.log(payload.data.txnid)
  //   );
    
  //   checkout.initialize();
  //   setTimeout(() => {
  //     checkout.show();
  //   },1000);
  // }
  // catch(error){
  //   console.log('error from bambora ',error);
  // }
  const checkout = new CheckoutSDK.RedirectCheckout(environment.BamboraAccessPasscode);
  try {
    await checkout.initialize();
    console.log(checkout.sessionToken);
  // await checkout.on(Event.Authorize,
  //   payload => console.log(payload.data.txnid));
  // await checkout.show();
} catch (error) {
  console.log('--error : ',error);
  console.log(error instanceof CheckoutSDK.Errors.NoSessionTokenProvidedError);
  console.log(error instanceof ReferenceError);
}

  }

  constructor() {
    if (localStorage.getItem('shippingAddress'))
      this.shippingAddress.next(localStorage.getItem('shippingAddress'));
    if (localStorage.getItem('shippingEmail'))
      this.shippingAddress.next(localStorage.getItem('shippingEmail'));
  }
}
