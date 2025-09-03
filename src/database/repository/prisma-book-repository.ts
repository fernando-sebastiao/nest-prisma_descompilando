import { Injectable } from '@nestjs/common';
import { Book } from 'src/domain/entities/book-entity';
import { IBookRepository } from 'src/domain/repository/IBookRepository';
import { BookDTO } from 'src/usecases/dtos/bookInputs';
import { PrismaService } from '../prisma.service';

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
}
