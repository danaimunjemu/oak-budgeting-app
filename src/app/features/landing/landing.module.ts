import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AntDesignModules } from "../../core/modules/antdesign.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AntDesignModules,
    LandingRoutingModule
  ]
})
export class LandingModule { }
