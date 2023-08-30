import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fishListActions from 'src/store/fish-list.action';

@Component({
	selector: 'app-all-fish',
	templateUrl: './all-fish.component.html',
	styleUrls: ['./all-fish.component.css']
})
export class AllFishComponent implements OnInit {
	public fishData: any[] = [];
	fishList$: Observable<any[]> = this.store.select(state => state.fishList);

	constructor(private store: Store<any>) { }

	ngOnInit() {
		this.store.dispatch(fishListActions.getFishList())
	}
}
