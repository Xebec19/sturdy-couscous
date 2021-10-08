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
  constructor(private appStateService: AppStateService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Outgoing request');
    console.log(req.url);
    console.log(req.headers);
    this.appStateService.isLoading$.next(true);
    return next.handle(req).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          this.appStateService.isLoading$.next(false);
          console.log('Incoming response');
          console.log(event.body);
        }
      })
    );
  }
}
