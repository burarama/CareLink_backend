import { Test, TestingModule } from '@nestjs/testing';
import { MasterpatientController } from './masterpatient.controller';
import { MasterpatientService } from './masterpatient.service';

describe('MasterpatientController', () => {
  let controller: MasterpatientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterpatientController],
      providers: [MasterpatientService],
    }).compile();

    controller = module.get<MasterpatientController>(MasterpatientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
