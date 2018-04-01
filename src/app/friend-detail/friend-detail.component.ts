import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Friend } from '../friend';
import { FriendsService } from '../friends.service';
import { TransferVarsService } from '../transfer-vars.service';

@Component({
	selector: 'app-friend-detail',
	templateUrl: './friend-detail.component.html',
	styleUrls: ['./friend-detail.component.css']
})
export class FriendDetailComponent implements OnInit {

	id: string;

	friends: Friend[];

	friend: Friend;

	checkReady: number;

	title: string = 'Редактирование';

	getFriends():void {
		this.friendsService.getFriends().subscribe(result => {this.friends = result;});
	}

	selectFriend(id: string):void {

		this.friend = this.friends.find(friend => friend._id === id);
		clearInterval(this.checkReady);

	}

	constructor(
		private route: ActivatedRoute,
		private friendsService: FriendsService,
		private transferVarsService: TransferVarsService
	) { }

	ngOnInit() {

		this.getFriends();

		this.id = this.route.snapshot.paramMap.get('id');

		this.checkReady = setInterval(() => {
			if (this.friends != undefined) {
				clearInterval(this.checkReady);
			}
			this.selectFriend(this.id);
			this.transferVarsService.setFriends(this.friends);
		}, 500);

		this.transferVarsService.setTitle(this.title);

	}

}
