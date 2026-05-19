import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  standalone: false
})
export class AddEmployeeComponent {
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService, 
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],           
      department: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  addEmployee() {
    if (this.employeeForm.invalid) return;

    const newEmployee = {
      id: Date.now(),
      name: this.employeeForm.value.name,
      department: this.employeeForm.value.department,
      salary: Number(this.employeeForm.value.salary)
    };

    this.employeeService.addEmployee(newEmployee);
    this.employeeForm.reset();
    this.router.navigate(['/employees']); // 
  }
}