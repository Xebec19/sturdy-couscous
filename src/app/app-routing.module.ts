import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTokenService } from './services/check-token.service';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./modules/product-detail/product-detail.module').then(
        (m) => m.ProductDetailModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'cart',
    canActivate: [CheckTokenService],
    loadChildren: () =>
      import('./modules/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'receipt',
    canActivate: [CheckTokenService],
    loadChildren: () =>
      import('./modules/order-receipt/order-receipt.module').then(
        (m) => m.OrderReceiptModule
      ),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./modules/shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./modules/search/search.module').then((m) => m.SearchModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
