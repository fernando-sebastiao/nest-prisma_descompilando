import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaBookRepository } from 'src/database/repository/prisma-book-repository';
import { IBookRepository } from 'src/domain/repository/IBookRepository';
import { CreateBookController } from 'src/infra/api/restApi/controllers/Book/create/create-book/create-book.controller';
import { CreateBookService } from './create/create-book/create-book.service';

@Module({
  providers: [
    PrismaService,
    CreateBookService,
    { provide: IBookRepository, useClass: PrismaBookRepository },
  ],

  controllers: [CreateBookController],
})
export class BookModule {}
