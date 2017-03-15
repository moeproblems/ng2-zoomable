import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ZoomableDirective } from '../ng2-zoomable.js';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ZoomableDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
