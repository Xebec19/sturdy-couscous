import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptComponent } from './receipt-component/receipt.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ReceiptComponent,
  },
];
@NgModule({
  declarations: [ReceiptComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderReceiptModule { }
