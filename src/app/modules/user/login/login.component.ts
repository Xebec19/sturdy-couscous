import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { RequestHandlerService } from 'src/app/services/request-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  constructor(
    private requestService: RequestHandlerService,
    private appStateService: AppStateService,
    private router: Router,
    private _errorAlert: MatSnackBar,
    private localStorageService: LocalStorageService
  ) {}
  ngOnInit(): void {
    if(!!this.localStorageService.token){
      this.router.navigate(['/home']);
    }
  }
  onSubmit() {
    // console.log('--form ',this.signInForm.value);
    this.requestService
      .postRequest('/public/login', this.signInForm.value)
      .subscribe(
        (response: any) => {
          console.log('response : ', response);
          if (response.body.status) {
            const token = response.body.data.trim().split(' ')[1];
            this.localStorageService.token = token;
            this.appStateService.userToken$.next(token);
            this.router.navigate(['/home']);
          }
        },
        (error) => {
          this._errorAlert.open(error.error.message, 'cancel', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
          });
          this.appStateService.isLoading$.next(false);
        }
      );
  }
}
