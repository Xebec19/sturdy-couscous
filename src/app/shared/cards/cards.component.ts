import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { IProduct } from 'src/app/models';
import { RequestHandlerService } from 'src/app/services/request-handler.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input()
  mode: 'mobile' | 'desktop';
  products: IProduct[];
  constructor(private requestService: RequestHandlerService) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    const url = (this.mode === 'mobile') ? '/public/fetchProducts?limit=10' : '/public/fetchProducts?limit=6'
    this.requestService
      .getRequest(url)
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
