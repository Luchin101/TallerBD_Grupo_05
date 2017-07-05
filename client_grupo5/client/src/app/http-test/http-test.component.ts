import {Component} from '@angular/core';
import { HTTPTestService } from './http-test.service';
import {AreaChartConfig} from '../area-chart/area-chart-config';

@Component({
    selector:'http-test',
    template:`
	<br>
	<button (click)="onGetTweets()">GET Tweets</button>
	<button (click)="onGetStats()">GET Stats</button>
	<button (click)="test()">GET Stats + visualizacion</button>
	<br><button (click)="delete()">Delete JSON</button>
	<br>
	<p>Output: {{getData}}</p>
	<br>
	<app-area-chart [config]="areaChartConfig"></app-area-chart>	
    `,
    providers:[HTTPTestService]
})

export class HTTPTestComponent{
	
	private range: string='weekly';
	private areaChartConfig: Array<AreaChartConfig>;
	getData:string;

	constructor (private _httpService: HTTPTestService){}

	onGetTweets(){
		this._httpService.getTweets().subscribe(
			data => this.getData = JSON.stringify(data),
			error => alert(error),
			() => console.log("Finished")		
		);
	}

	onGetStats(){
		this._httpService.getStats(this.range).subscribe(
			data => this.getData = JSON.stringify(data),
			error => alert(error),
			() => console.log("Finished")		
		);
	}

	test() {
    		this._httpService.getStats(this.range).subscribe((stats: any) => {
        // We create a new AreaChartConfig object to set number of tweets config
        let tweetsArea: AreaChartConfig = {
          settings: {
            fill: 'rgba(1, 67, 163, 1)',
            interpolation: 'none'
          }, dataset: stats.map(data => {
            return { x: new Date(data.date), y: data.count };
          })
        };

        // to finish we append our AreaChartConfigs into an array of configs 
        this.areaChartConfig = new Array<AreaChartConfig>();
        this.areaChartConfig.push(tweetsArea);
      });
  }


	delete(){
		this.getData="";
	}
}
