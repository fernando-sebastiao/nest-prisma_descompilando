import { Test, TestingModule } from '@nestjs/testing';
import { DeleteBookController } from './delete-book.controller';

describe('DeleteBookController', () => {
  let controller: DeleteBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteBookController],
    }).compile();

    controller = module.get<DeleteBookController>(DeleteBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
