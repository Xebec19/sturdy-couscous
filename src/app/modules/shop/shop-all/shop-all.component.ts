import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';
@Component({
  selector: 'app-shop-all',
  templateUrl: './shop-all.component.html',
  styleUrls: ['./shop-all.component.scss']
})
export class ShopAllComponent implements OnInit {
  constructor(public appStateService: AppStateService) { }

  ngOnInit(): void {
  }

}
