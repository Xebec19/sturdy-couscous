import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICartDetails } from 'src/app/models';
import { AppStateService } from 'src/app/services/app-state.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {
  isMobile: boolean;
  cartItems: any = [];
  deviceTypeSub: Subscription;
  cartItemsSub: Subscription;
  constructor(private appStateService: AppStateService, private shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
    this.deviceTypeSub = this.appStateService.isHandset$.subscribe((val) => {
      this.isMobile = val;
    });
    this.shoppingCart.readCart();
    this.cartItemsSub = this.shoppingCart.shoppingCart.subscribe((val) => {
      this.cartItems = val.cartItems;
      console.log('--cart items ',this.cartItems);
    });
  }
  ngOnDestroy(): void {
   this.deviceTypeSub.unsubscribe(); 
   this.cartItemsSub.unsubscribe();
  }
}
