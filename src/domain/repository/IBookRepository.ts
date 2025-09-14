import { BookDTO } from 'src/usecases/dtos/bookInputs';
import { updateBookDTO } from 'src/usecases/dtos/update-book-input';
import { Book } from '../entities/book-entity';

export abstract class IBookRepository {
  abstract create(book: BookDTO): Promise<Book>;
  abstract findExisting(title: string, bar_code: string): Promise<Book>;
  abstract updateBook(bookId: string, data: updateBookDTO): Promise<Book>;
  abstract findById(bookId: string): Promise<Book | any>;
  abstract findall(): Promise<Book[] | any>;
  abstract deleteBook(id: string): Promise<Book>;
}
