import { Component, OnInit } from '@angular/core';
import { TransferVarsService, FriendsService } from 'services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	title:string = 'Менеджер контактов';

	constructor(
	  private transferVarsService: TransferVarsService,
    private friendsService: FriendsService
  ) {}

  ngOnInit() {
	  this.friendsService.getFriends().subscribe((friends) => {
	    this.transferVarsService.setFriends(friends);
    });
  }

}
