import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {
	private STORAGE_KEY: string = 'list-manager-v-01';
	
	constructor( private defaults: any ) {
		if ( !localStorage[this.STORAGE_KEY] || !JSON.parse( localStorage[this.STORAGE_KEY] )) {
			this.setAll(defaults);
		}
	}

	setValue(key: string, value: any) {
		let data = JSON.parse( localStorage[this.STORAGE_KEY] );
		if (data[key] === undefined) {
			data[key] = {};
		}
		data[key] = Object.assign(data[key], value);
		localStorage[this.STORAGE_KEY] = JSON.stringify(data);
	}

	setAll(value: any) {
		localStorage[this.STORAGE_KEY] = JSON.stringify(value);
	}

	getValue(key: string) {
		let data = JSON.parse( localStorage[this.STORAGE_KEY] );
		return data[key];
	}

	getAll() {
		return JSON.parse( localStorage[this.STORAGE_KEY] );
	}
}
