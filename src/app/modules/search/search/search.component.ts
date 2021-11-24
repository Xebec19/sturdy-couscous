import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch';
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
  config = {
    indexName: environment.ALGOLIA_INDEX,
    searchClient: this.searchClient,
  };
  constructor() {}

  ngOnInit(): void {}
}
