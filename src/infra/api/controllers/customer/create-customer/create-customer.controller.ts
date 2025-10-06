import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerEntity } from 'src/domain/entities/customer-entity';
import { CreateCustomerService } from 'src/usecases/customer/create-customer/create-customer.service';
import { CustomerDTO } from 'src/usecases/dtos/custumerInputs';

@ApiTags('Customer')
@Controller('customer')
export class CreateCustomerController {
  constructor(private readonly createCustomerService: CreateCustomerService) {}

  @ApiOperation({ summary: 'Criar um cliente(customer)' })
  @ApiResponse({
    description: 'cliente(customer) criado com sucesso',
    status: 201,
    type: CustomerEntity,
  })
  @ApiResponse({
    description: 'cliente(customer) já existe! Verifique os dados',
    status: 401,
  })
  @ApiResponse({
    status: 400,
    description:
      'Dados invalidos, certifique que esteja a enviar os dados necessários!',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro no servidor!',
  })
  @Post()
  async createCustomer(@Body() data: CustomerDTO): Promise<CustomerEntity> {
    return await this.createCustomerService.execute(data);
  }
}
