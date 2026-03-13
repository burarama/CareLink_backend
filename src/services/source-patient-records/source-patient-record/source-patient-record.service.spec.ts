import { Test, TestingModule } from '@nestjs/testing';
import { SourcePatientRecordService } from './source-patient-record.service';

describe('SourcePatientRecordService', () => {
  let service: SourcePatientRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SourcePatientRecordService],
    }).compile();

    service = module.get<SourcePatientRecordService>(SourcePatientRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
