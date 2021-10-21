import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { IProductDetails } from 'src/app/models';
import { AppStateService } from 'src/app/services/app-state.service';
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
  selectedQuantity = 1;
  productId: any;
  paramsSubscription!: Subscription;
  product!: IProductDetails;
  priceSymbol: any;
  priceSymbolSubsciption: Subscription;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private requestService: RequestHandlerService,
    private appStateService: AppStateService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.productId = params['id'];
    });
    this.priceSymbolSubsciption = this.appStateService.priceSymbol$.subscribe(
      (val) => {
        this.priceSymbol = val;
      }
    );
    this.getProduct();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
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
          product_desc: response.data.product_desc,
          gender: response.data.gender,
        };
      });
  }

  addToCart() {
    console.log('--cart details : ', {
      quantity: this.selectedQuantity,
      productId: this.product.product_id,
    });
    const data = {
      productId: this.product.product_id,
      qty: this.selectedQuantity,
    };
    this.requestService.postRequest('/cart/add_item', data).subscribe(
      (response) => {
        if (response.body.status) {
          this._snackBar.open('Product added to cart', 'Close', {
            duration: 500,
          });
          this.selectedQuantity = 0;
          this.product.quantity = response.body.data;
        } else {
          this._snackBar.open(
            'Error, product could not be added to cart',
            'Close',
            {
              duration: 500,
            }
          );
        }
      },
      (error) => {
        this._snackBar.open(
          'Error, product could not be added to cart',
          'Close',
          {
            duration: 500,
          }
        );
      }
    );
  }

  openSnackBar() {
    this._snackBar.open('sorry, no more quantity available', 'Close', {
      duration: 5000,
    });
  }
  updateQuantity(action: string) {
    if (action === 'inc') {
      this.selectedQuantity < this.product.quantity
        ? this.selectedQuantity++
        : this.openSnackBar();
    }
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.priceSymbolSubsciption.unsubscribe();
  }
}
