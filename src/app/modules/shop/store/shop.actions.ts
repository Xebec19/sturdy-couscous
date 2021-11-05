import { createAction,props} from '@ngrx/store';

export const getProducts = createAction(
    '[Shop All Page] Trending',
    props<{filter: string}>()
);