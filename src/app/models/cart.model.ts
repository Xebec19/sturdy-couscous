export interface ICartDetails {
  cartSummary: ICartSummary;
  cartItems?: ICartItemsEntity[] | null;
}
export interface ICartSummary {
  cart_id: number;
  user_id: number;
  price: number;
  delivery_price: number;
  created_on: string;
  updated_on: string;
  total: number;
}
export interface ICartItemsEntity {
  cd_id: number;
  cart_id: number;
  product_id: number;
  product_price: number;
  quantity: number;
  delivery_price: number;
}
