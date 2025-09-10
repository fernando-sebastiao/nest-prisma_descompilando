import { Injectable } from '@nestjs/common';
import { CustomerEntity } from 'src/domain/entities/customer-entity';
import { ICustomerRepository } from 'src/domain/repository/ICustomerRepository';
import {
  CustomerDTO,
  updateCustomerDTO,
} from 'src/usecases/dtos/custumerInputs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrismaCustomerRepository implements ICustomerRepository {
  constructor(private prisma: PrismaService) {}
  async findById(customerId: string): Promise<any> {
    return await this.prisma.customer.findUnique({
      where: { id: customerId },
    });
  }
  async create(customer: CustomerDTO): Promise<CustomerEntity> {
    const result = await this.prisma.customer.create({ data: customer });
    return result;
  }
  async findExisting(email: string, phone: string): Promise<any> {
    await this.prisma.customer.findFirst({
      where: {
        OR: [{ email }, { phone }],
      },
    });
  }
  async update(
    customerId: string,
    data: updateCustomerDTO,
  ): Promise<CustomerEntity> {
    return await this.prisma.customer.update({
      where: { id: customerId },
      data: {
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
      },
    });
  }
  async findall(): Promise<CustomerEntity[]> {
    return await this.prisma.customer.findMany();
  }
  async deleteCustumer(id: string): Promise<CustomerEntity> {
    return this.prisma.customer.delete({ where: { id } });
  }
}
