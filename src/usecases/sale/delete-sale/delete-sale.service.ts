import { Injectable, NotFoundException } from '@nestjs/common';
import { IsaleItemRepositoy } from 'src/domain/repository/ISaleItemRepository';
import { messages } from 'src/util/error-messages';

@Injectable()
export class DeleteSaleService {
  constructor(private readonly repo: IsaleItemRepositoy) {}
  async execute(saleId: string) {
    const ifSaleExists = await this.repo.findOne(saleId);

    if (!ifSaleExists) throw new NotFoundException(messages.saleNotFound);

    return this.repo.delete(saleId);
  }
}
