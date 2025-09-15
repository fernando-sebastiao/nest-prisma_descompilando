import { Injectable } from '@nestjs/common';
import { IsaleItemRepositoy } from 'src/domain/repository/ISaleItemRepository';

@Injectable()
export class FindAllSaleService {
  constructor(private readonly repo: IsaleItemRepositoy) {}
  async execute() {
    return this.repo.findall();
  }
}
