import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ViewCartComponent } from "./view-cart/view-cart.component";
const routes: Routes = [
    {
        path: 'view-cart',
        component: ViewCartComponent
    },
    { path: '', redirectTo: 'view-cart', pathMatch: 'full'}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartRoutingModule {}