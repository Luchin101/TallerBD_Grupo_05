import {Injectable}  from '@angular/core';
import {Http} from 	'@angular/http';

@Injectable()
export class HTTPTestService{
	constructor (private _http: Http){}
	
	getCurrentTime(){
		return this._http.get('http://0.0.0.0:3003/api/tweets')
		.map(res =>res.json());
	}
	postJSON(){

	}
}

