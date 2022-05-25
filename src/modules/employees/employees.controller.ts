import { Controller, Body, Get, Post } from '@nestjs/common';
import { EmployeeModel } from './employees.models';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  getAllEmployees(): EmployeeModel[] {
    return this.employeesService.getAllEmployees();
  }

  @Post()
  createEmployee(@Body() newEmployee: EmployeeModel): string {
    return this.employeesService.addNewEmployee(newEmployee);
  }
}
