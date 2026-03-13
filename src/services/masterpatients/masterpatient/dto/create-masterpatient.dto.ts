import { IsString, IsDate, IsEnum, IsOptional } from "class-validator";
import { BloodType, Gender, MasterPatientStatus } from '@prisma/client';

export class CreateMasterpatientDto {
    @IsString()
    mpiId: string;

    @IsString()
    nationalId: string;

    @IsString()
    fullName: string;

    @IsString()
    firstName: string;

    @IsString()
    middleName: string;

    @IsString()
    lastName: string;

    @IsDate()
    dateOfBirth: Date;

    @IsEnum(Gender)
    gender: Gender;

    @IsEnum(BloodType)
    bloodType: BloodType;

    @IsString()
    nationality: string;

    @IsString()
    phoneNumber: string;

    @IsString()
    alternatePhone: string;

    @IsString()
    email: string;

    @IsString()
    county: string;

    @IsString()
    subCounty: string;

    @IsString()
    ward: string;

    @IsString()
    village: string;

    @IsEnum(MasterPatientStatus)
    status: MasterPatientStatus;

    @IsString()
    @IsOptional()
    mergedIntoId?: string;

    // @IsDate()
    // createdAt: Date;

    // @IsDate()
    // updatedAt: Date;

    @IsString()
    createdBy: string;
}
