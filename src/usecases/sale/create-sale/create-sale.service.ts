import { Injectable, NotFoundException } from '@nestjs/common';
import { IBookRepository } from 'src/domain/repository/IBookRepository';
import { ICustomerRepository } from 'src/domain/repository/ICustomerRepository';
import { IsaleItemRepositoy } from 'src/domain/repository/ISaleItemRepository';
import { saleItemDTO } from 'src/usecases/dtos/saleItemInputs';
import { messages } from 'src/util/error-messages';

@Injectable()
export class CreateSaleService {
  constructor(
    private readonly repo: IsaleItemRepositoy,
    private bookRepo: IBookRepository,
    private customerRepo: ICustomerRepository,
  ) {}
  async execute(data: saleItemDTO) {
    const BookExists = await this.bookRepo.findById(data.bookId);
    if (!BookExists) throw new NotFoundException(messages.bookNotFound);

    const CustomerExists = await this.customerRepo.findById(data.customerId);
    if (!CustomerExists) throw new NotFoundException(messages.customerNotFound);

    return this.repo.create(data);
  }
}
