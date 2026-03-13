import { Test, TestingModule } from '@nestjs/testing';
import { MergeLogController } from './merge-log.controller';
import { MergeLogService } from './merge-log.service';

describe('MergeLogController', () => {
  let controller: MergeLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MergeLogController],
      providers: [MergeLogService],
    }).compile();

    controller = module.get<MergeLogController>(MergeLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
