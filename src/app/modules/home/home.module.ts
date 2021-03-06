import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeDesktopComponent } from './home-desktop/home-desktop.component';
import { HomeMobileComponent } from './home-mobile/home-mobile.component';
import { BannerModule } from 'src/app/shared/banner/banner.module';
import { CardsModule } from 'src/app/shared/cards/cards.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CategoriesComponent } from './categories/categories.component';
import { SpinnerModule } from '../../shared/spinner/spinner.module';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
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
    CategoriesComponent,
    TermsAndConditionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BannerModule,
    CardsModule,
    MaterialModule,
    SpinnerModule
  ],
})
export class HomeModule {}
