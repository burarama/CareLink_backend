import { Test, TestingModule } from '@nestjs/testing';
import { FacililityService } from './facilility.service';

describe('FacililityService', () => {
  let service: FacililityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacililityService],
    }).compile();

    service = module.get<FacililityService>(FacililityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
