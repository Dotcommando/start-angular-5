import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { StarsComponent } from './stars/stars.component';
import { SearchComponent } from './search/search.component';

import { SearchPipe } from 'pipes';

import { SearchDirective } from 'directives';

import {
	FriendsService,
	TransferVarsService,
	LocalstorageService,
	StarsService
} from 'services';


@NgModule({
	declarations: [
		AppComponent,
		FriendDetailComponent,
		FriendsListComponent,
		FavoritesComponent,
		StarsComponent,
    SearchComponent,
    SearchPipe,
    SearchDirective
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [
		FriendsService,
		TransferVarsService,
		StarsService,
    SearchPipe,
		{
			provide: LocalstorageService,
			useFactory: getLocalstorage
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

export function getLocalstorage() {
	return new LocalstorageService( {

	} );
}
