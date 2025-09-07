import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from 'src/domain/entities/book-entity';
import { DeleteBookService } from 'src/usecases/book/delete-book/delete-book.service';

@ApiTags('Book')
@Controller('book')
export class DeleteBookController {
  constructor(private readonly deleteBookService: DeleteBookService) {}
  @ApiOperation({ summary: 'Eliminar um book' })
  @ApiResponse({ description: 'Book eliminado!', type: Book })
  @ApiResponse({ description: 'Book não encontrado!', status: 401 })
  @ApiResponse({ description: 'Erro interno do servidor!', status: 500 })
  @Delete('/:bookId')
  async DeleteBook(@Param('bookId') bookId: string) {
    return await this.deleteBookService.execute(bookId);
  }
}
