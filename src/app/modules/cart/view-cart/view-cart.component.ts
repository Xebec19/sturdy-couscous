import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICartConfirmModal, ICartDetails } from 'src/app/models';
import { AppStateService } from 'src/app/services/app-state.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss'],
})
export class ViewCartComponent implements OnInit {
  isMobile: boolean;
  cartItems: any = [];
  deviceTypeSub: Subscription;
  cartItemsSub: Subscription;
  priceSymbolSub: Subscription;
  priceSymbol: string;
  constructor(
    private appStateService: AppStateService,
    private shoppingCart: ShoppingCartService,
    public dialog: MatDialog,
    private requestService: RequestHandlerService
  ) {}

  ngOnInit(): void {
    this.deviceTypeSub = this.appStateService.isHandset$.subscribe((val) => {
      this.isMobile = val;
    });
    this.shoppingCart.readCart();
    this.cartItemsSub = this.shoppingCart.shoppingCart.subscribe((val) => {
      this.cartItems = val.cartItems;
      console.log('--cart items ', this.cartItems);
    });
    this.priceSymbolSub = this.appStateService.priceSymbol$.subscribe(val => {
      this.priceSymbol = val;
    })
  }
  ngOnDestroy(): void {
    this.deviceTypeSub.unsubscribe();
    this.cartItemsSub.unsubscribe();
  }

  removeItem(data: ICartConfirmModal) {
    console.log(data);
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '100%',
      data,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (!result) {
        result = false;
      }
      console.log('The dialog was closed');
      data.action = result;
      console.log('--data from modal : ', data);
      if (data.action) {
        const payload = {
          cartDetailsId: +data.cartDetailsId,
          cartId: +data.cartId,
        };
        this.requestService
          .postRequest('/cart/remove_item', payload)
          .subscribe((response) => {
            if (response.body.status) {
              this.appStateService.showAlert('Item removed from cart');
              this.shoppingCart.readCart();
            }
          });
      }
    });
  }

  editCartItem(data: ICartConfirmModal) {
    const payload = {
      cartDetailsId: +data.cartDetailsId,
      cartId: +data.cartId,
      qty: +data.quantity,
    };
    this.requestService.postRequest('/cart/edit_cart', payload).subscribe(
      (response) => {
        if (response.body.status) {
          this.shoppingCart.readCart();
        } else {
          this.appStateService.showAlert(response.body.message);
        }
      },
      (error) => {
        this.appStateService.showAlert(error.error.message);
      }
    );
  }
}
