import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, filter, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { DataService } from 'src/services/data.service';
import * as fishListActions from './fish-list.action';
import { of } from 'rxjs';
import { selectFishList } from './fish-list.selector';

@Injectable()
export class FishListEffects {

	loadFishList$ =
		this.actions$.pipe(
			ofType(fishListActions.getFishList),
			concatLatestFrom(() => this.store.select(selectFishList)),
			filter(([, fishList]) => !fishList),
			exhaustMap(() => {
				return this.dataService.getAllFish().pipe(
					map((list: any[]) => fishListActions.fishListLoaded({ fishList: list })),
					catchError((error: { message: string }) =>
						of(fishListActions.fishListError({ ...error }))
					)
				);
			})
		);


	constructor(
		private actions$: Actions,
		private store: Store<any>,
		private dataService: DataService
	) { }
}