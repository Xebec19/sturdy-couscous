import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit,OnChanges {
  @Input() categories : {categoryId:number|string,categoryName:string}[]
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    for(const change in changes){
      console.log(change);
    }
  }

  ngOnInit(): void {
  }

}
