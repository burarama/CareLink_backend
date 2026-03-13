/*
  Warnings:

  - Added the required column `firstName` to the `FacilityPatient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `FacilityPatient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `FacilityPatient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FacilityPatient" ADD COLUMN     "dob" TEXT,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;
