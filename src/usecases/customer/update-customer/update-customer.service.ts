import { Injectable, NotFoundException } from '@nestjs/common';
import { ICustomerRepository } from 'src/domain/repository/ICustomerRepository';
import { updateCustomerDTO } from 'src/usecases/dtos/custumerInputs';
import { messages } from 'src/util/error-messages';

@Injectable()
export class UpdateCustomerService {
  constructor(private readonly repo: ICustomerRepository) {}
  async execute(customerId: string, data: updateCustomerDTO) {
    const ifExistingCustomer = await this.repo.findById(customerId);
    if (!ifExistingCustomer)
      throw new NotFoundException(messages.customerNotFound);
    return this.repo.update(customerId, data);
  }
}
