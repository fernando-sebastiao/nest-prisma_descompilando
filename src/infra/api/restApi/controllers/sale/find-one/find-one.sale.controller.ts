import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from 'src/domain/entities/book-entity';
import { FindOneSaleService } from 'src/usecases/sale/find-one/find-one.sale.service';

@ApiTags('Sale')
@Controller('sale')
export class FindOneSaleController {
  constructor(private readonly findOneSaleService: FindOneSaleService) {}
  @ApiOperation({ summary: 'Procurar venda pelo Id' })
  @ApiResponse({
    description: 'Venda encontrada!',
    status: 200,
    type: Book,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro do servidor!',
  })
  @Get(':saleId')
  async findOneSale(@Param('saleId') saleId: string) {
    return await this.findOneSaleService.execute(saleId);
  }
}
