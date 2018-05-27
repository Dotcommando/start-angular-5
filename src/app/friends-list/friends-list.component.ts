import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FriendsService } from 'services';
import { TransferVarsService } from 'services';
import { LocalstorageService } from 'services';
import { StarsService } from 'services';
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
		private localstorageService: LocalstorageService,
		private starsService: StarsService
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

	getStars(id: string):number {

		return this.starsService.getStars(id);

	}

}