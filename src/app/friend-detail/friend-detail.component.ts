import { Component, Input, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Friend } from '../friend';
import { FriendsService } from '../friends.service';
import { TransferVarsService } from '../transfer-vars.service';

export class ExtendedFriend extends Friend {
	favorite: boolean;
	constructor(fav) {
		super();
		this._id = "";
		this.index = 0;
		this.guid = "";
		this.isActive = false;
		this.balance = "";
		this.picture = "http://placehold.it/32x32";
		this.age = 0;
		this.eyeColor = "";
		this.name = "";
		this.gender = "female";
		this.company = "";
		this.email = "";
		this.phone = "";
		this.address = "";
		this.about = "";
		this.registered = "";
		this.latitude = 0;
		this.longitude = 0;
		this.tags = [];
		this.friends = [];
		this.greeting = "";
		this.favoriteFruit = "";
		this.favorite = fav;
	}
}

@Component({
	selector: 'app-friend-detail',
	templateUrl: './friend-detail.component.html',
	styleUrls: ['./friend-detail.component.css']
})
export class FriendDetailComponent implements OnInit {

	id: string;

	friends: Friend[];

	friend: ExtendedFriend;

	title: string = 'Редактирование';

	constructor(
		private route: ActivatedRoute,
		private friendsService: FriendsService,
		private transferVarsService: TransferVarsService,
		@Inject('LOCALSTORAGE') private localStorage: any
	) { }

	getFriends():void {
		this.friendsService.getFriends().subscribe(result => {
			this.friends = result;
			this.id = this.route.snapshot.paramMap.get('id');
			this.selectFriend(this.id);
			this.friend.favorite = this.checkValInStorage(this.friend._id);
		});
	}

	selectFriend(id: string):void {

		this.friend = new ExtendedFriend(false);

		let tempFriend = new Friend;

		tempFriend = this.friends.find(friend => friend._id === id);

		for (let property in tempFriend) {
			this.friend[property] = tempFriend[property];
		}

	}
	
	favoriteChanging():boolean {

		if ((!this.friend) || (!this.friend._id)) {
			return false;
		}

		let _id = this.friend._id;
		let fav: boolean = true;

		fav = !this.friend.favorite;

		this.locStorage(_id, fav);

	}

	locStorage(id: string, action: boolean):void {

		if (action) {
			localStorage.setItem(id, 'true');
		} else {
			localStorage.removeItem(id);
		}

	}

	checkValInStorage(id: string):boolean {

		return (localStorage.getItem(id) === "true");

	}
	
	ngOnInit() {

		this.getFriends();

		this.transferVarsService.setTitle(this.title);

	}

}
