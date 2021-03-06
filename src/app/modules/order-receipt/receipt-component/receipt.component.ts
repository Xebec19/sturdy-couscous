import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-receipt',
  templateUrl: './receipt-component.html',
  styleUrls: ['./receipt-component.css'],
})
export class ReceiptComponent implements OnInit {
  orderId: string;
  orderIdSubs: Subscription;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.orderIdSubs = this.route.params.subscribe((params: Params) => {
      this.orderId = params['order-id'];
      console.log(this.orderId);
    });
  }
  ngOnDestroy(): void {
    this.orderIdSubs.unsubscribe();
  }
}
