import { Injectable } from '@angular/core';
import { Friend } from './friend';
import { Http, Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';
import { of } from 'rxjs/observable/of';

@Injectable()
export class FriendsService {

	public apiHost: string = './assets/generated.json';

	private friends: Friend[];

	private friendsObservable: Observable<any>;

	constructor(private http: Http) {

		this.friendsObservable = this.http.get(this.apiHost)
			.map(response => response.json())
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
