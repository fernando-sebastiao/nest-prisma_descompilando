import { Test, TestingModule } from '@nestjs/testing';
import { FindAllBookService } from './find-all.book.service';

describe('FindAllBookService', () => {
  let service: FindAllBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllBookService],
    }).compile();

    service = module.get<FindAllBookService>(FindAllBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
