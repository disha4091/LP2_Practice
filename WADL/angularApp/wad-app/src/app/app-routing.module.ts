import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TableComponent } from './table/table.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {path:'departments', component: DepartmentListComponent},
  {path:'employees', component: EmployeeListComponent},
  {path:'table', component: TableComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponent = [DepartmentListComponent,EmployeeListComponent]
