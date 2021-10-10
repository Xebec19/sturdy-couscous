import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMobileComponent } from './product-mobile/product-mobile.component';
import { ProductDesktopComponent } from './product-desktop/product-desktop.component';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CardsModule } from 'src/app/shared/cards/cards.module';
const routes: Routes = [
  {
    path: '',
    component: ProductDetailComponent,
  },
];

@NgModule({
  declarations: [
    ProductMobileComponent,
    ProductDesktopComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SpinnerModule,
    MaterialModule,
    CardsModule
  ]
})
export class ProductDetailModule { }
