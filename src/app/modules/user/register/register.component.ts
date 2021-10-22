import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
import { RequestHandlerService } from 'src/app/services/request-handler.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm = new FormGroup({
    firstName: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
    lastName: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
    email: new FormControl("",[Validators.required,Validators.email]),
    phone: new FormControl("",[Validators.minLength(10),Validators.pattern("^(0|[1-9][0-9]*)$")]),
    password: new FormControl("",[Validators.required,Validators.minLength(8)])
  })
  constructor(private requestService: RequestHandlerService, private appStateService: AppStateService, private router: Router, private _errorAlert:MatSnackBar, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {}
  onSubmit(){
    this.signUpForm.controls.email.patchValue(this.signUpForm.controls.email.value.trim());
    this.signUpForm.controls.phone.patchValue(+this.signUpForm.controls.phone.value);
    console.log("Sign up form value : ",this.signUpForm.value);
    this.requestService.postRequest('/public/register',this.signUpForm.value).subscribe((response:any) => {
      if(response.body.status){
        const token = response.body.data.trim().split(" ")[1];
        // localStorage.setItem('token',token);
        this.localStorageService.token = token;
        this.appStateService.userToken$.next(token);
        this.router.navigate(['/home']);
      }
    },error => {
      this._errorAlert.open(error.error.message,"cancel",{
        horizontalPosition: "end",
        verticalPosition: "top"
      });
      this.appStateService.isLoading$.next(false);
    })
  }
}
