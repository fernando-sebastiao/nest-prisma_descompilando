import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomerEntity } from 'src/domain/entities/customer-entity';
import { ICustomerRepository } from 'src/domain/repository/ICustomerRepository';
import { CustomerDTO } from 'src/usecases/dtos/custumerInputs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrismaCustomerRepository implements ICustomerRepository {
  constructor(private prisma: PrismaService) {}
  async findById(customerId: string): Promise<CustomerEntity> {
    const data = await this.prisma.customer.findUnique({
      where: { id: customerId },
    });
    if (!data) {
      throw new NotFoundException(
        `Cliente com o id ${customerId} não encontrado!`,
      );
    }
    return data;
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
}
