import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, jqxGridModule ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
