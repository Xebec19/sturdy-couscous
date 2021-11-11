import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from '../models/product.model';

@Component({
  selector: 'app-shop-filter',
  templateUrl: './shop-filter.component.html',
  styleUrls: ['./shop-filter.component.scss'],
})
export class ShopFilterComponent implements OnInit {
  products: IProducts[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: IProducts[]) => {
      this.products = data['productResolve'].data;
    });
  }
}
