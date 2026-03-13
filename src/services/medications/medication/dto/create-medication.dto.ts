import { IsString, IsDate, IsOptional, IsEnum, IsNumber, IsBoolean, IsObject } from "class-validator";
import { MedicationStatus } from "generated/prisma/client";

export class CreateMedicationDto {
  @IsString()
  masterPatientId: string;

  @IsString()
  @IsOptional()
  encounterId?: string;

  @IsString()
  @IsOptional()
  medicationCode?: string;

  @IsString()
  medicationName: string;

  @IsString()
  @IsOptional()
  brandName?: string;

  @IsString()
  @IsOptional()
  form?: string;

  @IsString()
  @IsOptional()
  strength?: string;

  @IsString()
  @IsOptional()
  dose?: string;

  @IsString()
  @IsOptional()
  frequency?: string;

  @IsString()
  @IsOptional()
  route?: string;

  @IsNumber()
  @IsOptional()
  durationDays?: number;

  @IsNumber()
  @IsOptional()
  quantity?: number;

  @IsDate()
  prescribedAt: Date;

  @IsDate()
  @IsOptional()
  startDate?: Date;

  @IsDate()
  @IsOptional()
  endDate?: Date;

  @IsDate()
  @IsOptional()
  dispensedAt?: Date;

  @IsEnum(MedicationStatus)
  status: MedicationStatus;

  @IsString()
  @IsOptional()
  stopReason?: string;

  @IsBoolean()
  @IsOptional()
  isChronicMed?: boolean;

  @IsBoolean()
  @IsOptional()
  hasInteractionFlag?: boolean;

  @IsString()
  @IsOptional()
  interactionNote?: string;

  @IsString()
  @IsOptional()
  facilityId?: string;

  @IsString()
  @IsOptional()
  prescribedBy?: string;

  @IsString()
  @IsOptional()
  dispensedBy?: string;

  @IsObject()
  @IsOptional()
  fhirResourceJson?: object;
}
