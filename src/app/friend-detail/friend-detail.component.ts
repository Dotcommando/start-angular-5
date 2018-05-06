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

	title: string = 'Редактирование';

	getFriends():void {
		this.friendsService.getFriends().subscribe(result => {
			this.friends = result;
			this.id = this.route.snapshot.paramMap.get('id');
			this.selectFriend(this.id);
			this.transferVarsService.setFriends(this.friends);
		});
	}

	selectFriend(id: string):void {

		this.friend = this.friends.find(friend => friend._id === id);

	}

	constructor(
		private route: ActivatedRoute,
		private friendsService: FriendsService,
		private transferVarsService: TransferVarsService
	) { }

	ngOnInit() {

		this.getFriends();

		this.transferVarsService.setTitle(this.title);

	}

}
