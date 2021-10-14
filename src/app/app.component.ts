import { Component, OnInit } from '@angular/core';
import { AppStateService } from './services/app-state.service';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Bazaar';
  token = '';
  constructor(
    private appStateService: AppStateService,
    private shoppingCart: ShoppingCartService
  ) {}
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.appStateService.userToken$.next(this.token);
    console.log('Fired');
  }
  onActivate(event){
    window.scroll({top:0,behavior:'smooth'});
  }
}
