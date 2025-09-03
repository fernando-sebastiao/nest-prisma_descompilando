import { Injectable, NotFoundException } from '@nestjs/common';
import { IBookRepository } from 'src/domain/repository/IBookRepository';
import { messages } from 'src/util/error-messages';

@Injectable()
export class FindOneBookService {
  constructor(private readonly repo: IBookRepository) {}
  async execute(bookId: string) {
    const existingBook = await this.repo.findById(bookId);
    if (!existingBook) {
      throw new NotFoundException(messages.bookNotFound);
    }
    return this.repo.findById(bookId);
  }
}
