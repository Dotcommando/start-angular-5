import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import {
  FriendsService,
  TransferVarsService,
  LocalstorageService
} from 'services';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

	title: string = "Избранные";

	friends: Friend[] = [];

	favoriteFriends: Friend[] = [];

	constructor(
		private friendsService: FriendsService,
		private transferVarsService: TransferVarsService,
		private localstorageService: LocalstorageService
	) { }

	getFriends():void {
		this.friendsService.getFriends().subscribe(result => {
			this.friends = result;
			this.fillFavoriteFriends();
      this.transferVarsService.setFriends(this.favoriteFriends);
		});
	}

	fillFavoriteFriends():void {

		if (this.friends.length <= 0) { return; }

		this.friends.forEach((item, i, arr) => {

			if (this.localstorageService.getValue(item._id) === undefined) return;
			if (this.localstorageService.getValue(item._id).favorite) {
				this.favoriteFriends.push(item);
			};

		});



	}

	ngOnInit() {

		this.getFriends();

		this.transferVarsService.setTitle(this.title);

	}

}
