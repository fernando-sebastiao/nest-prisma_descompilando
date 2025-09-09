import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { userRole } from 'generated/prisma';

export class CustomerDTO {
  @ApiProperty({
    description: 'Escreva o seu nome',
    example: 'Fernando Sebastião',
  })
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: '929516315' })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: 'Conta gmail',
    example: 'fernandosebastiao888@gmail.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Defina que tipo de usuário serás!',
    enum: userRole,
    examples: ['CLIENT', 'PROFISSIONAL', 'ADMIN'],
  })
  @IsEnum(userRole)
  role: userRole;
}
