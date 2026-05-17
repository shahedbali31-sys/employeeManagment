import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployee } from './components/add-employee/add-employee';
import { EmployeeList } from './components/employee-list/employee-list';

@NgModule({
  declarations: [
     AddEmployee,
     EmployeeList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AppModule {}