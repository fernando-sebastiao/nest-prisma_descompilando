import { Test, TestingModule } from '@nestjs/testing';
import { FindAllSaleController } from './find-all.sale.controller';

describe('FindAllSaleController', () => {
  let controller: FindAllSaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllSaleController],
    }).compile();

    controller = module.get<FindAllSaleController>(FindAllSaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
