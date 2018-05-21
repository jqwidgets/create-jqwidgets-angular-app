import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, jqxBarGaugeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
