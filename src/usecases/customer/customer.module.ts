import { Module } from '@nestjs/common';
import { ICustomerRepository } from 'src/domain/repository/ICustomerRepository';
import { CreateCustomerController } from 'src/infra/api/controllers/customer/create-customer/create-customer.controller';
import { DeleteCustomerController } from 'src/infra/api/controllers/customer/delete-customer/delete-customer.controller';
import { FindAllCustumerController } from 'src/infra/api/controllers/customer/find-all/find-all.custumer.controller';
import { FindOneCustomerController } from 'src/infra/api/controllers/customer/find-one.customer/find-one.customer.controller';
import { UpdateCustomerController } from 'src/infra/api/controllers/customer/update-customer/update-customer.controller';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { PrismaCustomerRepository } from 'src/infra/database/repository/prisma-customer-repository';
import { CreateCustomerService } from './create-customer/create-customer.service';
import { DeleteCustomerService } from './delete-customer/delete-customer.service';
import { FindAllCustumerService } from './find-all/find-all.custumer.service';
import { FindOneCustomerService } from './find-one/find-one.customer.service';
import { UpdateCustomerService } from './update-customer/update-customer.service';

@Module({
  providers: [
    PrismaService,
    CreateCustomerService,
    { provide: ICustomerRepository, useClass: PrismaCustomerRepository },
    UpdateCustomerService,
    FindAllCustumerService,
    DeleteCustomerService,
    FindOneCustomerService,
  ],
  controllers: [
    CreateCustomerController,
    UpdateCustomerController,
    FindAllCustumerController,
    DeleteCustomerController,
    FindOneCustomerController,
  ],
})
export class CustomerModule {}
