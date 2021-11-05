import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { DatacenterComponent } from './datacenter/datacenter.component';
import { NetComponent } from './net/net.component';
import { PythonComponent } from './python/python.component';
import { RestComponent } from './rest/rest.component';
import { HeaderRoutingModule } from './header.routing.module';
import { PodhtmlComponent } from './podhtml/podhtml.component';
import { PodcssComponent } from './podcss/podcss.component';
import { UlancamentosComponent } from '../ulancamentos/ulancamentos.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DatacenterComponent,
    NetComponent,
    PythonComponent,
    RestComponent,
    PodhtmlComponent,
    PodcssComponent,
    UlancamentosComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HeaderRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: []
})
export class HeaderModule { }
