import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SearchRoutingModule } from './search-routing.module';
import { NgAisModule } from 'angular-instantsearch';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SearchRoutingModule,
    NgAisModule.forRoot(),
    FormsModule
  ],
})
export class SearchModule {}
