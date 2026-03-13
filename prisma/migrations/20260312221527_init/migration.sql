-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "BloodType" AS ENUM ('A_POSITIVE', 'A_NEGATIVE', 'B_POSITIVE', 'B_NEGATIVE', 'AB_POSITIVE', 'AB_NEGATIVE', 'O_POSITIVE', 'O_NEGATIVE', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "MasterPatientStatus" AS ENUM ('ACTIVE', 'DECEASED', 'MERGED', 'DUPLICATE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "MatchStatus" AS ENUM ('PENDING', 'AUTO_MATCHED', 'MANUAL_MATCHED', 'NO_MATCH', 'REVIEW', 'REJECTED');

-- CreateEnum
CREATE TYPE "MatchMethod" AS ENUM ('NATIONAL_ID', 'IPRS', 'PROBABILISTIC', 'MANUAL');

-- CreateEnum
CREATE TYPE "FacilityType" AS ENUM ('PUBLIC_HOSPITAL', 'PRIVATE_HOSPITAL', 'CLINIC', 'HEALTH_CENTRE', 'DISPENSARY', 'LABORATORY');

-- CreateEnum
CREATE TYPE "EncounterType" AS ENUM ('OUTPATIENT', 'INPATIENT', 'EMERGENCY', 'VIRTUAL', 'HOME_VISIT', 'DAY_CASE');

-- CreateEnum
CREATE TYPE "EncounterStatus" AS ENUM ('PLANNED', 'IN_PROGRESS', 'FINISHED', 'CANCELLED', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "DiagnosisType" AS ENUM ('PRIMARY', 'SECONDARY', 'COMORBIDITY', 'DISCHARGE', 'REFERRAL');

-- CreateEnum
CREATE TYPE "DiagnosisStatus" AS ENUM ('ACTIVE', 'RESOLVED', 'CHRONIC', 'RULED_OUT', 'REMISSION');

-- CreateEnum
CREATE TYPE "LabCategory" AS ENUM ('HEMATOLOGY', 'BIOCHEMISTRY', 'MICROBIOLOGY', 'IMMUNOLOGY', 'PATHOLOGY', 'IMAGING', 'OTHER');

-- CreateEnum
CREATE TYPE "LabResultStatus" AS ENUM ('FINAL', 'PRELIMINARY', 'CORRECTED', 'CANCELLED', 'ENTERED_IN_ERROR');

-- CreateEnum
CREATE TYPE "MedicationStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'STOPPED', 'ON_HOLD', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "SyncStatus" AS ENUM ('STARTED', 'COMPLETED', 'FAILED', 'PARTIAL');

-- CreateTable
CREATE TABLE "facilities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "type" "FacilityType" NOT NULL,
    "county" TEXT NOT NULL,
    "subCounty" TEXT,
    "hmisSystem" TEXT,
    "fhirEndpoint" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastSyncAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "facilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "master_patients" (
    "id" TEXT NOT NULL,
    "mpiId" TEXT NOT NULL,
    "nationalId" TEXT,
    "iprsVerified" BOOLEAN NOT NULL DEFAULT false,
    "iprsVerifiedAt" TIMESTAMP(3),
    "iprsMatchScore" DOUBLE PRECISION,
    "fullName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL,
    "bloodType" "BloodType",
    "nationality" TEXT NOT NULL DEFAULT 'Kenyan',
    "phoneNumber" TEXT,
    "alternatePhone" TEXT,
    "email" TEXT,
    "county" TEXT,
    "subCounty" TEXT,
    "ward" TEXT,
    "village" TEXT,
    "status" "MasterPatientStatus" NOT NULL DEFAULT 'ACTIVE',
    "mergedIntoId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT,

    CONSTRAINT "master_patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "source_patient_records" (
    "id" TEXT NOT NULL,
    "masterPatientId" TEXT,
    "matchStatus" "MatchStatus" NOT NULL DEFAULT 'PENDING',
    "matchConfidence" DOUBLE PRECISION,
    "matchedAt" TIMESTAMP(3),
    "matchedBy" TEXT,
    "facilityId" TEXT NOT NULL,
    "facilityPatientId" TEXT NOT NULL,
    "facilityMrn" TEXT,
    "rawFullName" TEXT NOT NULL,
    "rawDateOfBirth" TIMESTAMP(3),
    "rawGender" TEXT,
    "rawNationalId" TEXT,
    "rawPhoneNumber" TEXT,
    "rawCounty" TEXT,
    "fhirResourceId" TEXT,
    "fhirResourceJson" JSONB,
    "sourceSyncAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sourceCreatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "source_patient_records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encounters" (
    "id" TEXT NOT NULL,
    "masterPatientId" TEXT NOT NULL,
    "sourceRecordId" TEXT,
    "facilityId" TEXT NOT NULL,
    "facilityEncounterId" TEXT,
    "fhirEncounterId" TEXT,
    "type" "EncounterType" NOT NULL,
    "status" "EncounterStatus" NOT NULL,
    "class" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "admissionDate" TIMESTAMP(3),
    "dischargeDate" TIMESTAMP(3),
    "lengthOfStay" INTEGER,
    "chiefComplaint" TEXT,
    "department" TEXT,
    "ward" TEXT,
    "attendingProvider" TEXT,
    "referredFrom" TEXT,
    "referredTo" TEXT,
    "claimId" TEXT,
    "payerName" TEXT,
    "paymentStatus" TEXT,
    "fhirResourceJson" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "encounters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diagnoses" (
    "id" TEXT NOT NULL,
    "masterPatientId" TEXT NOT NULL,
    "encounterId" TEXT NOT NULL,
    "icdCode" TEXT NOT NULL,
    "icdVersion" TEXT NOT NULL DEFAULT 'ICD-10',
    "icdDescription" TEXT NOT NULL,
    "icdChapter" TEXT,
    "icdBlock" TEXT,
    "diagnosisType" "DiagnosisType" NOT NULL,
    "status" "DiagnosisStatus" NOT NULL,
    "severity" TEXT,
    "onsetDate" TIMESTAMP(3),
    "resolvedDate" TIMESTAMP(3),
    "notes" TEXT,
    "diagnosedBy" TEXT,
    "facilityId" TEXT,
    "fhirResourceJson" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "diagnoses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lab_results" (
    "id" TEXT NOT NULL,
    "masterPatientId" TEXT NOT NULL,
    "encounterId" TEXT,
    "testCode" TEXT NOT NULL,
    "testName" TEXT NOT NULL,
    "testCategory" "LabCategory" NOT NULL,
    "resultValue" TEXT,
    "resultNumeric" DOUBLE PRECISION,
    "resultUnit" TEXT,
    "resultStatus" "LabResultStatus" NOT NULL,
    "interpretation" TEXT,
    "isAbnormal" BOOLEAN NOT NULL DEFAULT false,
    "isCritical" BOOLEAN NOT NULL DEFAULT false,
    "referenceRangeLow" DOUBLE PRECISION,
    "referenceRangeHigh" DOUBLE PRECISION,
    "referenceRangeText" TEXT,
    "orderedAt" TIMESTAMP(3),
    "collectedAt" TIMESTAMP(3),
    "resultAt" TIMESTAMP(3) NOT NULL,
    "reportedAt" TIMESTAMP(3),
    "facilityId" TEXT,
    "orderedBy" TEXT,
    "performedBy" TEXT,
    "labName" TEXT,
    "fhirResourceJson" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lab_results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medications" (
    "id" TEXT NOT NULL,
    "masterPatientId" TEXT NOT NULL,
    "encounterId" TEXT,
    "medicationCode" TEXT,
    "medicationName" TEXT NOT NULL,
    "brandName" TEXT,
    "form" TEXT,
    "strength" TEXT,
    "dose" TEXT,
    "frequency" TEXT,
    "route" TEXT,
    "durationDays" INTEGER,
    "quantity" INTEGER,
    "prescribedAt" TIMESTAMP(3) NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "dispensedAt" TIMESTAMP(3),
    "status" "MedicationStatus" NOT NULL,
    "stopReason" TEXT,
    "isChronicMed" BOOLEAN NOT NULL DEFAULT false,
    "hasInteractionFlag" BOOLEAN NOT NULL DEFAULT false,
    "interactionNote" TEXT,
    "facilityId" TEXT,
    "prescribedBy" TEXT,
    "dispensedBy" TEXT,
    "fhirResourceJson" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match_logs" (
    "id" TEXT NOT NULL,
    "sourceRecordId" TEXT NOT NULL,
    "candidateMasterId" TEXT,
    "matchStatus" "MatchStatus" NOT NULL,
    "confidenceScore" DOUBLE PRECISION NOT NULL,
    "matchMethod" "MatchMethod" NOT NULL,
    "nationalIdScore" DOUBLE PRECISION,
    "nameScore" DOUBLE PRECISION,
    "dobScore" DOUBLE PRECISION,
    "phoneScore" DOUBLE PRECISION,
    "genderScore" DOUBLE PRECISION,
    "iprsScore" DOUBLE PRECISION,
    "decidedBy" TEXT,
    "decidedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reviewNotes" TEXT,
    "triggerEvent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "match_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "merge_logs" (
    "id" TEXT NOT NULL,
    "sourcePatientId" TEXT NOT NULL,
    "targetPatientId" TEXT NOT NULL,
    "mergedBy" TEXT NOT NULL,
    "mergedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mergeReason" TEXT,
    "confidenceScore" DOUBLE PRECISION,
    "sourceSnapshot" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "merge_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "risk_scores" (
    "id" TEXT NOT NULL,
    "masterPatientId" TEXT NOT NULL,
    "scoreType" TEXT NOT NULL,
    "scoreValue" DOUBLE PRECISION NOT NULL,
    "scoreLabel" TEXT NOT NULL,
    "modelVersion" TEXT NOT NULL,
    "factors" JSONB NOT NULL,
    "validUntil" TIMESTAMP(3) NOT NULL,
    "calculatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "risk_scores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sync_logs" (
    "id" TEXT NOT NULL,
    "facilityId" TEXT NOT NULL,
    "syncType" TEXT NOT NULL,
    "status" "SyncStatus" NOT NULL,
    "recordsPulled" INTEGER NOT NULL DEFAULT 0,
    "recordsProcessed" INTEGER NOT NULL DEFAULT 0,
    "recordsFailed" INTEGER NOT NULL DEFAULT 0,
    "newPatients" INTEGER NOT NULL DEFAULT 0,
    "matchedPatients" INTEGER NOT NULL DEFAULT 0,
    "reviewQueue" INTEGER NOT NULL DEFAULT 0,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "errorMessage" TEXT,
    "syncMetadata" JSONB,

    CONSTRAINT "sync_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "facilities_code_key" ON "facilities"("code");

-- CreateIndex
CREATE UNIQUE INDEX "master_patients_mpiId_key" ON "master_patients"("mpiId");

-- CreateIndex
CREATE UNIQUE INDEX "master_patients_nationalId_key" ON "master_patients"("nationalId");

-- CreateIndex
CREATE UNIQUE INDEX "source_patient_records_facilityId_facilityPatientId_key" ON "source_patient_records"("facilityId", "facilityPatientId");

-- AddForeignKey
ALTER TABLE "source_patient_records" ADD CONSTRAINT "source_patient_records_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "facilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "source_patient_records" ADD CONSTRAINT "source_patient_records_masterPatientId_fkey" FOREIGN KEY ("masterPatientId") REFERENCES "master_patients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounters" ADD CONSTRAINT "encounters_masterPatientId_fkey" FOREIGN KEY ("masterPatientId") REFERENCES "master_patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounters" ADD CONSTRAINT "encounters_sourceRecordId_fkey" FOREIGN KEY ("sourceRecordId") REFERENCES "source_patient_records"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounters" ADD CONSTRAINT "encounters_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "facilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diagnoses" ADD CONSTRAINT "diagnoses_masterPatientId_fkey" FOREIGN KEY ("masterPatientId") REFERENCES "master_patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diagnoses" ADD CONSTRAINT "diagnoses_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "encounters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lab_results" ADD CONSTRAINT "lab_results_masterPatientId_fkey" FOREIGN KEY ("masterPatientId") REFERENCES "master_patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lab_results" ADD CONSTRAINT "lab_results_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "encounters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medications" ADD CONSTRAINT "medications_masterPatientId_fkey" FOREIGN KEY ("masterPatientId") REFERENCES "master_patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medications" ADD CONSTRAINT "medications_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "encounters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_logs" ADD CONSTRAINT "match_logs_sourceRecordId_fkey" FOREIGN KEY ("sourceRecordId") REFERENCES "source_patient_records"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match_logs" ADD CONSTRAINT "match_logs_candidateMasterId_fkey" FOREIGN KEY ("candidateMasterId") REFERENCES "master_patients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "merge_logs" ADD CONSTRAINT "merge_logs_sourcePatientId_fkey" FOREIGN KEY ("sourcePatientId") REFERENCES "master_patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "merge_logs" ADD CONSTRAINT "merge_logs_targetPatientId_fkey" FOREIGN KEY ("targetPatientId") REFERENCES "master_patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risk_scores" ADD CONSTRAINT "risk_scores_masterPatientId_fkey" FOREIGN KEY ("masterPatientId") REFERENCES "master_patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sync_logs" ADD CONSTRAINT "sync_logs_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "facilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
