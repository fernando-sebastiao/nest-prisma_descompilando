import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerEntity } from 'src/domain/entities/customer-entity';
import { FindAllCustumerService } from 'src/usecases/customer/find-all/find-all.custumer.service';

@ApiTags('Custumer')
@Controller('custumer')
export class FindAllCustumerController {
  constructor(
    private readonly findAllCustumerService: FindAllCustumerService,
  ) {}
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
