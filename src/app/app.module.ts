import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MODE_STORAGE_SERVICE, ModeLocalStorageService } from "./core/modules/mode/mode-storage.service";
import { ModeToggleService } from "./core/modules/mode/mode-toggle.service";
import { AntDesignModules } from "./core/modules/antdesign.module";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AntDesignModules
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    ModeToggleService,
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: ModeLocalStorageService,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
