import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import * as fishListActions from 'src/store/fish-list.action';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private meta: Meta, private store: Store<any>) {
		this.meta.addTags([
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		]);
	}
	ngOnInit() {
		this.store.dispatch(fishListActions.getFishList())
	}

}
