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
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "type" "FacilityType" NOT NULL,
    "county" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastSyncAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "facilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FacilityPatient" (
    "id" UUID NOT NULL,
    "facilityId" UUID NOT NULL,
    "masterPatientId" UUID,
    "externalId" TEXT NOT NULL,

    CONSTRAINT "FacilityPatient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Encounter" (
    "id" UUID NOT NULL,
    "masterPatientId" UUID NOT NULL,
    "facilityPatientId" UUID NOT NULL,
    "encounterDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Encounter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterPatient" (
    "id" UUID NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dob" TIMESTAMP(3),
    "gender" TEXT,

    CONSTRAINT "MasterPatient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "facilities_code_key" ON "facilities"("code");

-- AddForeignKey
ALTER TABLE "FacilityPatient" ADD CONSTRAINT "FacilityPatient_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "facilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FacilityPatient" ADD CONSTRAINT "FacilityPatient_masterPatientId_fkey" FOREIGN KEY ("masterPatientId") REFERENCES "MasterPatient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encounter" ADD CONSTRAINT "Encounter_masterPatientId_fkey" FOREIGN KEY ("masterPatientId") REFERENCES "MasterPatient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encounter" ADD CONSTRAINT "Encounter_facilityPatientId_fkey" FOREIGN KEY ("facilityPatientId") REFERENCES "FacilityPatient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
