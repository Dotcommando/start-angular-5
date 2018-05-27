import { Component, OnInit, Input } from '@angular/core';
import { LocalstorageService } from 'services';
import { StarsService } from 'services';

@Component({
	selector: 'app-stars',
	templateUrl: './stars.component.html',
	styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

	private stars: number;

	@Input() id: string;

	constructor(
		private localstorageService: LocalstorageService,
		private starsService: StarsService
	) { }

	setStars(index: number):void {

		this.stars = index;
		this.localstorageService.setValue(this.id, {stars: index});

	}

	ngOnInit() {
		this.stars = this.starsService.getStars(this.id);
	}

}
