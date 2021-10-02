import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestHandlerService {
error = new Subject<string>();
  getRequest(link:string,token = ''){
    this.http.get(environment.baseUrl + link,{headers: new HttpHeaders({'Authorization':'Bearer ' + token})})
    .subscribe(responseData => {

    }),error => {
      
    }
  }
  constructor(private http: HttpClient) { }
}
