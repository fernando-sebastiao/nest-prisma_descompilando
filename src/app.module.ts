import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './usecases/book/book.module';
import { CustomerModule } from './usecases/customer/customer.module';
import { saleModule } from './usecases/sale/sale.module';

@Module({
  imports: [BookModule, CustomerModule, saleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
