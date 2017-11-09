import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
      AppComponent, jqxGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
