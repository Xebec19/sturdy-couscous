import { Component, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail.component';

@Component({
  selector: 'app-product-desktop',
  templateUrl: './product-desktop.component.html',
  styleUrls: ['./product-desktop.component.scss']
})
export class ProductDesktopComponent extends ProductDetailComponent implements OnInit {
  ngOnInit(): void {
    super.ngOnInit();
  }

}
