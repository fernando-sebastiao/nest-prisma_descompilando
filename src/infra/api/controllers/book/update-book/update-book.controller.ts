import { Body, Controller, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from 'src/domain/entities/book-entity';
import { UpdateBookService } from 'src/usecases/book/update-book/update-book.service';
import { updateBookDTO } from 'src/usecases/dtos/update-book-input';

@ApiTags('Book')
@Controller('book')
export class UpdateBookController {
  constructor(private readonly updateBookService: UpdateBookService) {}
  @ApiOperation({ summary: 'Actualiza um livro' })
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
  @ApiResponse({
    status: 400,
    description:
      'Dados invalidos, certifique que esteja a enviar os dados necessários!',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro no servidor!',
  })
  @Put(':bookId')
  async updateBook(
    @Body() data: updateBookDTO,
    @Param('bookId') bookId: string,
  ) {
    return await this.updateBookService.execute(bookId, data);
  }
}
