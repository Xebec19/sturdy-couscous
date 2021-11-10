import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { IProductsApiResponse } from '../models/index.model';
import { RequestHandlerService } from 'src/app/services/request-handler.service';

@Injectable()
export class ResolverService implements Resolve<any> {

  constructor(private requestService: RequestHandlerService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<IProductsApiResponse> | IProductsApiResponse {
    return this.requestService.getRequest(`/public/fetchProducts?limit=99&filter=category&categoryId=${route.queryParams['categoryId']}`)
  }
}
