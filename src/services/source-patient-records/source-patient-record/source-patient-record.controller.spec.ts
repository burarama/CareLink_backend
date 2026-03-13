import { Test, TestingModule } from '@nestjs/testing';
import { SourcePatientRecordController } from './source-patient-record.controller';
import { SourcePatientRecordService } from './source-patient-record.service';

describe('SourcePatientRecordController', () => {
  let controller: SourcePatientRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SourcePatientRecordController],
      providers: [SourcePatientRecordService],
    }).compile();

    controller = module.get<SourcePatientRecordController>(SourcePatientRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
