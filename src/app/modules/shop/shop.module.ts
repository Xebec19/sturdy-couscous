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
@NgModule({
  declarations: [
    ShopAllComponent,
    ShopFilterComponent,
    CardComponent,
    CategoryComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MaterialModule,
    SpinnerModule,
    PipesModule
  ]
})
export class ShopModule { }
