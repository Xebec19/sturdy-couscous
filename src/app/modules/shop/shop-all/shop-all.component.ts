import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models';

@Component({
  selector: 'app-shop-all',
  templateUrl: './shop-all.component.html',
  styleUrls: ['./shop-all.component.scss']
})
export class ShopAllComponent implements OnInit {
  trendingProducts$: Observable<IProduct> = this.store.select(state => state.trendingProducts)
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
