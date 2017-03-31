import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';


import { AppComponent } from './app.component';
import {ListComponent} from './list.component';

import {HotelService} from "./hotel.service";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import {routing} from "./app.routing"

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    routing
  ],
  
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
