import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SearchRoutingModule } from './search-routing.module';
import { NgAisModule } from 'angular-instantsearch';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule,NgAisModule.forRoot()],
})
export class SearchModule {}
