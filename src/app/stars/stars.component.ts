import { Component, OnInit, Input } from '@angular/core';
import { LocalstorageService } from 'services';

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
		this.localstorageService.setValue(this.id, {stars: index});

	}

	constructor(
		private localstorageService: LocalstorageService
	) { }

	ngOnInit() {
	}

}
