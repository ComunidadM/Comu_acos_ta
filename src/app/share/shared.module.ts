import { NgModule } from '@angular/core';

import { BradcrumbsComponent } from './bradcrumbs/bradcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HaderComponent } from './hader/hader.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule ({
  declarations: [
    NopagefoundComponent,
    HaderComponent,
    SidebarComponent,
    BradcrumbsComponent
  ],
  exports: [
    NopagefoundComponent,
    HaderComponent,
    SidebarComponent,
    BradcrumbsComponent
  ]
})
export class SharedModule { }
