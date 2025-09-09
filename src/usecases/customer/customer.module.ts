import { Module } from '@nestjs/common';
import { ICustomerRepository } from 'src/domain/repository/ICustomerRepository';
import { CreateCustomerController } from 'src/infra/api/restApi/controllers/customer/create-customer/create-customer.controller';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { PrismaCustomerRepository } from 'src/infra/database/repository/prisma-customer-repository';
import { CreateCustomerService } from './create-customer/create-customer.service';

@Module({
  providers: [
    PrismaService,
    CreateCustomerService,
    { provide: ICustomerRepository, useClass: PrismaCustomerRepository },
  ],
  controllers: [CreateCustomerController],
})
export class CustomerModule {}
