import { Injectable } from '@nestjs/common';
import { ICustomerRepository } from 'src/domain/repository/ICustomerRepository';
import { CustomerDTO } from 'src/usecases/dtos/custumerInputs';

@Injectable()
export class CreateCustomerService {
  constructor(private readonly repo: ICustomerRepository) {}
  async execute(data: CustomerDTO) {
    return this.repo.create(data);
  }
}
