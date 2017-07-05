import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class HTTPTestService {
	
	constructor (private _http: Http) {}

	getTweets(){
		return this._http.get('http://localhost:3008/api/Tweets').map((response:Response) => response.json());
	}

	getStats(range: string){
		return this._http.get('http://0.0.0.0:3008/api/tweets/tweetsStats?range=daily').map((response:Response) => response.json());
	}
}
