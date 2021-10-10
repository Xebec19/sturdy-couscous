import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppStateService } from 'src/app/services/app-state.service';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  isHandSetSub: Subscription;
  isHandSet: boolean;
  loading = false;
  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
  isNewUser = false;
  constructor(
    public appStateService: AppStateService,
    private fb: FormBuilder,
    private requestService: RequestHandlerService
  ) {}

  ngOnInit(): void {
    this.isHandSetSub = this.appStateService.isHandset$.subscribe((res) => {
      this.isHandSet = res;
    });
  }

  onSubmit() {
    this.requestService
      .postRequest('/public/register', this.signInForm.value)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  ngOnDestroy(): void {
    this.isHandSetSub.unsubscribe();
  }
}
