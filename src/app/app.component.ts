import { Component } from '@angular/core';
import { TransferVarsService } from './transfer-vars.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	title:string = 'Менеджер контактов';

	constructor(private transferVarsService: TransferVarsService) {}

}
