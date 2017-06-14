import {Component} from '@angular/core';

@Component({
  selector: 'http-test',
  template: ´
	   <button> Test Get Request </button><br>
	   <p>Output: {{getData}}</p>
	<button>Test POST Request </button><br>
	<p>Output: {{postData}}</p> ´

  templateUrl: './app.component.html',
})
export class AppComponent {
	
}

export class HTTPTestComponent {
	getData: string;
	postData: string;
}
