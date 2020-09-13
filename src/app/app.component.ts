import { Component, VERSION } from '@angular/core';
 import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
 import {DialogComponent} from './dialog/dialog.component';
 
;
 


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major; 
 constructor() {}



  


}
