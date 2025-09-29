import { Test, TestingModule } from '@nestjs/testing';
import { UpdateBookController } from './update-book.controller';

describe('UpdateBookController', () => {
  let controller: UpdateBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateBookController],
    }).compile();

    controller = module.get<UpdateBookController>(UpdateBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
