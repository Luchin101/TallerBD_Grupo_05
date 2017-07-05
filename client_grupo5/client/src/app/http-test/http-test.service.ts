import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class HTTPTestService {
	
	constructor (private _http: Http) {}

	getTweets(){
		return this._http.get('http://146.83.216.216:3004/api/Tweets').map((response:Response) => response.json());
	}

	getStats(range: string){
		return this._http.get('http://146.83.216.216:3004/api/Tweets/stats?range=monthly').map((response:Response) => response.json());
	}
}
