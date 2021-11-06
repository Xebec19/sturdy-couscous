import { Injectable } from '@angular/core';
import { RequestHandlerService } from './request-handler.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { ICartDetails, IResponseData } from '../models';
import { AppStateService } from './app-state.service';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private requestService: RequestHandlerService,private appStateService: AppStateService) { }
  shoppingCart = new Subject<ICartDetails>();
  readCart(){
    // console.trace();
    this.requestService.getRequest('/cart/read_cart').subscribe((response:any) => {
      if(response.status){
        this.shoppingCart.next(response.data);
      }
    },(error) => {
      this.appStateService.isLoading$.next(false);
      this.appStateService.showAlert(error.error.message);
    })
  }
}
