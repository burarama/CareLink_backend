import { IsString, IsEnum, IsDate, IsOptional, IsNumber } from "class-validator";
import { EncounterStatus, EncounterType } from "generated/prisma/client";

export class CreateEncounterDto {
     // links
    @IsString()
    masterPatientId: string;
    @IsString()
    @IsOptional()
    sourceRecordId?: string;
    @IsString()
    facilityId: string;

  // source identifiers
  @IsString()
  @IsOptional()
  facilityEncounterId?: string;  // hospital's own visit ID
  @IsString()
  @IsOptional()
  fhirEncounterId?: string;

  // encounter details
  @IsEnum(EncounterType)
  type: EncounterType;    // OUTPATIENT | INPATIENT | EMERGENCY | VIRTUAL
  @IsEnum(EncounterStatus)
  status: EncounterStatus;  // PLANNED | IN_PROGRESS | FINISHED | CANCELLED
  @IsString()
  @IsOptional()
  class?: string;          // "AMB" | "IMP" | "EMER" (FHIR class codes)

  // timing
  @IsDate()
  startDate: Date;
  @IsDate()
  @IsOptional()
  endDate?: Date;
  @IsDate()
  @IsOptional()
  admissionDate?: Date;
  @IsDate()
  @IsOptional()
  dischargeDate?: Date;
  @IsNumber()
  @IsOptional()
  lengthOfStay?: number;      // days, calculated on discharge

  // clinical context
  @IsString()
  @IsOptional()
  chiefComplaint?: string;
  @IsString()
  @IsOptional()
  department?: string;   // "Emergency" | "Cardiology" | "Outpatient"
  @IsString()
  @IsOptional()
  ward?: string;
  @IsString()
  @IsOptional()
  attendingProvider?: string;   // doctor name
  @IsString()
  @IsOptional()
  referredFrom?: string;   // if referred from another facility
  @IsString()
  @IsOptional()
  referredTo?: string;   // if referred out

  // financial (optional — links to MediLink if connected)
  @IsString()
  @IsOptional()
  claimId?: string;   // MediLink claim ID if billing exists
  @IsString()
  @IsOptional()
  payerName?: string;
  @IsString()
  @IsOptional()
  paymentStatus?: string;

  // raw FHIR
  @IsString()
  @IsOptional()
  fhirResourceJson?: string;

  @IsDate()
  @IsOptional()
  createdAt?: Date;
  @IsDate()
  @IsOptional()
  updatedAt?: Date;
}
