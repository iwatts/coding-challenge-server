import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { DataService } from 'src/services/data.service';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';

import { AppComponent } from './app.component';
import { FishPreviewComponent } from './fish-preview/fish-preview.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FishDetailsComponent } from './fish-details/fish-details.component';
import { AllFishComponent } from './all-fish/all-fish.component';
import { appReducer } from 'src/store/fish-list.reducer';
import { FishListEffects } from 'src/store/fish-list.effects';

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
 
    return reducer(state, action);
  };
}
 
export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
	declarations: [
		AppComponent,
		FishPreviewComponent,
		SanitizeHtmlPipe,
		NavigationBarComponent,
		FishDetailsComponent,
		AllFishComponent
	],
	imports: [
		BrowserModule,
		StoreModule.forRoot(appReducer, {metaReducers}),
		EffectsModule.forRoot(FishListEffects),
		StoreDevtoolsModule.instrument({maxAge: 25, logOnly: true}),
		HttpClientModule,
		AppRoutingModule
	],
	providers: [
		DataService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
