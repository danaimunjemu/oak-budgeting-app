import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OakRoutingModule } from './oak-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';

import { AntDesignModules } from "../../core/modules/antdesign.module";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    OakRoutingModule,
    AntDesignModules,
    FormsModule
  ]
})
export class OakModule { }
