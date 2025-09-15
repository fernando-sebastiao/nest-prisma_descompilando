import { Test, TestingModule } from '@nestjs/testing';
import { DeleteSaleController } from './delete-sale.controller';

describe('DeleteSaleController', () => {
  let controller: DeleteSaleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteSaleController],
    }).compile();

    controller = module.get<DeleteSaleController>(DeleteSaleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
