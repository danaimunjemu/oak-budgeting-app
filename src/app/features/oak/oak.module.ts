import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OakRoutingModule } from './oak-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    OakRoutingModule
  ]
})
export class OakModule { }
