import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICartSummary } from 'src/app/models';
import { AppStateService } from 'src/app/services/app-state.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
})
export class CartSummaryComponent implements OnInit {
  cartSummarySubs: Subscription;
  priceSymbolSubs: Subscription;
  cartSummary: ICartSummary;
  priceSymbol: string;
  constructor(private shoppingCartService: ShoppingCartService, private appStateService: AppStateService) {}

  ngOnInit(): void {
    this.cartSummarySubs = this.shoppingCartService.shoppingCart.subscribe((val) => {
      this.cartSummary = val.cartSummary;
    })
    this.priceSymbolSubs = this.appStateService.priceSymbol$.subscribe(val => {
      this.priceSymbol = val;
    })
  }

  ngOnDestroy(): void {
    this.cartSummarySubs.unsubscribe();
    this.priceSymbolSubs.unsubscribe();
  }
}
