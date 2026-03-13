import { Test, TestingModule } from '@nestjs/testing';
import { MatchLogService } from './match-log.service';

describe('MatchLogService', () => {
  let service: MatchLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatchLogService],
    }).compile();

    service = module.get<MatchLogService>(MatchLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
