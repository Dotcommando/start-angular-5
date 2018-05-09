import { Component, OnInit, Inject } from '@angular/core';
import { Friend } from '../friend';
import { FriendsService } from '../friends.service';
import { TransferVarsService } from '../transfer-vars.service';

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
		@Inject('LOCALSTORAGE') private localStorage: any
	) { }

	getFriends():void {
		this.friendsService.getFriends().subscribe(result => {
			this.friends = result;
			this.fillFavoriteFriends();
		});
	}

	fillFavoriteFriends():void {

		if (this.friends.length <= 0) { return; }

		let that = this;

		this.friends.forEach(function(item, i, arr) {

			if (that.checkValInStorage(item._id)) {
				that.favoriteFriends.push(item);
			}

		});

	}

	checkValInStorage(id: string):boolean {

		return (localStorage.getItem(id) === "true");

	}

	ngOnInit() {

		this.getFriends();
		
		this.transferVarsService.setTitle(this.title);

	}

}
