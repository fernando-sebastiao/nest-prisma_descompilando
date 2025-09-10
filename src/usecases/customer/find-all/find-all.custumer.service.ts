import { Injectable } from '@nestjs/common';
import { ICustomerRepository } from 'src/domain/repository/ICustomerRepository';

@Injectable()
export class FindAllCustumerService {
  constructor(private readonly repo: ICustomerRepository) {}
  async execute() {
    return this.repo.findall();
  }
}
