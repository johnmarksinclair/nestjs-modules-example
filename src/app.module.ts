import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './modules/customers/customers.module';
import { EmployeesModule } from './modules/employees/employees.module';

@Module({
  imports: [EmployeesModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
