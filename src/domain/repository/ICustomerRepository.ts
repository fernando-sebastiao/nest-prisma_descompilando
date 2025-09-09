import { CustomerDTO } from 'src/usecases/dtos/custumerInputs';
import { CustomerEntity } from '../entities/customer-entity';

export abstract class ICustomerRepository {
  abstract findById(customerId: string): Promise<CustomerEntity>;
  abstract create(data: CustomerDTO): Promise<CustomerEntity>;
}
