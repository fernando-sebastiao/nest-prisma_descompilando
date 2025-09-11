import { Test, TestingModule } from '@nestjs/testing';
import { FindOneCustomerService } from './find-one.customer.service';

describe('FindOneCustomerService', () => {
  let service: FindOneCustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneCustomerService],
    }).compile();

    service = module.get<FindOneCustomerService>(FindOneCustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
