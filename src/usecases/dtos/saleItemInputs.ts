import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber } from 'class-validator';

export class saleItemDTO {
  @ApiProperty({
    description: 'Digite o id do livro',
    example: '62d1c0a9-3d14-48a9-ace7-410adc9e6cfe',
    required: true,
  })
  bookId: string;

  @ApiProperty({
    description: 'Digite o id do cliente',
    example: '0ca7080d-ab06-4629-80d3-dd93b82799d1',
    required: true,
  })
  customerId: string;

  @ApiProperty({
    description: 'Digite a quantidade necessária',
    example: 12,
    required: true,
  })
  @IsInt()
  quantity: number;

  @ApiProperty({
    description: 'Digite o preço',
    example: 1500,
    required: true,
  })
  @IsNumber()
  price: number;
}
