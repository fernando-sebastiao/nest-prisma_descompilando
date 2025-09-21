import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class updateBookDTO {
  @ApiProperty({
    example: 'Arquitetura Limpa',
    description: 'Título do livro',
  })
  @IsOptional()
  @IsString({ message: 'O título deve ser um texto' })
  title?: string;

  @ApiPropertyOptional({
    example: 'Um guia sobre boas práticas de arquitetura de software',
    description: 'Descrição detalhada do livro',
  })
  @IsOptional()
  @IsString({ message: 'A descrição deve ser um texto' })
  description?: string;

  @ApiProperty({
    example: 79.9,
    description: 'Preço do livro em moeda local',
  })
  @IsOptional()
  @IsNumber({}, { message: 'O preço deve ser um número' })
  price?: number;

  @ApiProperty({
    example: 10,
    description: 'Quantidade de livros disponíveis em estoque',
    default: 0,
  })
  @IsOptional()
  @IsInt({ message: 'O estoque deve ser um número inteiro' })
  @Min(0, { message: 'O estoque não pode ser negativo' })
  stock?: number;
}
