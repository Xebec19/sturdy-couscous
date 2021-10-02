import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';
@Component({
  selector: 'app-home-mobile',
  templateUrl: './home-mobile.component.html',
  styleUrls: ['./home-mobile.component.scss'],
})
export class HomeMobileComponent extends HomeComponent implements OnInit {
  ngOnInit(): void {  
    console.log(this.products)
  }
}
