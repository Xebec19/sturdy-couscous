import { Injectable } from '@angular/core';
import { AppStateService } from './app-state.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class LoggingInterceptorService implements HttpInterceptor {
  constructor(
    private appStateService: AppStateService,
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // use below lines for debugging
    //console.log('Outgoing request');
    //console.log(req.url);
    //console.log(req.headers);
    this.appStateService.isLoading$.next(true);
    return next.handle(req).pipe(
      tap((event) => {
        this.appStateService.isLoading$.next(false);
        if (event.type === HttpEventType.Response) {
          //console.log('Incoming response');
          //console.log(event.body); // use it only for debugging
        }
      })
    );
  }
}
