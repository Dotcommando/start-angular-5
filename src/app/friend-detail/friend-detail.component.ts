import { Component, Input, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Friend } from '../friend';
import { FriendsService } from 'services';
import { TransferVarsService } from 'services';
import { LocalstorageService } from 'services';

@Component({
	selector: 'app-friend-detail',
	templateUrl: './friend-detail.component.html',
	styleUrls: ['./friend-detail.component.css']
})
export class FriendDetailComponent implements OnInit {

	id: string;

	isFavorite = false;

	friends: Friend[];

	friend: Friend;

	title: string = 'Редактирование';

	constructor(
		private route: ActivatedRoute,
		private friendsService: FriendsService,
		private transferVarsService: TransferVarsService,
		private localstorageService: LocalstorageService
	) { }

	getFriends():void {
		this.friendsService.getFriends().subscribe(result => {
			this.friends = result;
			this.id = this.route.snapshot.paramMap.get('id');
			this.friend = this.friends.find(friend => friend._id === this.id);
			let friendFromLocalStorage = this.localstorageService.getValue(this.id);
			if (friendFromLocalStorage !== undefined) {
				if (friendFromLocalStorage.favorite !== undefined) {
					this.isFavorite = friendFromLocalStorage.favorite;
				}
			}
		});
	}

	favoriteChanging():boolean {

		if ((!this.friend) || (!this.friend._id)) {
			return false;
		}

		let fav: boolean = !this.isFavorite;

		this.localstorageService.setValue(this.friend._id, {favorite: fav});

	}

	ngOnInit() {

		this.getFriends();

		this.transferVarsService.setTitle(this.title);

	}

}
