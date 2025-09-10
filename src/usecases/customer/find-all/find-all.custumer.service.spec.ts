import { Test, TestingModule } from '@nestjs/testing';
import { FindAllCustumerService } from './find-all.custumer.service';

describe('FindAllCustumerService', () => {
  let service: FindAllCustumerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllCustumerService],
    }).compile();

    service = module.get<FindAllCustumerService>(FindAllCustumerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
