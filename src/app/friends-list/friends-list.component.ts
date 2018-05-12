import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FriendsService } from 'services';
import { TransferVarsService } from 'services';
import { LocalstorageService } from 'services';
import { FriendsStars } from '../friends-stars';


@Component({
	selector: 'app-friends-list',
	templateUrl: './friends-list.component.html',
	styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

	title: string = 'Список друзей';

	friends: Friend[];

	stars: Array<FriendsStars> = [];

	constructor (
		private friendsService: FriendsService,
		private transferVarsService: TransferVarsService,
		private localstorageService: LocalstorageService
	) {
		
	}
	
	ngOnInit() {
		this.getFriends();
		this.transferVarsService.setTitle(this.title);
	}
	
	getFriends():void {
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

		return this.stars.find(friend => friend.id == id).stars;

	}

}