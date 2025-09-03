import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from 'src/domain/entities/book-entity';
import { FindOneBookService } from 'src/usecases/Book/find-one/find-one.book.service';

@ApiTags('Book')
@Controller('book')
export class FindOneBookController {
  constructor(private readonly findOneBookService: FindOneBookService) {}

  @ApiResponse({ description: 'Livro encontrado!', status: 200, type: Book })
  @ApiResponse({
    description: 'Livro não encontrado encontrado!',
    status: 401,
    type: Book,
  })
  @Get('/:bookId')
  async findOne(@Param('bookId') bookId: string): Promise<Book | any> {
    return await this.findOneBookService.execute(bookId);
  }
}
