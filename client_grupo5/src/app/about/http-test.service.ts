import {Injectable}  from '@angular/core';
import {Http, Response} from 	'@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class HTTPTestService{
	constructor (private _http: Http){}
	
	onTestGet(){
		return this._http.get('http://date.jsontest.com')
		.map(res =>res.json());
	}
	postJSON(){

	}
}

