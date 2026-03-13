import { IsString, IsEnum, IsBoolean, IsOptional } from "class-validator";
import { FacilityType } from 'generated/prisma/client';

export class CreateFacultyDto {
    @IsString()
    name: string;

    @IsString()
    code: string;

    @IsEnum(FacilityType)
    type: FacilityType;

    @IsString()
    county: string;

    @IsString()
    @IsOptional()
    subCounty?: string;

    @IsString()
    @IsOptional()
    hmisSystem?: string;

    @IsString()
    @IsOptional()
    fhirEndpoint?: string;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;

    @IsString()
    @IsOptional()
    createdBy?: string;
}
