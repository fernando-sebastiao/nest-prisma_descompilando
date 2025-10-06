import { Injectable, NotFoundException } from '@nestjs/common';
import { IBookRepository } from 'src/domain/repository/IBookRepository';
import { messages } from 'src/util/error-messages';

@Injectable()
export class DeleteBookService {
  constructor(private readonly repo: IBookRepository) {}
  async execute(bookId: string) {
    const findExisting = await this.repo.findById(bookId);
    if (!findExisting) throw new NotFoundException(messages.bookNotFound);
    return this.repo.deleteBook(bookId);
  }
}
