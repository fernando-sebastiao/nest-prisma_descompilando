import { Test, TestingModule } from '@nestjs/testing';
import { FindAllBookController } from './find-all.book.controller';

describe('FindAllBookController', () => {
  let controller: FindAllBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllBookController],
    }).compile();

    controller = module.get<FindAllBookController>(FindAllBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
