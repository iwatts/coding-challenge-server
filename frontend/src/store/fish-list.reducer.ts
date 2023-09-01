import { createReducer, on } from '@ngrx/store';
import * as fishListActions from './fish-list.action';
import { AppState } from './fish-list.selector';

export const initialState: AppState = {
	loading: false,
	fishList: [],
	selectedFishId: undefined
};

export const appReducer = createReducer(
	initialState,
	on(fishListActions.getFishList, (state: AppState) => ({ ...state, loading: true })),
	on(fishListActions.fishListLoaded, (state: AppState, { fishList: payload }) => ({ ...state, fishList: payload, loading: false })),
	on(fishListActions.resetFishList, (state: AppState) => ({ ...Object.assign({}, state, initialState), loading: false }))
);