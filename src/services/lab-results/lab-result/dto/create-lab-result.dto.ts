import { IsString, IsDate, IsOptional, IsEnum, IsNumber, IsBoolean, IsObject } from "class-validator";
import { LabCategory, LabResultStatus } from "generated/prisma/client";

export class CreateLabResultDto {
     // links
//   masterPatientId   String
@IsString()
    masterPatientId: string;
//   masterPatient     MasterPatient @relation(fields: [masterPatientId], references: [id])
//   encounterId       String?
@IsString()
@IsOptional()
    encounterId?: string;
//   encounter         Encounter? @relation(fields: [encounterId], references: [id])

//   // test details
//   testCode          String   // LOINC code e.g. "2085-9"
@IsString()
    testCode: string;
//   testName          String   // "HDL Cholesterol"
@IsString()
    testName: string;
//   testCategory      LabCategory // HEMATOLOGY | BIOCHEMISTRY | MICROBIOLOGY | IMAGING | OTHER
@IsEnum(LabCategory)
    testCategory: LabCategory;

//   // result
//   resultValue       String?  // stored as string to handle numeric + text results
@IsString()
@IsOptional()
    resultValue?: string;
//   resultNumeric     Float?   // if numeric — for trending
@IsNumber()
@IsOptional()
    resultNumeric?: number;
//   resultUnit        String?  // "mg/dL" | "mmol/L"
@IsString()
@IsOptional()
    resultUnit?: string;
//   resultStatus      LabResultStatus // FINAL | PRELIMINARY | CORRECTED | CANCELLED
@IsEnum(LabResultStatus)
    resultStatus: LabResultStatus;
//   interpretation    String?  // "Normal" | "High" | "Low" | "Critical"
@IsString()
@IsOptional()
    interpretation?: string;
//   isAbnormal        Boolean  @default(false)
@IsBoolean()
@IsOptional()
    isAbnormal?: boolean;
//   isCritical        Boolean  @default(false)
@IsBoolean()
@IsOptional()
    isCritical?: boolean;
//   // reference range
//   referenceRangeLow  Float?
@IsNumber()
@IsOptional()
    referenceRangeLow?: number;
//   referenceRangeHigh Float?
@IsNumber()
@IsOptional()
    referenceRangeHigh?: number;
//   referenceRangeText String?
@IsString()
@IsOptional()
    referenceRangeText?: string;
//   // timing
//   orderedAt         DateTime?
@IsDate()
@IsOptional()
    orderedAt?: Date;
//   collectedAt       DateTime?
@IsDate()
@IsOptional()
    collectedAt?: Date;
//   resultAt          DateTime
@IsDate()
    resultAt: Date;
//   reportedAt        DateTime?
@IsDate()
@IsOptional()
    reportedAt?: Date;
//   // source
//   facilityId        String?
@IsString()
@IsOptional()
    facilityId?: string;
//   orderedBy         String?
@IsString()
@IsOptional()
    orderedBy?: string;
//   performedBy       String?
@IsString()
@IsOptional()
    performedBy?: string;
//   labName           String?
@IsString()
@IsOptional()
    labName?: string;
//   fhirResourceJson  Json?
@IsObject()
@IsOptional()
    fhirResourceJson?: object;

//   createdAt         DateTime @default(now())

}
