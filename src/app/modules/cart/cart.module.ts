import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { CheckoutService } from './checkout.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ViewCartComponent,
    ConfirmModalComponent,
    BillingAddressComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [CheckoutService]
})
export class CartModule { }
