import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeDesktopComponent } from './home-desktop/home-desktop.component';
import { HomeMobileComponent } from './home-mobile/home-mobile.component';
import { BannerModule } from 'src/app/component/banner/banner.module';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeDesktopComponent,
    HomeMobileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BannerModule
  ]
})
export class HomeModule { }
