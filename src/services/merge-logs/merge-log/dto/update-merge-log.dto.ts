import { PartialType } from '@nestjs/mapped-types';
import { CreateMergeLogDto } from './create-merge-log.dto';

export class UpdateMergeLogDto extends PartialType(CreateMergeLogDto) {}
