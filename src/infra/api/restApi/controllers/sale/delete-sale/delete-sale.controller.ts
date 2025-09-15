import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { saleItemEntity } from 'src/domain/entities/sale-entity';
import { DeleteSaleService } from 'src/usecases/sale/delete-sale/delete-sale.service';

@ApiTags('Sale')
@Controller('sale')
export class DeleteSaleController {
  constructor(private readonly deletesaleService: DeleteSaleService) {}
  @ApiOperation({ summary: 'Apagar uma venda!' })
  @ApiResponse({
    description: 'Venda deletada com sucesso',
    status: 200,
    type: saleItemEntity,
  })
  @Delete(':saleId')
  async deleteSale(@Param('saleId') saleId: string): Promise<saleItemEntity> {
    return await this.deletesaleService.execute(saleId);
  }
}
