import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch';
import { Subscription } from 'rxjs';
import { IRefinement } from 'src/app/models';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchClient = algoliasearch(
    `${environment.ALGOLIA_APP_NAME}`,
    `${environment.ALGOLIA_API_KEY}`
  );
  searchQuery:string = '';
  refinements: IRefinement[] = [];
  searchParameters: { query: string } = {
    query: '',
  };
  config = {
    indexName: environment.ALGOLIA_INDEX,
    searchClient: this.searchClient,
    routing: true,
  };
  transformItems = (items: IRefinement[], index: number = 0): any => {
    items.sort(function (a, b) {
      return a.value > b.value ? 1 : -1;
    });
    return items.map((item) => {
      return {
        ...item,
        count: `${item.count} items`,
        highlighted: `&nbsp;&nbsp;${item.label.toLowerCase()}&nbsp;&nbsp;`,
      };
    });
  };
  subs: Subscription;
  constructor() {}

  ngOnInit(): void {}
}
