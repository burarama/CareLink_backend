import { IsString, IsEnum, IsDate, IsOptional, IsNumber } from "class-validator";
import { EncounterStatus, EncounterType } from '@prisma/client';
import { Type } from "class-transformer";

export class CreateEncounterDto {
  @IsString()
  masterPatientId: string;

  @IsString()
  facilityPatientId: string;

  @IsString()
  facilityId: string;

  @IsDate()
  @Type(() => Date)
  encounterDate: Date;
}
