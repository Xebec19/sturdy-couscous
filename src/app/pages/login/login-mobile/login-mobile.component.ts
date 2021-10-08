import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login.component';

@Component({
  selector: 'app-login-mobile',
  templateUrl: './login-mobile.component.html',
  styleUrls: ['./login-mobile.component.scss']
})
export class LoginMobileComponent extends LoginComponent implements OnInit {

  ngOnInit(): void {
  super.ngOnInit();
  }

  ngOnDestroy(){
    super.ngOnDestroy();
  }

}
