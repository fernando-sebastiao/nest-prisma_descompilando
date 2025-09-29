import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteCustomerService } from 'src/usecases/customer/delete-customer/delete-customer.service';

@ApiTags('Customer')
@Controller('customer')
export class DeleteCustomerController {
  constructor(private readonly deleteCustomerService: DeleteCustomerService) {}
  @ApiOperation({ summary: 'Elimina um cliente!' })
  @ApiResponse({ description: 'Cliente atualizado com sucesso!', status: 200 })
  @ApiResponse({ description: 'Cliente não encontrado!', status: 404 })
  @ApiResponse({ description: 'Erro interno do servidor!', status: 500 })
  @Delete(':customerId')
  async deleteCustomer(@Param('customerId') customerId: string) {
    return this.deleteCustomerService.execute(customerId);
  }
}
