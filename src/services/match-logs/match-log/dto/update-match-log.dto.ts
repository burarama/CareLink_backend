import { PartialType } from '@nestjs/mapped-types';
import { CreateMatchLogDto } from './create-match-log.dto';

export class UpdateMatchLogDto extends PartialType(CreateMatchLogDto) {}
