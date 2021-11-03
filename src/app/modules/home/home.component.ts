import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { AppStateService } from 'src/app/services/app-state.service';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: any;
  categories: any;
  constructor(
    public appStateService: AppStateService,
    private breakpointObserver: BreakpointObserver,
    private requestService: RequestHandlerService,
    private _bottomSheet: MatBottomSheet
  ) {}
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
    openBottomSheet(): void {
      this._bottomSheet.open(TermsAndConditionsComponent);
    }
  ngOnInit(): void {}
}
