import { PartialType } from '@nestjs/mapped-types';
import { CreateSyncLogDto } from './create-sync-log.dto';

export class UpdateSyncLogDto extends PartialType(CreateSyncLogDto) {}
