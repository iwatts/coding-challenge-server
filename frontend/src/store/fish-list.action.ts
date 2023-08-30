import { createAction, props } from '@ngrx/store';

export const getFishList = createAction('[Fish List] Get Fish List');
export const resetFishList = createAction('[Fish List] Reset Fish List');

export const fishListLoaded = createAction(
	'[Fish List] Fish List Loaded',
	props<{ fishList: any[] }>()
);

export const fishListError = createAction(
	'[Fish List] Fish List Error',
	props<{ message: string }>()
);