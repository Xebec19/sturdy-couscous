import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    ViewCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule
  ]
})
export class CartModule { }
