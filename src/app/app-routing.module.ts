import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { DepartmentComponent } from './department/department.component';




const appRoutes:Routes = [
  { path:'employee',component:EmployeeComponent },
  { path:'department', component:DepartmentComponent },
  { path:'project' , component:ProjectComponent}
]

@NgModule({
  imports:[ RouterModule.forRoot(appRoutes)],
exports:[RouterModule],
  declarations: [ ],
  bootstrap:    [ ]
})
export class AppRoutingModule { }
