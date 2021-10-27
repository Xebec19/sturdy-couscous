import { Injectable, Injector, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AppStateService } from 'src/app/services/app-state.service';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
declare var Razorpay; // Inject this
@Injectable()
export class CheckoutService {
  shippingAddress = new BehaviorSubject('');
  shippingEmail = new BehaviorSubject('');
  constructor(
    private shoppingCart: ShoppingCartService,
    private appStateService: AppStateService,
    private requestService: RequestHandlerService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private injector: Injector
  ) {
    this.shippingAddress.next(localStorageService.shippingAddress);
    this.shippingEmail.next(localStorageService.shippingEmail);
  }

  setShippingDetails(address: string, email?: string) {
    this.shippingAddress.next(address.trim());
    this.shippingEmail.next(email);
  }

  makePayment = async (amount: Number) => {
    console.log('payment started');
    console.log('Amount : ', amount);
    if (!!!this.shippingAddress.getValue()) {
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
          // console.log('created');
          var options = {
            key: environment.RAZORPAY_KEY,
            amount: res.amount,
            currency: 'INR',
            name: 'Bazaar',
            description: 'Test Transaction',
            image:
              'https://firebasestorage.googleapis.com/v0/b/bazaar-8537f.appspot.com/o/Bazaar.png?alt=media&token=a1f24bf4-70b4-42db-ab4c-33d22a643e81',
            order_id: res.id,
            handler: (response) =>
              this.generateOrder(
                response.razorpay_payment_id,
                response.razorpay_order_id,
                response.razorpay_signature
              ),
            prefill: {
              name: 'Rohan', // todo change it
              email: 'rohan@gmail.com',
              contact: '3434343434',
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
    const payload = {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      address: JSON.stringify(this.shippingAddress.getValue()),
      email: this.shippingEmail.getValue(),
    };
    this.requestService
      .postRequest('/order/checkout', payload)
      .pipe(map((res) => res.body))
      .subscribe((res) => {
        if (res.status) {
          const ngZone = this.injector.get(NgZone);
          this.shippingAddress.next('');
          this.shippingEmail.next('');
          ngZone.run(() => {
            this.router.navigate([`receipt`], {
              queryParams: { orderId: res.data },
            });
          })
        } else this.appStateService.showAlert('Payment failed');
      });
  };
}
