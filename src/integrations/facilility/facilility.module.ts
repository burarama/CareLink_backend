import { Module } from '@nestjs/common';
import { FacililityService } from './facilility.service';
import { FacililityController } from './facilility.controller';

@Module({
  controllers: [FacililityController],
  providers: [FacililityService],
})
export class FacililityModule {}
