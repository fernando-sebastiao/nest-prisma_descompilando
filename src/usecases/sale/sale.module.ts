import { Module } from '@nestjs/common';
import { IBookRepository } from 'src/domain/repository/IBookRepository';
import { ICustomerRepository } from 'src/domain/repository/ICustomerRepository';
import { IsaleItemRepositoy } from 'src/domain/repository/ISaleItemRepository';
import { CreateSaleController } from 'src/infra/api/restApi/controllers/sale/create-sale/create-sale.controller';
import { FindAllSaleController } from 'src/infra/api/restApi/controllers/sale/find-all/find-all.sale.controller';
import { FindOneSaleController } from 'src/infra/api/restApi/controllers/sale/find-one/find-one.sale.controller';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { PrismaBookRepository } from 'src/infra/database/repository/prisma-book-repository';
import { PrismaCustomerRepository } from 'src/infra/database/repository/prisma-customer-repository';
import { PrismaSaleItemRepository } from 'src/infra/database/repository/prisma-sale-repository';
import { CreateSaleService } from './create-sale/create-sale.service';
import { FindAllSaleService } from './find-all/find-all.sale.service';
import { FindOneSaleService } from './find-one/find-one.sale.service';

@Module({
  providers: [
    PrismaService,
    CreateSaleService,
    { provide: IsaleItemRepositoy, useClass: PrismaSaleItemRepository },
    { provide: ICustomerRepository, useClass: PrismaCustomerRepository },
    { provide: IBookRepository, useClass: PrismaBookRepository },
    FindOneSaleService,
    FindAllSaleService,
  ],
  controllers: [
    CreateSaleController,
    FindOneSaleController,
    FindAllSaleController,
  ],
})
export class saleModule {}
