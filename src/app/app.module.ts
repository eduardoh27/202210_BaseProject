import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BandaModule } from './banda/banda.module';


@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BandaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
