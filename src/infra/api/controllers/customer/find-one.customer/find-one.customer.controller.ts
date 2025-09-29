import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerEntity } from 'src/domain/entities/customer-entity';
import { FindOneCustomerService } from 'src/usecases/customer/find-one/find-one.customer.service';
@ApiTags('Customer')
@Controller('customer')
export class FindOneCustomerController {
  constructor(
    private readonly findOneCustomerService: FindOneCustomerService,
  ) {}
  @ApiOperation({ summary: 'Procurar cliete pelo id' })
  @ApiResponse({
    description: 'Cliente encontrado!',
    status: 200,
    type: CustomerEntity,
  })
  @ApiResponse({
    description: 'Cliente não encontrado!',
    status: 404,
  })
  @ApiResponse({
    description: 'Erro interno do servidor!',
    status: 500,
  })
  @Get(':customerId')
  async findOneCustomer(@Param('customerId') customerId: string) {
    return this.findOneCustomerService.execute(customerId);
  }
}
