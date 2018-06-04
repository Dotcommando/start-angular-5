import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';
import { of } from 'rxjs/observable/of';

@Injectable()
export class FriendsService {

	public apiHost: string = './assets/generated.json';

	private friends: any;

	private friendsObservable: Observable<any>;

	constructor(private http: HttpClient) {

		this.friendsObservable = this.http.get(this.apiHost)
			.map(response => response)
			.do(friends => {
				this.friends = friends;
			})
			.share();

	}

	getFriends():any {
		if (this.friends) {
			return of(this.friends);
		} else {
			return this.friendsObservable;
		}
	}

}
