import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from 'src/domain/entities/book-entity';
import { UpdateBookService } from 'src/usecases/Book/update-book/update-book.service';
import { updateBookDTO } from 'src/usecases/dtos/update-book-input';

@ApiTags('Book')
@Controller('book')
export class UpdateBookController {
  constructor(private readonly updateBookService: UpdateBookService) {}
  @ApiOperation({ description: 'Actualiza um livro!' })
  @ApiResponse({
    status: 200,
    description: 'Livro atualizado com sucesso!',
    type: Book,
  })
  @ApiResponse({
    status: 401,
    description: 'Livro não encontrado!',
    type: Book,
  })
  @Put(':bookId')
  async updateBook(
    @Body() data: updateBookDTO,
    @Param('bookId') bookId: string,
  ) {
    return await this.updateBookService.execute(bookId, data);
  }
}
