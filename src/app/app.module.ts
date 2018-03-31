import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FriendsService } from './friends.service';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	HttpModule
  ],
  providers: [FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
