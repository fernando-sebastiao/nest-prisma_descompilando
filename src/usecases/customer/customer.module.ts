import { Module } from '@nestjs/common';
import { ICustomerRepository } from 'src/domain/repository/ICustomerRepository';
import { CreateCustomerController } from 'src/infra/api/restApi/controllers/customer/create-customer/create-customer.controller';
import { FindAllCustumerController } from 'src/infra/api/restApi/controllers/customer/find-all/find-all.custumer.controller';
import { UpdateCustomerController } from 'src/infra/api/restApi/controllers/customer/update-customer/update-customer.controller';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { PrismaCustomerRepository } from 'src/infra/database/repository/prisma-customer-repository';
import { CreateCustomerService } from './create-customer/create-customer.service';
import { FindAllCustumerService } from './find-all/find-all.custumer.service';
import { UpdateCustomerService } from './update-customer/update-customer.service';

@Module({
  providers: [
    PrismaService,
    CreateCustomerService,
    { provide: ICustomerRepository, useClass: PrismaCustomerRepository },
    UpdateCustomerService,
    FindAllCustumerService,
  ],
  controllers: [
    CreateCustomerController,
    UpdateCustomerController,
    FindAllCustumerController,
  ],
})
export class CustomerModule {}
