import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { FriendsService } from './friends.service';
import { FriendsStars } from '../friends-stars';
import { Friend } from '../friend';

@Injectable()
export class StarsService {

	private friends: Friend[];

	private stars: Array<FriendsStars> = [];

	constructor(
		private friendsService: FriendsService,
		private localstorageService: LocalstorageService
	) {
		this.friendsService.getFriends().subscribe(result => {
			this.friends = result;
			this.friends.forEach((item) => {
				this.stars.push({id: item._id, stars: this.checkStarsInStorage(item._id)});
			});
		});
	}

	checkStarsInStorage(id: string):number {

		let stars: number = 0;
		let obj = this.localstorageService.getValue(id);
		if (obj === undefined) return 0;

		stars = (obj.stars !== undefined) ? parseInt(obj.stars) : 0;

		return ((stars < 6)&&(stars >= 0))? stars : 0;

	}

	getStars(id: string):number {

		let firndStars = this.stars.find(friend => friend.id == id).stars;
		firndStars = this.checkStarsInStorage(id);
		return firndStars;

	}

}
