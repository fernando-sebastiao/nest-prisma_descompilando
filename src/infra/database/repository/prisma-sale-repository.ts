import { Injectable } from '@nestjs/common';
import { saleItemEntity } from 'src/domain/entities/sale-entity';
import { IsaleItemRepositoy } from 'src/domain/repository/ISaleItemRepository';
import { saleItemDTO } from 'src/usecases/dtos/saleItemInputs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PrismaSaleItemRepository implements IsaleItemRepositoy {
  constructor(private prisma: PrismaService) {}
  async create(data: saleItemDTO): Promise<saleItemEntity> {
    return await this.prisma.saleItem.create({ data: data });
  }
  async findOne(saleId: string): Promise<saleItemEntity | null> {
    return await this.prisma.saleItem.findUnique({ where: { id: saleId } });
  }
  findall(): Promise<saleItemEntity[] | null> {
    return this.prisma.saleItem.findMany({
      include: {
        customer: {
          select: {
            name: true,
            email: true,
            phone: true,
          },
        },
        book: {
          select: {
            price: true,
            title: true,
          },
        },
      },
    });
  }
  delete(saleId: string): Promise<saleItemEntity> {
    return this.prisma.saleItem.delete({ where: { id: saleId } });
  }
}
