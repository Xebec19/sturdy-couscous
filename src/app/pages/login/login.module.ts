import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginMobileComponent } from './login-mobile/login-mobile.component';
import { LoginDesktopComponent } from './login-desktop/login-desktop.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginMobileComponent,
    LoginDesktopComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
