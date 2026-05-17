import { Routes } from '@angular/router';
import { Employee } from './services/employee';
import { AddEmployee } from './components/add-employee/add-employee';
import { EmployeeList } from './components/employee-list/employee-list';

export const routes: Routes = [ 

  { path: '', redirectTo: 'employees', pathMatch: 'full' },

  { path: 'employees', component: EmployeeList },

  { path: 'add-employee', component: AddEmployee }
];
