import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerEntity } from 'src/domain/entities/customer-entity';
import { UpdateCustomerService } from 'src/usecases/customer/update-customer/update-customer.service';
import { updateCustomerDTO } from 'src/usecases/dtos/custumerInputs';

@ApiTags('Customer')
@Controller('customer')
export class UpdateCustomerController {
  constructor(private readonly updateCustomerService: UpdateCustomerService) {}

  @ApiOperation({ summary: 'Actualiza um cliente' })
  @ApiResponse({
    status: 200,
    description: 'Cliente atualizado com sucesso!',
    type: CustomerEntity,
  })
  @ApiResponse({
    status: 401,
    description: 'Cliente não encontrado!',
    type: CustomerEntity,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro no servidor!',
  })
  @Put(':customerId')
  async updateCustomer(
    @Body() data: updateCustomerDTO,
    @Param('customerId') customerId: string,
  ): Promise<CustomerEntity> {
    return await this.updateCustomerService.execute(customerId, data);
  }
}
