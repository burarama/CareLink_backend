import { IsString, IsEnum, IsDate, IsOptional, IsBoolean, IsNumber } from "class-validator";
import { MatchStatus } from "generated/prisma/client";

export class CreateSourcePatientRecordDto {
//    masterPatientId   String?  // null if not yet matched
    @IsString()
    @IsOptional()
    masterPatientId?: string;
//   matchStatus       MatchStatus @default(PENDING)
    @IsEnum(MatchStatus)
    @IsOptional()
    matchStatus?: MatchStatus;
//   matchConfidence   Float?   // 0.0 - 1.0
    @IsNumber()
    @IsOptional()
    matchConfidence?: number;
//   matchedAt         DateTime?
    @IsDate()
    @IsOptional()
    matchedAt?: Date;
//   matchedBy         String?  // "SYSTEM_AUTO" or userId
    @IsString()
    @IsOptional()
    matchedBy?: string;

//   // source facility
//   facilityId        String
    @IsString()
    facilityId: string;
//   facility          Facility @relation(fields: [facilityId], references: [id])

//   // original IDs from the hospital system
//   facilityPatientId String   // hospital's own patient ID
    @IsString()
    facilityPatientId: string;
//   facilityMrn       String?  // medical record number
    @IsString()
    @IsOptional()
    facilityMrn?: string;

//   // raw demographics as received from HMIS
//   rawFullName       String
    @IsString()
    rawFullName: string;
//   rawDateOfBirth    DateTime?
    @IsDate()
    @IsOptional()
    rawDateOfBirth?: Date;
//   rawGender         String?
    @IsString()
    @IsOptional()
    rawGender?: string;
//   rawNationalId     String?
    @IsString()
    @IsOptional()
    rawNationalId?: string;
//   rawPhoneNumber    String?
    @IsString()
    @IsOptional()
    rawPhoneNumber?: string;
//   rawCounty         String?
    @IsString()
    @IsOptional()
    rawCounty?: string;

//   // source metadata
//   fhirResourceId    String?  // FHIR Patient resource ID
    @IsString()
    @IsOptional()
    fhirResourceId?: string;
//   fhirResourceJson  Json?    // full FHIR resource stored as-is
    @IsString()
    @IsOptional()
    fhirResourceJson?: string;
//   sourceSyncAt      DateTime @default(now())
    @IsDate()
    @IsOptional()
    sourceSyncAt?: Date;
//   sourceCreatedAt   DateTime? // when hospital created this record
    @IsDate()
    @IsOptional()
    sourceCreatedAt?: Date;

//   createdAt         DateTime @default(now())
}
