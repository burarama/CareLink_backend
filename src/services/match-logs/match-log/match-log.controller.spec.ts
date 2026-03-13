import { Test, TestingModule } from '@nestjs/testing';
import { MatchLogController } from './match-log.controller';
import { MatchLogService } from './match-log.service';

describe('MatchLogController', () => {
  let controller: MatchLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchLogController],
      providers: [MatchLogService],
    }).compile();

    controller = module.get<MatchLogController>(MatchLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
