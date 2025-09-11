import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerEntity } from 'src/domain/entities/customer-entity';
import { FindAllCustumerService } from 'src/usecases/customer/find-all/find-all.custumer.service';

@ApiTags('Customer')
@Controller('customer')
export class FindAllCustumerController {
  constructor(
    private readonly findAllCustumerService: FindAllCustumerService,
  ) {}
  @ApiOperation({ summary: 'Lista todos os clientes' })
  @ApiResponse({
    description: 'Lista dos clientes!',
    status: 200,
    type: CustomerEntity,
  })
  @ApiResponse({
    description: 'Erro interno do servidor!',
    status: 500,
  })
  @Get()
  async findallCustumer() {
    return this.findAllCustumerService.execute();
  }
}
