import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FriendsService } from './friends.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { AppRoutingModule } from './app-routing.module';
import { TransferVarsService } from './transfer-vars.service';
import { FavoritesComponent } from './favorites/favorites.component';
import { StarsComponent } from './stars/stars.component';


@NgModule({
  declarations: [
    AppComponent,
	FriendDetailComponent,
	FriendsListComponent,
	FavoritesComponent,
	StarsComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	FormsModule,
	AppRoutingModule
  ],
  providers: [FriendsService, TransferVarsService, { provide: 'LOCALSTORAGE', useFactory: getLocalStorage }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getLocalStorage() {
	return (typeof window !== "undefined") ? window.localStorage : null;
}