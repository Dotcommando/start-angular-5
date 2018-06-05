import { Component, OnInit } from '@angular/core';
import { TransferVarsService } from 'services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title:string = 'Менеджер контактов';

	constructor(private transferVarsService: TransferVarsService) {}

}
