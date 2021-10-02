import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  products = [
    {
      name: "Item 1",
      price: 32,
      category: "Shirts",
      categoryImage: "https://firebasestorage.googleapis.com/v0/b/bazaa-9913b.appspot.com/o/t-shirt.svg?alt=media&token=ef69ae58-8cbd-41a1-a726-cc288f776303",
      productImage: "https://firebasestorage.googleapis.com/v0/b/bazaa-9913b.appspot.com/o/photo-1521572163474-6864f9cf17ab.jpeg?alt=media&token=e8333559-57e0-400b-8c54-0e66459cb676",
      description: "A cool tshirt for summers"
    }
  ]
  constructor() { }
}
