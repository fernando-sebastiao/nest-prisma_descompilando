import { Injectable, NotFoundException } from '@nestjs/common';
import { IBookRepository } from 'src/domain/repository/IBookRepository';
import { updateBookDTO } from 'src/usecases/dtos/update-book-input';
import { messages } from 'src/util/error-messages';

@Injectable()
export class UpdateBookService {
  constructor(private readonly repo: IBookRepository) {}
  async execute(bookId: string, data: updateBookDTO) {
    const bookExisting = await this.repo.findById(bookId);
    if (!bookExisting) {
      throw new NotFoundException(messages.bookNotFound);
    }
    return this.repo.updateBook(bookId, data);
  }
}
