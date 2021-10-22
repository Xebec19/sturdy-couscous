import { Platform } from '@angular/cdk/platform';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppStateService } from './services/app-state.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { isPlatformBrowser } from '@angular/common';
import { LocalStorageService } from './services/local-storage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Bazaar';
  token = '';
  constructor(
    public appStateService: AppStateService,
    private shoppingCart: ShoppingCartService,
    private localStorageService: LocalStorageService,
    @Inject(PLATFORM_ID) private platformId
  ) {}
  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      this.token = this.localStorageService.token;
      this.appStateService.userToken$.next(this.token);
    }
  }
  onActivate(event){
    if(isPlatformBrowser(this.platformId))
    window.scroll({top:0,behavior:'smooth'});
  }
}
