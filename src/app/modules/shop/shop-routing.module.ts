import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ShopAllComponent } from "./shop-all/shop-all.component";
import { ShopFilterComponent } from "./shop-filter/shop-filter.component";
const routes: Routes = [
    {
        path: 'all',
        component: ShopAllComponent
    },
    {
        path: 'filter',
        component: ShopFilterComponent
    },
    { path: '', redirectTo: 'all', pathMatch: 'full'},
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule {}