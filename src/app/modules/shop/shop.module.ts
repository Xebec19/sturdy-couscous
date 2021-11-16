import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopAllComponent } from './shop-all/shop-all.component';
import { ShopFilterComponent } from './shop-filter/shop-filter.component';
import { ShopRoutingModule } from './shop-routing.module';
import { CardComponent } from './cards/cards.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SpinnerModule } from '../../shared/spinner/spinner.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { InfiniteProductsComponent } from './infinite-products/infinite-products.component';
import { ResolverService } from './services/resolver.service';
@NgModule({
  declarations: [
    ShopAllComponent,
    ShopFilterComponent,
    CardComponent,
    InfiniteProductsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MaterialModule,
    SpinnerModule,
    PipesModule,
  ],
  providers: [ResolverService]
})
export class ShopModule { }
