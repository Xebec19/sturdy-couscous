import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login.component';

@Component({
  selector: 'app-login-desktop',
  templateUrl: './login-desktop.component.html',
  styleUrls: ['./login-desktop.component.scss']
})
export class LoginDesktopComponent extends LoginComponent implements OnInit {

  ngOnInit(): void {
  super.ngOnInit();
  }

  ngOnDestroy(){
    super.ngOnDestroy();
  }

}
