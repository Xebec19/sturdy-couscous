import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit,OnChanges {
  categoriesList:any;
  @Input() categories:any;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    for(const change in changes){
    console.log('--change ',change);
    console.log('--package ',change);
    }
    const chng = changes['categories'];
    const cur  = JSON.stringify(chng.currentValue);
    const prev = JSON.stringify(chng.previousValue);
    this.categoriesList = cur;
  }

  ngOnInit(): void {
  console.log('--categories ',this.categories)
  }

}
