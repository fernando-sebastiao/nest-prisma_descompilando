import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Book } from 'src/domain/entities/book-entity';
import { CreateBookService } from 'src/usecases/Book/create/create-book/create-book.service';
import { BookDTO } from 'src/usecases/dtos/bookInputs';

@ApiTags('Book')
@Controller('create-book')
export class CreateBookController {
  constructor(private readonly repo: CreateBookService) {}

  @ApiOperation({ summary: 'Cria um novo Book' })
  @ApiResponse({ status: 201, description: 'Book criado com sucesso' })
  @ApiResponse({
    status: 400,
    description:
      'Dados invalidos, certifique que esteja a enviar os dados necessários!',
  })
  @Post()
  async createBook(@Body() BookDTO: BookDTO): Promise<Book> {
    return await this.repo.execute(BookDTO);
  }
}
