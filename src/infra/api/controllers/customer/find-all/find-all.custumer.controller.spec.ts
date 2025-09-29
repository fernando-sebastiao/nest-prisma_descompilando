import { Test, TestingModule } from '@nestjs/testing';
import { FindAllCustumerController } from './find-all.custumer.controller';

describe('FindAllCustumerController', () => {
  let controller: FindAllCustumerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllCustumerController],
    }).compile();

    controller = module.get<FindAllCustumerController>(FindAllCustumerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
