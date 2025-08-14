import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class BookDTO {
  @ApiProperty({ description: 'ID do livro', example: 'uuid', required: false })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiProperty({
    description: 'Título do livro',
    example: 'O Senhor dos Anéis',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Descrição do livro',
    example: 'Uma aventura épica.',
  })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Código de barras', example: '1234567890' })
  @IsString()
  bar_code: string;
}
