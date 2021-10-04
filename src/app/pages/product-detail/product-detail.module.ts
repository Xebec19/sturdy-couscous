import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMobileComponent } from './product-mobile/product-mobile.component';
import { ProductDesktopComponent } from './product-desktop/product-desktop.component';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { SpinnerModule } from 'src/app/component/spinner/spinner.module';
import { MaterialModule } from 'src/app/utils/material/material.module';
import { CardsModule } from 'src/app/component/cards/cards.module';
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
