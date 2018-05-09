import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FriendsService } from '../friends.service';
import { TransferVarsService } from '../transfer-vars.service';
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
			this.friends.forEach((item) => {
				this.stars.push({id: item._id, stars: this.checkStarsInStorage(item._id)});
			});
		});
	}

	checkStarsInStorage(id: string):number {

		let stars: number = 0;
		stars = parseInt(localStorage.getItem(id + "-stars"));
		return ((stars < 6)&&(stars >= 0))? stars : 0;

	}

	getStars(id: string):number {

		return this.stars.find(friend => friend.id == id).stars;

	}

}