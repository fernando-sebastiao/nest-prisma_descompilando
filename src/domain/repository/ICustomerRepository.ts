import {
  CustomerDTO,
  updateCustomerDTO,
} from 'src/usecases/dtos/custumerInputs';
import { CustomerEntity } from '../entities/customer-entity';

export abstract class ICustomerRepository {
  abstract findById(customerId: string): Promise<any>;
  abstract create(data: CustomerDTO): Promise<CustomerEntity>;
  abstract findExisting(email: string, phone: string): Promise<any>;
  abstract update(
    customerId: string,
    data: updateCustomerDTO,
  ): Promise<CustomerEntity>;
  abstract findall(): Promise<CustomerEntity[]>;
}
