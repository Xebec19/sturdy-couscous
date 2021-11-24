import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchComponent } from "./search/search.component";

const routes:Routes = [
    {
        path: '',
        redirectTo: 'suggestions',
        pathMatch: 'full'
    },
    {
        path: 'suggestions',
        component: SearchComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class SearchRoutingModule{}