import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { saleItemEntity } from 'src/domain/entities/sale-entity';
import { FindAllSaleService } from 'src/usecases/sale/find-all/find-all.sale.service';

@ApiTags('Sale')
@Controller('sale')
export class FindAllSaleController {
  constructor(private readonly findallSaleservice: FindAllSaleService) {}
  @ApiOperation({ summary: 'Listar todas vendas!' })
  @ApiResponse({
    description: 'Todas as vendas',
    status: 200,
    type: saleItemEntity,
  })
  @ApiResponse({
    description: 'Erro interno do servidor!',
    status: 500,
  })
  @Get()
  async findAllSale(): Promise<saleItemEntity[] | null> {
    return this.findallSaleservice.execute();
  }
}
