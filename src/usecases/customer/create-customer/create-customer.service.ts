import { ForbiddenException, Injectable } from '@nestjs/common';
import { ICustomerRepository } from 'src/domain/repository/ICustomerRepository';
import { CustomerDTO } from 'src/usecases/dtos/custumerInputs';
import { messages } from 'src/util/error-messages';

@Injectable()
export class CreateCustomerService {
  constructor(private readonly repo: ICustomerRepository) {}
  async execute(data: CustomerDTO) {
    const ExistingCustomer = await this.repo.findExisting(
      data.email,
      data.phone,
    );
    if (!ExistingCustomer)
      throw new ForbiddenException(messages.custumerAlreadyExists);

    return this.repo.create(data);
  }
}
