import { Injectable, NotFoundException } from '@nestjs/common';
import { ICustomerRepository } from 'src/domain/repository/ICustomerRepository';
import { messages } from 'src/util/error-messages';

@Injectable()
export class FindOneCustomerService {
  constructor(private readonly repo: ICustomerRepository) {}
  async execute(customerId: string) {
    const ifCustomerExists = await this.repo.findById(customerId);
    if (!ifCustomerExists)
      throw new NotFoundException(messages.customerNotFound);
    return ifCustomerExists;
  }
}
