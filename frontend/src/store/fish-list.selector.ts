import { createSelector } from "@ngrx/store";

export interface AppState {
	loading: boolean;
	fishList: any[];
	selectedFishId: number | undefined;
}

export const primaryAppState = (state: AppState) => state;
export const allFishList = createSelector(
  primaryAppState,
  (state: AppState) => state.fishList
);