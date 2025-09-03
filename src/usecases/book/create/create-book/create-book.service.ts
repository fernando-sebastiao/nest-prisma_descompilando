import { ForbiddenException, Injectable } from '@nestjs/common';
import { IBookRepository } from 'src/domain/repository/IBookRepository';
import { BookDTO } from 'src/usecases/dtos/bookInputs';
import { messages } from 'src/util/error-messages';

@Injectable()
export class CreateBookService {
  constructor(private readonly repo: IBookRepository) {}
  async execute(data: BookDTO) {
    const existingBook = await this.repo.findExisting(
      data.title,
      data.bar_code,
    );
    if (existingBook) {
      throw new ForbiddenException(messages.bookAreadyExists);
    }
    return this.repo.create(data);
  }
}
