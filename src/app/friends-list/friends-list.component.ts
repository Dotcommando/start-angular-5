import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { FriendsService } from 'services';
import { TransferVarsService } from 'services';
import { LocalstorageService } from 'services';


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
		});
	}

}