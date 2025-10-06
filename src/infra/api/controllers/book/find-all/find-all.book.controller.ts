import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from 'src/domain/entities/book-entity';
import { FindAllBookService } from 'src/usecases/book/find-all/find-all.book.service';

@ApiTags('Book')
@Controller('book')
export class FindAllBookController {
  constructor(private readonly repo: FindAllBookService) {}
  @ApiOperation({ summary: 'Lista de todos os livros' })
  @ApiResponse({
    description: 'Lista de todos os livros!',
    status: 200,
    type: Book,
  })
  @ApiResponse({
    status: 400,
    description:
      'Dados invalidos, certifique que esteja a enviar os dados necessários!',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro do servidor!',
  })
  @Get()
  async findallbook() {
    return await this.repo.execute();
  }
}
