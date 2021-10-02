import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input()
  productImage!: string;
  @Input()
  productPrice!: string;
  @Input()
  categoryImage!: string;
  @Input()
  name!: string;
  @Input()
  price!: number;
  @Input()
  category!: string;
  @Input()
  description!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
