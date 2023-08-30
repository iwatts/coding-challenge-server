import { createSelector } from "@ngrx/store";

export interface AppState {
	loading: boolean;
	fishList: any[];
	selectedFishId: number | undefined;
}

export const selectAppState = (state: AppState) => state;
export const selectFishList = createSelector(
  selectAppState,
  (state: AppState) => state.fishList
);