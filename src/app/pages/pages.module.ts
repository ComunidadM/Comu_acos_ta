import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../share/shared.module';

import { PAGES_PAGES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';



@NgModule  ({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PAGES_PAGES
  ]
})
export class PagesModule { }
