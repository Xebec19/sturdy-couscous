import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginMobileComponent } from './login-mobile/login-mobile.component';
import { LoginDesktopComponent } from './login-desktop/login-desktop.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    LoginMobileComponent,
    LoginDesktopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  bootstrap:[LoginComponent]
})
export class LoginModule { }
