import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
  standalone: false,
})
export class EmployeeList {
  employees: Employee[] = [];
  searchText: string = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  deleteEmployee(id: number) {

    const confirmDelete = confirm('Are you sure?');

    if (confirmDelete) {
      this.employeeService.deleteEmployee(id);

      this.employees = this.employeeService.getEmployees();
    }
  }

  get filteredEmployees() {

    return this.employees.filter(employee =>
      employee.name.toLowerCase()
        .includes(this.searchText.toLowerCase())
    );
  }
}


