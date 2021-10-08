import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RequestHandlerService {
  error = new Subject<string>();
  getRequest(link: string) {
    return this.http
      .get(environment.baseUrl + link, {
        responseType: 'json',
      })
      .pipe(
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      )
  }

  postRequest(link: string, data: any) {
    return this.http
      .post(environment.baseUrl + link, data, { observe: 'response' })
  }

  

  constructor(private http: HttpClient) {}
}
