import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Routes, RouterModule } from '@angular/router';
@NgModule({
  imports:      [ BrowserModule, MatCardModule,FormsModule,MatGridListModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
