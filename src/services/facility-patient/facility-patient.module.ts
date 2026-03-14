import { Module } from '@nestjs/common';
import { FacilityPatientService } from './facility-patient.service';
import { FacilityPatientController } from './facility-patient.controller';

@Module({
  controllers: [FacilityPatientController],
  providers: [FacilityPatientService],
})
export class FacilityPatientModule {}
