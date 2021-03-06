import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/services/app-state.service';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { LocalStorageService } from 'src/app/services/local-storage-service.service';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  @ViewChild('mobileToolBar', { static: false }) mobileBanner: ElementRef;
  cartItems = [];
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

  logout = async () => {
    this.requestService.getRequest('/public/logout').subscribe(
      (response: any) => {
        // localStorage.clear();
        
        this.localStorageService.clear();
        this.appStateService.userToken$.next('');
        this.router.navigate(['home']);
      },
      (error) => {
        this.appStateService.showAlert(error.error.message);
      }
    );
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    public appStateService: AppStateService,
    private requestService: RequestHandlerService,
    public shoppingCartService: ShoppingCartService,
    private localStorageService: LocalStorageService
  ) {}
}
