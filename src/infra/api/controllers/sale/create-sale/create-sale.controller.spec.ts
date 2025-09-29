import { Test, TestingModule } from '@nestjs/testing';
import { CreateSaleController } from './create-sale.controller';

describe('CreateSaleController', () => {
  let controller: CreateSaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateSaleController],
    }).compile();

    controller = module.get<CreateSaleController>(CreateSaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
