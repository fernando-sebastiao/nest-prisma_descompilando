import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { saleItemEntity } from 'src/domain/entities/sale-entity';
import { saleItemDTO } from 'src/usecases/dtos/saleItemInputs';
import { CreateSaleService } from 'src/usecases/sale/create-sale/create-sale.service';

@ApiTags('Sale')
@Controller('sale')
export class CreateSaleController {
  constructor(private readonly createSaleservice: CreateSaleService) {}
  @ApiOperation({ summary: 'Cria uma nova venda' })
  @ApiResponse({ status: 201, description: 'Livro vendido com sucesso' })
  @ApiResponse({
    status: 400,
    description:
      'Dados invalidos, certifique que esteja a enviar os dados necessários!',
  })
  @Post()
  async createSale(@Body() data: saleItemDTO): Promise<saleItemEntity> {
    return this.createSaleservice.execute(data);
  }
}
