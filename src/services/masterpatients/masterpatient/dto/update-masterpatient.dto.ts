import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterpatientDto } from './create-masterpatient.dto';

export class UpdateMasterpatientDto extends PartialType(CreateMasterpatientDto) {}
