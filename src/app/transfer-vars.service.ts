import { Injectable } from '@angular/core';
import { Friend } from './friend';

@Injectable()
export class TransferVarsService {

	private friends:Friend[] = [];

	public setFriends(friends: Friend[]):void {
		this.friends = friends;
	}

}