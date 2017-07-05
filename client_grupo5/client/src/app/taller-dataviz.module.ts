import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './taller-dataviz.routes';
import { TallerDataVizComponent } from './taller-dataviz.component';
import { HomeComponent } from './home/home.component';
import { Dataviz1Component } from './dataviz1/dataviz1.component';
import { HTTPTestComponent } from './http-test/http-test.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import "materialize-css";
import { MaterializeDirective } from 'angular2-materialize/dist';

@NgModule({
  declarations: [
    TallerDataVizComponent,
    HomeComponent,
    Dataviz1Component,
    HTTPTestComponent,
    AreaChartComponent,
    MaterializeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [], 
  bootstrap: [ TallerDataVizComponent]
})
export class TallerDataVizModule {

}
