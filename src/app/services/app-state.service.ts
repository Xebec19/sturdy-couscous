import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  priceSymbol$ = new BehaviorSubject('₹');
  userToken$ = new BehaviorSubject('');
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  isLoading$ = new BehaviorSubject(false);
  isXl$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XLarge)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  showAlert = async(message: string) => { 
    await this._errorAlert.open(message,"cancel",{
      horizontalPosition: "end",
      verticalPosition: "top"
    })
  }
  constructor(private breakpointObserver: BreakpointObserver, private _errorAlert: MatSnackBar) {}
}
