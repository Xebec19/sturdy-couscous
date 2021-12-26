export interface IProduct {
    product_id: number;
    category_id: number;
    product_name: string;
    product_image: string;
    quantity: number;
    price: string;
    delivery_price: string;
    product_desc: string;
    gender: string;
    category_name: string;
  }
  export interface IProductDetails {
    product_id: number;
    category_id: number;
    product_name: string;
    product_image: string;
    quantity: number;
    created_on: string;
    updated_on: string;
    status: string;
    price?: string;
    delivery_price?: string;
    product_desc: string;
    gender: string;
  }
  