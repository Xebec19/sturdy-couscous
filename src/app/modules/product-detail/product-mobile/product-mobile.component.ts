import { Component, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail.component';
@Component({
  selector: 'app-product-mobile',
  templateUrl: './product-mobile.component.html',
  styleUrls: ['./product-mobile.component.scss']
})
export class ProductMobileComponent extends ProductDetailComponent implements OnInit {

  ngOnInit(): void {
    super.ngOnInit();
  }

}
