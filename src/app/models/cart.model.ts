export interface ICartDetails {
    cartSummary: CartSummary;
    cartItems?: (CartItemsEntity)[] | null;
  }
  export interface CartSummary {
    cart_id: number;
    user_id: number;
    price: string;
    delivery_price: string;
    created_on: string;
    updated_on: string;
    total: string;
  }
  export interface CartItemsEntity {
    cd_id: number;
    cart_id: number;
    product_id: number;
    product_price: string;
    quantity: number;
    delivery_price: string;
  }
  