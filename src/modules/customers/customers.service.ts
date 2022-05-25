import { Injectable } from '@nestjs/common';
import { CustomerModel } from './customers.models';

@Injectable()
export class CustomersService {
  private readonly customers: CustomerModel[] = [];

  newCustomer(newCustomer: CustomerModel) {
    newCustomer['id'] = this.customers.length;
    newCustomer['purchases'] = 0;
    this.customers.push(newCustomer);
  }

  getAllCustomers(): CustomerModel[] {
    return this.customers;
  }

  newPurchase(id: number) {
    this.customers[id].purchases++;
  }
}
