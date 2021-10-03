import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { IProductDetails } from 'src/app/models';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  productId: any;
  paramsSubscription!: Subscription;
  product!: IProductDetails;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private requestService: RequestHandlerService
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.productId = params['id'];
    });
    this.getProduct();
  }
  getProduct() {
    this.requestService
      .getRequest('/public/productDetail?productId=' + this.productId)
      .subscribe((response: any) => {
        this.product = {
          product_id: response.data.product_id,
          product_name: response.data.product_name,
          category_id: response.data.category_id,
          product_image: response.data.product_image,
          quantity: response.data.quantity,
          created_on: response.data.created_on,
          updated_on: response.data.updated_on,
          status: response.data.status,
          price: response.data.price,
          delivery_price: response.data.delivery_price,
          product_desc: response.data.delivery_price,
          gender: response.data.gender,
        };
        console.log(this.product);
      });
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
