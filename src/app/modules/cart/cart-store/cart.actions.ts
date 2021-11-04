import { Action } from '@ngrx/store';
import { ICartDetails } from 'src/app/models';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export class AddIngredient implements Action{
    readonly type = ADD_INGREDIENT;
    payload: ICartDetails
}