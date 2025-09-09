import { Module } from '@nestjs/common';
import { IBookRepository } from 'src/domain/repository/IBookRepository';
import { CreateBookController } from 'src/infra/api/restApi/controllers/book/create-book/create-book.controller';
import { DeleteBookController } from 'src/infra/api/restApi/controllers/book/delete-post/delete-book.controller';
import { FindAllBookController } from 'src/infra/api/restApi/controllers/book/find-all/find-all.book.controller';
import { FindOneBookController } from 'src/infra/api/restApi/controllers/book/find-one/find-one.book.controller';
import { UpdateBookController } from 'src/infra/api/restApi/controllers/book/update-book/update-book.controller';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { PrismaBookRepository } from 'src/infra/database/repository/prisma-book-repository';
import { CreateBookService } from './create/create-book/create-book.service';
import { DeleteBookService } from './delete-book/delete-book.service';
import { FindAllBookService } from './find-all/find-all.book.service';
import { FindOneBookService } from './find-one/find-one.book.service';
import { UpdateBookService } from './update-book/update-book.service';

@Module({
  providers: [
    PrismaService,
    CreateBookService,
    { provide: IBookRepository, useClass: PrismaBookRepository },
    UpdateBookService,
    FindOneBookService,
    FindAllBookService,
    DeleteBookService,
  ],

  controllers: [
    CreateBookController,
    UpdateBookController,
    FindOneBookController,
    FindAllBookController,
    DeleteBookController,
  ],
})
export class BookModule {}
