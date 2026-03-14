import { IsString, IsEnum, IsBoolean, IsOptional } from "class-validator";
import { FacilityType } from '@prisma/client';

export class CreateFacilityDto {
    @IsString()
    name: string;

    @IsString()
    code: string;

    @IsEnum(FacilityType)
    type: FacilityType;

    @IsString()
    county: string;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}