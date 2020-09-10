import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { Routes,RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';

const appRoutes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'department', component: DepartmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot (appRoutes)],
  declarations:[],
  exports:[RouterModule]
})
export class AppRoutingModule { }