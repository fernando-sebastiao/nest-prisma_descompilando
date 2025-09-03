import { BookDTO } from 'src/usecases/dtos/bookInputs';
import { Book } from '../entities/book-entity';

export abstract class IBookRepository {
  abstract create(book: BookDTO): Promise<Book>;
  abstract findExisting(title: string, bar_code: string): Promise<Book>;
}
