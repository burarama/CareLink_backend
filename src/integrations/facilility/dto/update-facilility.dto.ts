import { PartialType } from '@nestjs/mapped-types';
import { CreateFacililityDto } from './create-facilility.dto';

export class UpdateFacililityDto extends PartialType(CreateFacililityDto) {}
