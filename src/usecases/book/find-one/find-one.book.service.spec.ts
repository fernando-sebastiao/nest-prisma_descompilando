import { Test, TestingModule } from '@nestjs/testing';
import { FindOneBookService } from './find-one.book.service';

describe('FindOneBookService', () => {
  let service: FindOneBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneBookService],
    }).compile();

    service = module.get<FindOneBookService>(FindOneBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
