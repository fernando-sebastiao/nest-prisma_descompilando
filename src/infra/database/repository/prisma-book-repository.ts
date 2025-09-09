import { Injectable } from '@nestjs/common';
import { Book } from 'src/domain/entities/book-entity';
import { IBookRepository } from 'src/domain/repository/IBookRepository';
import { BookDTO } from 'src/usecases/dtos/bookInputs';
import { updateBookDTO } from 'src/usecases/dtos/update-book-input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrismaBookRepository implements IBookRepository {
  constructor(private prisma: PrismaService) {}
  async create(book: BookDTO): Promise<Book> {
    const result = await this.prisma.book.create({
      data: book,
    });
    return result;
  }

  async findExisting(title: string, bar_code: string): Promise<any> {
    return await this.prisma.book.findFirst({
      where: {
        OR: [{ title }, { bar_code }],
      },
    });
  }
  async updateBook(bookId: string, data: updateBookDTO): Promise<Book> {
    return await this.prisma.book.update({ where: { id: bookId }, data: data });
  }
  async findById(bookId: string): Promise<Book> {
    const result = await this.prisma.book.findUnique({
      where: { id: bookId },
      select: {
        id: true,
        bar_code: true,
        price: true,
        description: true,
        createdAt: true,
        updatedAt: true,
        stock: true,
        title: true,
      },
    });

    if (!result) {
      throw new Error(`Livro com o id ${bookId} não encontrado`);
    }

    return result;
  }
  async findall(): Promise<Book[] | any> {
    return this.prisma.book.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        price: true,
        stock: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
  async deleteBook(id: string): Promise<Book> {
    return await this.prisma.book.delete({ where: { id } });
  }
}
