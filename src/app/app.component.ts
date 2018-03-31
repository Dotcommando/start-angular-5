import { Component, OnInit } from '@angular/core';
import { Friend } from './friend';
import { FriendsService } from './friends.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	friends: Friend[];
	constructor (private friendsService: FriendsService) {
		
	}
	ngOnInit() {
		this.getFriends();
	}
	getFriends():void {
		this.friendsService.getFriends().subscribe(result => {
			this.friends = result;
		});
	}
}
