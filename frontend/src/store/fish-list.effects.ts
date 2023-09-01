import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';

import { DataService } from 'src/services/data.service';
import * as fishListActions from './fish-list.action';

@Injectable()
export class FishListEffects {

	loadFishList$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fishListActions.getFishList),
			exhaustMap(() => {
				console.log('running get request');
				return this.dataService.getAllFish().pipe(
					map((res: any) => ({ type: fishListActions.fishListLoaded.type, fishList: res.fishList })),
					catchError((error: { message: string }) =>
						of(fishListActions.fishListError({ ...error }))
					)
				);
			})
		)
	);


	constructor(
		private actions$: Actions,
		private dataService: DataService
	) { }
}