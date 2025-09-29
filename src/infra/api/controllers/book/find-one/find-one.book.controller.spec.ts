import { Test, TestingModule } from '@nestjs/testing';
import { FindOneBookController } from './find-one.book.controller';

describe('FindOneBookController', () => {
  let controller: FindOneBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOneBookController],
    }).compile();

    controller = module.get<FindOneBookController>(FindOneBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
