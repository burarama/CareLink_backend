import { IsString, IsDate, IsOptional, IsEnum } from "class-validator";
import { DiagnosisType, DiagnosisStatus } from 'generated/prisma/client';

export class CreateDiagnosisDto {
    // links
    //   masterPatientId   String
    @IsString()
    masterPatientId: string;
    //   masterPatient     MasterPatient @relation(fields: [masterPatientId], references: [id])
    //   encounterId       String
    @IsString()
    encounterId: string;
    //   encounter         Encounter @relation(fields: [encounterId], references: [id])

    //   // ICD-10
    //   icdCode 
    //   String   // e.g. "J06.9"
    @IsString()
    icdCode: string;
    //   icdVersion        String   @default("ICD-10")
    @IsString()
    icdVersion: string;
    //   icdDescription    String   // "Acute upper respiratory infection, unspecified"
    @IsString()
    icdDescription: string;
    //   icdChapter        String?  // "Respiratory" — derived from code range
    @IsString()
    @IsOptional()
    icdChapter?: string;
    //   icdBlock          String?  // "J00-J06"
    @IsString()
    @IsOptional()
    icdBlock?: string;
    //   // clinical details
    //   diagnosisType     DiagnosisType // PRIMARY | SECONDARY | COMORBIDITY | DISCHARGE
    @IsEnum(DiagnosisType)
    diagnosisType: DiagnosisType;
    //   status            DiagnosisStatus // ACTIVE | RESOLVED | CHRONIC | RULED_OUT
    @IsEnum(DiagnosisStatus)
    status: DiagnosisStatus;
    //   severity          String?  // "Mild" | "Moderate" | "Severe"
    @IsString()
    @IsOptional()
    severity?: string;
    //   onsetDate         DateTime?
    @IsDate()
    @IsOptional()
    onsetDate?: Date;
    //   resolvedDate      DateTime?
    @IsDate()
    @IsOptional()
    resolvedDate?: Date;
    //   notes             String?
    @IsString()
    @IsOptional()
    notes?: string;
    //   // source
    //   diagnosedBy       String?
    @IsString()
    @IsOptional()
    diagnosedBy?: string;
    //   facilityId        String?
    @IsString()
    @IsOptional()
    facilityId?: string;
    //   fhirResourceJson  Json?
    @IsString()
    @IsOptional()
    fhirResourceJson?: string;

}
