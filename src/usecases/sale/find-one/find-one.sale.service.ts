import { Injectable, NotFoundException } from '@nestjs/common';
import { IsaleItemRepositoy } from 'src/domain/repository/ISaleItemRepository';
import { messages } from 'src/util/error-messages';

@Injectable()
export class FindOneSaleService {
  constructor(private readonly repo: IsaleItemRepositoy) {}
  async execute(saleId: string) {
    const saleExisting = await this.repo.findOne(saleId);
    if (!saleExisting) throw new NotFoundException(messages.saleNotFound);
    return saleExisting;
  }
}
