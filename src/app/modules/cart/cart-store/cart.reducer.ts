import { ICartDetails } from 'src/app/models';
import {Action} from '@ngrx/store';
import { ADD_INGREDIENT } from './cart.actions';
const initialState = <ICartDetails>{
    cartSummary:{
      cart_id: 0,
      user_id: 0,
      price: 0,
      delivery_price: 0,
      created_on: '',
      updated_on: '',
      total: 0,
    },
};
export const cartReducer = (state = initialState, action:Action) => {
    switch(action.type){
        case ADD_INGREDIENT:
            return {
                ...state,
                cartItems: [...state.cartItems,]
            }
    }
};
