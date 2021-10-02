import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input()
  name!: string;
  @Input()
  price!: number;
  @Input()
  category!: string;
  @Input()
  categoryImage!: string;
  @Input()
  productImage!: string;
  @Input()
  description!: string;
  @Input()
  mode!: 'mobile'|'desktop';
  constructor() {}

  ngOnInit(): void {}
}
