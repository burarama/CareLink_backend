import { IsString, IsUUID, IsOptional, IsEnum } from 'class-validator';

export class CreateFacilityPatientDto {
    @IsUUID()
    facilityId: string;

    @IsUUID()
    @IsOptional()
    masterPatientId?: string;

    @IsString()
    externalId: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    @IsOptional()
    dob?: string;

    @IsString()
    gender: string;
}