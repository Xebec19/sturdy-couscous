import { Injectable } from '@angular/core';
import { Actions,createEffect,ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
import * as ShopActions from './shop.actions';
@Injectable()
export class ProductsEffects {
    fetchProducts$ = createEffect(() => this.actions$.pipe(ofType(ShopActions.getProducts),mergeMap(() => this.requestService.getRequest('/public/fetchProducts?limit=10'))))
    constructor(
        private actions$:Actions,
        private requestService:RequestHandlerService
    ){}
}