import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AppStateService } from 'src/app/services/app-state.service';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
declare var Razorpay;
@Injectable()
export class CheckoutService {
  shippingAddress = new BehaviorSubject('');
  shippingEmail = new BehaviorSubject('');
  constructor(
    private shoppingCart: ShoppingCartService,
    private appStateService: AppStateService,
    private requestService: RequestHandlerService,
    private router: Router
  ) {
    if (localStorage.getItem('shippingAddress'))
      this.shippingAddress.next(localStorage.getItem('shippingAddress'));
    if (localStorage.getItem('shippingEmail'))
      this.shippingAddress.next(localStorage.getItem('shippingEmail'));
  }

  setShippingDetails(address: string, email?: string) {
    this.shippingAddress.next(address.trim());
    this.shippingEmail.next(email);
  }

  makePayment = async (amount: Number) => {
    console.log('payment started');
    console.log('Amount : ', amount);
    if(!!!this.shippingAddress.getValue()){
      this.appStateService.showAlert('Invalid address');
      return;
    }
    if (!!!amount) {
      this.appStateService.showAlert('Amount is required');
    }
    this.requestService
      .postRequest('/order/create_order', { amount })
      .pipe(map((res) => res.body.data))
      .subscribe((res) => {
        console.log(res);
        if (res.status === 'created') {
          console.log('created');
          var options = {
            key: environment.RAZORPAY_KEY,
            amount: res.amount,
            currency: 'INR',
            name: 'Bazaar',
            description: 'Test Transaction',
            image: 'https://example.com/your_logo',
            order_id: res.id,
            handler: (response) =>
              this.generateOrder(
                response.razorpay_payment_id,
                response.razorpay_order_id,
                response.razorpay_signature
              ),
            prefill: {
              name: '',
              email: '',
              contact: '',
            },
            theme: {
              color: '#3f51b5',
            },
          };
          console.log('--options : ', options);
          const rzp = new Razorpay(options);
          rzp.open();
          rzp.on('payment.failed', () => {
            this.appStateService.showAlert('Payment failed');
          });
        }
      });
  };

  generateOrder = (
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature
  ) => {
    // console.log(razorpay_order_id,razorpay_signature,razorpay_payment_id);
    const payload = {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    };
    this.requestService
      .postRequest('/order/checkout', payload)
      .pipe(map((res) => res.body))
      .subscribe((res) => {
        if (res.status) {
          this.router.navigate(['home']);
        } else this.appStateService.showAlert('Payment failed');
      });
  };
}
