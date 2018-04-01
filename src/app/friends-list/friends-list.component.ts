import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FriendsService } from '../friends.service';


@Component({
	selector: 'app-friends-list',
	templateUrl: './friends-list.component.html',
	styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
	title = 'app';
	friends: Friend[];
	selectedFriend: Friend;
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
	selectFriend(friend: Friend):void {
		this.selectedFriend = friend;
	}
}