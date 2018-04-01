import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FriendsService } from '../friends.service';
import { TransferVarsService } from '../transfer-vars.service';


@Component({
	selector: 'app-friends-list',
	templateUrl: './friends-list.component.html',
	styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

	title: string = 'Список друзей';

	friends: Friend[];

	constructor (
		private friendsService: FriendsService,
		private transferVarsService: TransferVarsService
	) {
		
	}
	ngOnInit() {
		this.getFriends();
		this.transferVarsService.setTitle(this.title);
	}
	getFriends():void {
		this.friendsService.getFriends().subscribe(result => {
			this.friends = result;
		});
	}

}