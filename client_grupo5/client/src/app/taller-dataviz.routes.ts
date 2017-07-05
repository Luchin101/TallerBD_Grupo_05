import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Dataviz1Component } from './dataviz1/dataviz1.component';
import { HTTPTestComponent } from './http-test/http-test.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dataviz1', component: Dataviz1Component },
  { path: 'http-test', component: HTTPTestComponent },
];

