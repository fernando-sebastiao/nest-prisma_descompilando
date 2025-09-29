import { Test, TestingModule } from '@nestjs/testing';
import { FindOneCustomerController } from './find-one.customer.controller';

describe('FindOneCustomerController', () => {
  let controller: FindOneCustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOneCustomerController],
    }).compile();

    controller = module.get<FindOneCustomerController>(FindOneCustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
