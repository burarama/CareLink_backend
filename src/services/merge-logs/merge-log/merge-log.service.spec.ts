import { Test, TestingModule } from '@nestjs/testing';
import { MergeLogService } from './merge-log.service';

describe('MergeLogService', () => {
  let service: MergeLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MergeLogService],
    }).compile();

    service = module.get<MergeLogService>(MergeLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
