import { IsString, IsEnum, IsDate, IsOptional, IsNumber } from "class-validator";
import { MatchStatus, MatchMethod } from '@prisma/client';

export class CreateMatchLogDto {
  @IsString()
  sourceRecordId: string;

  @IsString()
  @IsOptional()
  candidateMasterId?: string;

  @IsEnum(MatchStatus)
  matchStatus: MatchStatus;

  @IsEnum(MatchMethod)
  matchMethod: MatchMethod;

  @IsNumber()
  confidenceScore: number;

  @IsNumber()
  @IsOptional()
  nationalIdScore?: number;

  @IsNumber()
  @IsOptional()
  nameScore?: number;

  @IsNumber()
  @IsOptional()
  dobScore?: number;

  @IsNumber()
  @IsOptional()
  phoneScore?: number;

  @IsNumber()
  @IsOptional()
  genderScore?: number;

  @IsNumber()
  @IsOptional()
  iprsScore?: number;

  @IsString()
  @IsOptional()
  decidedBy?: string;

  @IsDate()
  @IsOptional()
  decidedAt?: Date;

  @IsString()
  @IsOptional()
  reviewNotes?: string;

  @IsString()
  @IsOptional()
  triggerEvent?: string;
}
