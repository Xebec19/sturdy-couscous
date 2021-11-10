export interface IProductsApiResponse {
    message: string;
    status: boolean;
    data?: (DataEntity)[] | null;
  }
  export interface DataEntity {
    product_id: number;
    category_id: number;
    product_name: string;
    product_image: string;
    quantity: number;
    price: string;
    delivery_price: string;
    product_desc: string;
    gender: string;
  }
  