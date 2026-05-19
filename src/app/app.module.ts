import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee';
import { EmployeeList } from './components/employee-list/employee-list';

// Define AppComponent inline to avoid missing external module file
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  imports: [RouterOutlet]
})
export class AppComponent {}

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeList },
  { path: 'add-employee', component: AddEmployeeComponent }
];
@NgModule({
  declarations: [
    
    AddEmployeeComponent,
    EmployeeList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],

})
export class AppModule {}