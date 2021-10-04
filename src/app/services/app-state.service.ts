import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  priceSymbol$ = new BehaviorSubject('₹');
  userToken$ = new BehaviorSubject('');
  constructor() {}
}
