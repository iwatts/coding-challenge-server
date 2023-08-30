import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { DataService } from 'src/services/data.service';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';

import { AppComponent } from './app.component';
import { FishPreviewComponent } from './fish-preview/fish-preview.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FishDetailsComponent } from './fish-details/fish-details.component';
import { AllFishComponent } from './all-fish/all-fish.component';
import { EffectsModule } from '@ngrx/effects';


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
		StoreModule.forRoot(),
		EffectsModule.forRoot(),
		StoreDevtoolsModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [
		DataService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
