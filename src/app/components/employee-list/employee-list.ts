import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
searchText: any;
deleteEmployee(arg0: any) {
throw new Error('Method not implemented.');
}
} 
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  searchText: string = '';

  constructor(private employeeService: EmployeeService) {}

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
