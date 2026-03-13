import { IsString, IsDate, IsOptional, IsEnum, IsNumber, IsBoolean, IsObject } from "class-validator";

export class CreateRiskScoreDto {
    
    @IsString()
    masterPatientId: string;

    @IsString()
    scoreType: string;

    @IsNumber()
    scoreValue: number;
    
    @IsString()
    scoreLabel: string;
    
    @IsString()
    modelVersion: string;
    
    @IsObject()
    factors: object;
        
    @IsDate()
    validUntil: Date;
}