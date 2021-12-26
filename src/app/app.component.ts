import { Platform } from '@angular/cdk/platform';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { AppStateService } from './services/app-state.service';
import { isPlatformBrowser } from '@angular/common';

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
    @Inject(PLATFORM_ID) private platformId
  ) {}
  ngOnInit(): void {}
  onActivate(event){
    if(isPlatformBrowser(this.platformId))
    window.scroll({top:0,behavior:'smooth'});
  }
}
