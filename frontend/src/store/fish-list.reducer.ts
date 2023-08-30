import { createReducer, on } from '@ngrx/store';
import * as fishListActions from './fish-list.action';
import { AppState } from './fish-list.selector';

const initialState: AppState = {
	loading: false,
	fishList: [],
	selectedFishId: undefined
};

export const appReducer = createReducer(
	initialState,
	on(fishListActions.getFishList, (state: AppState) => ({ ...state, loading: true })),
	on(fishListActions.fishListLoaded, (state: AppState, { fishList: payload }: AppState) => ({ ...state, fishList: payload, loading: false })),
	on(fishListActions.resetFishList, (state: AppState) => initialState)
);