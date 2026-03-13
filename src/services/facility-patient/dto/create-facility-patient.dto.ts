import { IsString, IsUUID, IsOptional } from 'class-validator';

export class CreateFacilityPatientDto {
    @IsUUID()
    facilityId: string;

    @IsUUID()
    @IsOptional()
    masterPatientId?: string;

    @IsString()
    externalId: string;
}