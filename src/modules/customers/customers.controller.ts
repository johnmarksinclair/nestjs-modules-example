import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CustomerModel } from './customers.models';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  newCustomer(@Body() newCustomer: CustomerModel) {
    this.customersService.newCustomer(newCustomer);
  }

  @Get()
  getAllCustomers(): CustomerModel[] {
    return this.customersService.getAllCustomers();
  }

  @Put('/purchase/:id')
  newPurchase(@Param('id') id: number) {
    this.customersService.newPurchase(id);
  }
}
