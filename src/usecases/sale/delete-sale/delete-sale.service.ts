import { Injectable } from '@nestjs/common';
import { IsaleItemRepositoy } from 'src/domain/repository/ISaleItemRepository';

@Injectable()
export class DeleteSaleService {
  constructor(private readonly repo: IsaleItemRepositoy) {}
  async execute(saleId: string) {
    return this.repo.delete(saleId);
  }
}
