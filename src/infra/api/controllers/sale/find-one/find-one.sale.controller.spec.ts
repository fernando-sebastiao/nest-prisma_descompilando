import { Test, TestingModule } from '@nestjs/testing';
import { FindOneSaleController } from './find-one.sale.controller';

describe('FindOneSaleController', () => {
  let controller: FindOneSaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOneSaleController],
    }).compile();

    controller = module.get<FindOneSaleController>(FindOneSaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
