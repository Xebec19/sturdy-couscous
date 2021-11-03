import { Component, Input, OnInit } from '@angular/core';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  constructor(private requestService: RequestHandlerService) { }
  categories: any;
  @Input() mode: 'mobile'|'desktop';
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.requestService
      .getRequest('/public/category?includeImg=true')
      .subscribe(
        (response: any) => {
          this.categories = response.data;
        },
        (error: any) => {
          console.log(error.message);
        }
      );
  }
}
