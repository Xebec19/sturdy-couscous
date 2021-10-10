import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTokenService } from './services/check-token.service';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  // {
  //   path: 'product/:id',
  //   loadChildren: () =>
  //     import('./pages/product-detail/product-detail.module').then((m) => m.ProductDetailModule),
  //     canActivate: [CheckTokenService],
  // },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./modules/product-detail/product-detail.module').then((m) => m.ProductDetailModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
