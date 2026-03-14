import { PartialType } from '@nestjs/mapped-types';
import { CreateFacilityPatientDto } from './create-facility-patient.dto';

export class UpdateFacilityPatientDto extends PartialType(CreateFacilityPatientDto) {}
