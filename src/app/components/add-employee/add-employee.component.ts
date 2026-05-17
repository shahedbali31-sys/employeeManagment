import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent {

  
 employeeForm = this.fb.group({...}); // constructor
    employeeService: any;
constructor(private fb: FormBuilder) {}
  addEmployee() {

    if (this.employeeForm.invalid) {
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name: this.employeeForm.value['name']!,
      department: this.employeeForm.value['department']!,
      salary: Number(this.employeeForm.value['salary'])
    };

    this.employeeService.addEmployee(newEmployee);

    this.employeeForm.reset();
  }
}