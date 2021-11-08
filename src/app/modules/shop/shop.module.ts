import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopAllComponent } from './shop-all/shop-all.component';
import { ShopFilterComponent } from './shop-filter/shop-filter.component';
import { ShopRoutingModule } from './shop-routing.module';
import { CardComponent } from './cards/cards.component';
import { CategoryComponent } from './category/category.component';
import { PriceComponent } from './price/price.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SpinnerModule } from '../../shared/spinner/spinner.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InfiniteProductsComponent } from './infinite-products/infinite-products.component';
@NgModule({
  declarations: [
    ShopAllComponent,
    ShopFilterComponent,
    CardComponent,
    CategoryComponent,
    PriceComponent,
    InfiniteProductsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MaterialModule,
    SpinnerModule,
    PipesModule,
    InfiniteScrollModule,
  ]
})
export class ShopModule { }
