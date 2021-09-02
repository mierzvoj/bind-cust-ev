import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProvideComponent } from './provide/provide.component';
import {FormsModule} from "@angular/forms";
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvideComponent,
    DisplayComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
