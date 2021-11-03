import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { IProduct } from 'src/app/models/product.model';
import { RequestHandlerService } from 'src/app/services/request-handler.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  @Input()
  mode: 'mobile' | 'desktop';
  products: IProduct[];
  constructor(private requestService: RequestHandlerService) { }

  ngOnInit(): void {
  }
  getProducts() {
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
        },
        (error: any) => {
          console.log(error.message);
        }
      );
  }
}
