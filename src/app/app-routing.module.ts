import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

import { DepartmentComponent } from './department/department.component';

import { ProjectComponent } from './project/project.component';
const routes: Routes = [ 
   
    { path: 'employee', component: EmployeeComponent },
    { path: 'employeeList', component: EmployeeListComponent },
     { path: 'project', component: ProjectComponent},
      { path: 'department', component: DepartmentComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }