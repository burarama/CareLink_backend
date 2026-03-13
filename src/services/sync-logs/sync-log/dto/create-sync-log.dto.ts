import { IsString, IsDate, IsOptional, IsEnum, IsNumber, IsBoolean, IsObject } from "class-validator";
import { SyncStatus } from 'generated/prisma/client';

export class CreateSyncLogDto {
    @IsString()
    facilityId: string;

    @IsString()
    syncType: string;

    @IsEnum(SyncStatus)
    status: SyncStatus;

    @IsNumber()
    @IsOptional()
    recordsPulled?: number;

    @IsNumber()
    @IsOptional()
    recordsProcessed?: number;

    @IsNumber()
    @IsOptional()
    recordsFailed?: number;

    @IsNumber()
    @IsOptional()
    newPatients?: number;

    @IsNumber()
    @IsOptional()
    matchedPatients?: number;

    @IsNumber()
    @IsOptional()
    reviewQueue?: number;

    @IsDate()
    @IsOptional()
    startedAt?: Date;

    @IsDate()
    @IsOptional()
    completedAt?: Date;

    @IsString()
    @IsOptional()
    errorMessage?: string;

    @IsObject()
    @IsOptional()
    syncMetadata?: object;
}
