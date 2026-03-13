import { IsString, IsDate, IsOptional, IsEnum, IsNumber, IsBoolean, IsObject } from "class-validator";

export class CreateMergeLogDto {
    @IsString()
    sourcePatientId: string;

    @IsString()
    targetPatientId: string;
    
    @IsString()
    mergedBy: string;
    
    @IsDate()
    mergedAt: Date;
    
    @IsString()
    @IsOptional()
    mergeReason?: string;
    
    @IsNumber()
    @IsOptional()
    confidenceScore?: number;
    
    @IsObject()
    @IsOptional()
    sourceSnapshot?: object;
}
