import { createAction,props} from '@ngrx/store';

export const getProducts = createAction(
    '[Shop All Page] Login',
    props<{filter: string}>()
);