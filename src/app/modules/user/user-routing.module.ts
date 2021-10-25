import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AllowLoginService } from "./allow-login.service";
const routes: Routes = [
    {
        path: 'login',
        canActivate:[AllowLoginService],
        component: LoginComponent
    },
    {
        path: 'register',
        canActivate:[AllowLoginService],
        component: RegisterComponent
    },
    { path: '', redirectTo: 'login', pathMatch: 'full'},
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}