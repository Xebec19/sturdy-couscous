
export interface ICartConfirmModal{
    cartDetailsId: number | string,
    cartId: number | string,
    productName: string,
    productImage: string,
    price: number,
    quantity: number,
    action?: boolean,
    operation: 'edit'|'delete'
  }
  