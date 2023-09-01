import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as fishListActions from 'src/store/fish-list.action';
import { allFishList } from 'src/store/fish-list.selector';

@Component({
	selector: 'app-all-fish',
	templateUrl: './all-fish.component.html',
	styleUrls: ['./all-fish.component.css']
})
export class AllFishComponent implements OnInit {
	public fishData: any[] = [];
	fishList$: Observable<any[]> = of([]);

	constructor(private store: Store<any>) { }

	ngOnInit() {
		this.store.dispatch(fishListActions.getFishList());
		this.fishList$ = this.store.pipe(select(allFishList))
	}
}
