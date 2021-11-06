import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { stringify } from 'querystring';
import { map } from 'rxjs/operators';
import { IProduct } from 'src/app/models/product.model';
import { RequestHandlerService } from 'src/app/services/request-handler.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  mode: 'mobile' | 'desktop';
  @Input()
  filter: 'trending' | 'categories';
  products: IProduct[];
  url:string;
  constructor(private requestService: RequestHandlerService, private store: Store) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    switch(this.filter){
      case 'categories': this.url = '/public/category?includeImg=true'; break;
      case 'trending': this.url = '';break;
      default: this.url = '/public/fetchProducts?limit=10'; break;
    }
    this.requestService
      .getRequest('/public/fetchProducts?limit=10')
      .pipe(
        map((res: any) => {
          if (res.status) {
            return res;
          }
        })
      )
      .subscribe(
        (response: any) => {
          this.products = response.data;
        }
      );
  }
}
