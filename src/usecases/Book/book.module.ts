import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaBookRepository } from 'src/database/repository/prisma-book-repository';
import { IBookRepository } from 'src/domain/repository/IBookRepository';
import { CreateBookController } from 'src/infra/api/restApi/controllers/Book/create/create-book/create-book.controller';
import { FindOneBookController } from 'src/infra/api/restApi/controllers/Book/find-one/find-one.book.controller';
import { UpdateBookController } from 'src/infra/api/restApi/controllers/Book/update-book/update-book.controller';
import { CreateBookService } from './create/create-book/create-book.service';
import { FindOneBookService } from './find-one/find-one.book.service';
import { UpdateBookService } from './update-book/update-book.service';

@Module({
  providers: [
    PrismaService,
    CreateBookService,
    { provide: IBookRepository, useClass: PrismaBookRepository },
    UpdateBookService,
    FindOneBookService,
  ],

  controllers: [
    CreateBookController,
    UpdateBookController,
    FindOneBookController,
  ],
})
export class BookModule {}
