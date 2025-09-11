import { Injectable, NotFoundException } from '@nestjs/common';
import { ICustomerRepository } from 'src/domain/repository/ICustomerRepository';
import { messages } from 'src/util/error-messages';

@Injectable()
export class DeleteCustomerService {
  constructor(private readonly repo: ICustomerRepository) {}
  async execute(id: string) {
    const ifCustomerExists = await this.repo.findById(id);
    if (!ifCustomerExists)
      throw new NotFoundException(messages.customerNotFound);
    return this.repo.deleteCustumer(id);
  }
}
