import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [];

  constructor() {
    this.loadEmployees();
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(e => e.id !== id);

    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  loadEmployees() {
    const data = localStorage.getItem('employees');

    if (data) {
      this.employees = JSON.parse(data);
    }
  }
}