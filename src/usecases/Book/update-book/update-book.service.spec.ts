import { Test, TestingModule } from '@nestjs/testing';
import { UpdateBookService } from './update-book.service';

describe('UpdateBookService', () => {
  let service: UpdateBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateBookService],
    }).compile();

    service = module.get<UpdateBookService>(UpdateBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
