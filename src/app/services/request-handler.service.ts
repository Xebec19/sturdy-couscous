import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RequestHandlerService {
  error = new Subject<string>();
  getRequest(link: string) {
    this.http
      .get(environment.baseUrl + link, {
        responseType: 'json',
      })
      .pipe(
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      )
      .subscribe(
        (responseData: any) => {
          return responseData;
        },
        (error: { message: string | undefined; }) => {
          this.error.next(error.message);
          return false;
        }
      );
  }

  postRequest(link: string, data: any) {
    this.http
      .post(environment.baseUrl + link, data, { observe: 'response' })
      .subscribe(
        (responseData: any) => {
          console.log(responseData);
          return responseData;
        },
        (error: { message: string | undefined; }) => {
          this.error.next(error.message);
        }
      );
  }

  

  constructor(private http: HttpClient) {}
}
