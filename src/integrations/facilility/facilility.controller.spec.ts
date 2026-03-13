import { Test, TestingModule } from '@nestjs/testing';
import { FacililityController } from './facilility.controller';
import { FacililityService } from './facilility.service';

describe('FacililityController', () => {
  let controller: FacililityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacililityController],
      providers: [FacililityService],
    }).compile();

    controller = module.get<FacililityController>(FacililityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
