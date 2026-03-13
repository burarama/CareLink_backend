import { Test, TestingModule } from '@nestjs/testing';
import { MasterpatientService } from './masterpatient.service';

describe('MasterpatientService', () => {
  let service: MasterpatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterpatientService],
    }).compile();

    service = module.get<MasterpatientService>(MasterpatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
