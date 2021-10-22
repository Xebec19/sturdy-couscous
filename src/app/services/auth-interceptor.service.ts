import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { LocalStorageService } from './local-storage-service.service';
@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      headers: req.headers.append(
        'Authorization',
        'Bearer ' + this.localStorageService.token
      ),
    });
    return next.handle(modifiedRequest);
  }
  constructor(private localStorageService: LocalStorageService) {}
}
