import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './module/book/book.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [BookModule],
})
export class AppModule {}
