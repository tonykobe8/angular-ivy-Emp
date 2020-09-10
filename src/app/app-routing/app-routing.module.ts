import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';


const routes:Routes =[{path:'employee',component:EmployeeComponent }];
@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports:[ RouterModule],
  declarations: []
})
export class AppRoutingModule { }