import { IsString, IsDate, IsEnum, IsOptional } from "class-validator";
import { BloodType, Gender, MasterPatientStatus } from '@prisma/client';
import { Type } from "class-transformer";

export class CreateMasterpatientDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsDate()
  @IsOptional()
  @Type(() => Date)
  dob?: Date;

  @IsString()
  @IsOptional()
  gender?: string;
}
