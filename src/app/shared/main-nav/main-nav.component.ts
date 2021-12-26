import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  @ViewChild('mobileToolBar', { static: false }) mobileBanner: ElementRef;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  isXL$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XLarge)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  ngOnInit(): void {}

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    public appStateService: AppStateService,
    private requestService: RequestHandlerService
  ) {}
}
