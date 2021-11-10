import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ResolverService } from "./services/resolver.service";
import { ShopAllComponent } from "./shop-all/shop-all.component";
import { ShopFilterComponent } from "./shop-filter/shop-filter.component";
const routes: Routes = [
    {
        path: 'all',
        component: ShopAllComponent
    },
    {
        path: 'filter',
        component: ShopFilterComponent,
        resolve:{productResolve:ResolverService}
    },
    { path: '', redirectTo: 'all', pathMatch: 'full'},
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule {}