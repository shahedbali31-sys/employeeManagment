import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.css',
  standalone : false
})
export class AddEmployee {
    employeeForm: FormGroup;
    employeeService: any;

    constructor(private fb: FormBuilder) {
        this.employeeForm = this.fb.group({}); // constructor
    }



    addEmployee() {
        console.log('testing github');
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
