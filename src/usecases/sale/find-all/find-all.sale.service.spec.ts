import { Test, TestingModule } from '@nestjs/testing';
import { FindAllSaleService } from './find-all.sale.service';

describe('FindAllSaleService', () => {
  let service: FindAllSaleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllSaleService],
    }).compile();

    service = module.get<FindAllSaleService>(FindAllSaleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
