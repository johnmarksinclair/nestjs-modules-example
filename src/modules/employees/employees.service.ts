import { Injectable } from '@nestjs/common';
import { EmployeeModel } from './employees.models';

@Injectable()
export class EmployeesService {
  private readonly employees: EmployeeModel[] = [];

  getAllEmployees(): EmployeeModel[] {
    return this.employees;
  }

  addNewEmployee(newEmployee: EmployeeModel) {
    this.employees.push(newEmployee);
  }
}
