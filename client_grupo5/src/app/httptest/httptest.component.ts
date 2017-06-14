import {Component} from '@angular/core';
import {HTTPTestService} from './httptest.service.ts';

@Component({
  selector: 'httptest',
  template: `<h3>Botton Component</h3>
<button (click)="onTestGet()"> get </button><br>
<p>Output: {{getData}}</p>
`,
 providers: [HTTPTestService]
})
export class HttpComponent {
 	getData:string;
 	postData:string;
	constructor(private _httpService:HTTPTestService){}
	
	onTestGet(){
		this._httpService.getCurrentTime().subscribe(
			data=>this.getData= JSON.stringify(data),
			error=> alert(error),
			() => console.log("fin")
		);
	}
}
