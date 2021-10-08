import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppStateService } from 'src/app/services/app-state.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {
  isHandSetSub : Subscription;
  isHandSet:boolean;
  signInForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required]]
  });
  constructor(private appStateService: AppStateService, private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('Fired');
    this.isHandSetSub = this.appStateService.isHandset$.subscribe(res => {
      this.isHandSet = res;
    });
  }

  ngOnDestroy(): void {
    this.isHandSetSub.unsubscribe();
  }

}
