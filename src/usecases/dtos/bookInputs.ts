import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString, Min } from 'class-validator';

export class BookDTO {
  @ApiProperty({
    example: 'Arquitetura Limpa',
    description: 'Título do livro',
  })
  @IsString({ message: 'O título deve ser um texto' })
  title: string;

  @ApiProperty({
    example: 'Um guia sobre boas práticas de arquitetura de software',
    description: 'Descrição detalhada do livro',
  })
  @IsString({ message: 'A descrição deve ser um texto' })
  description: string;

  @ApiProperty({
    example: '1234567890123',
    description: 'Código de barras único do livro',
  })
  @IsString({ message: 'O código de barras deve ser um texto' })
  bar_code: string;

  @ApiProperty({
    example: 79.9,
    description: 'Preço do livro em moeda local',
  })
  @IsNumber({}, { message: 'O preço deve ser um número' })
  price: number;

  @ApiProperty({
    example: 10,
    description: 'Quantidade de livros disponíveis em estoque',
    default: 0,
  })
  @IsInt({ message: 'O estoque deve ser um número inteiro' })
  @Min(0, { message: 'O estoque não pode ser negativo' })
  stock: number;
}
