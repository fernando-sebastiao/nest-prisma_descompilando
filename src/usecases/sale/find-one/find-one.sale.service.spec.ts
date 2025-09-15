import { Test, TestingModule } from '@nestjs/testing';
import { FindOneSaleService } from './find-one.sale.service';

describe('FindOneSaleService', () => {
  let service: FindOneSaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneSaleService],
    }).compile();

    service = module.get<FindOneSaleService>(FindOneSaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
