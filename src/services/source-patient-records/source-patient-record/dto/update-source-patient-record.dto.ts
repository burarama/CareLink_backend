import { PartialType } from '@nestjs/mapped-types';
import { CreateSourcePatientRecordDto } from './create-source-patient-record.dto';

export class UpdateSourcePatientRecordDto extends PartialType(CreateSourcePatientRecordDto) {}
