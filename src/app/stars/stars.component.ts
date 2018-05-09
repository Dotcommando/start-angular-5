import { Component, OnInit, Input, Inject } from '@angular/core';

@Component({
	selector: 'app-stars',
	templateUrl: './stars.component.html',
	styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

	@Input() stars: number;

	@Input() id: string;

	setStars(index: number):void {

		this.stars = index;
		localStorage.setItem(this.id + "-stars", index.toString());

	}

	constructor(
		@Inject('LOCALSTORAGE') private localStorage: any
	) { }

	ngOnInit() {
	}

}
