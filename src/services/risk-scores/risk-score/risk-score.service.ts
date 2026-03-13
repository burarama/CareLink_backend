import { Injectable } from '@nestjs/common';
import { CreateRiskScoreDto } from './dto/create-risk-score.dto';
import { UpdateRiskScoreDto } from './dto/update-risk-score.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RiskScoreService {
  constructor(private readonly prisma: PrismaService) {}
  create(createRiskScoreDto: CreateRiskScoreDto) {
    return this.prisma.riskScore.create({
      data: {
        masterPatientId: createRiskScoreDto.masterPatientId,
        scoreType: createRiskScoreDto.scoreType,
        scoreValue: createRiskScoreDto.scoreValue,
        scoreLabel: createRiskScoreDto.scoreLabel,
        modelVersion: createRiskScoreDto.modelVersion,
        factors: createRiskScoreDto.factors ? (createRiskScoreDto.factors as any) : {},
        validUntil: createRiskScoreDto.validUntil,
        calculatedAt: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.riskScore.findMany(
      {
        orderBy: {
          calculatedAt: 'desc',
        },
      }
    );    
  }

  findOne(id: string) {
    return this.prisma.riskScore.findUnique({ where: { id } });
  }

  update(id: string, updateRiskScoreDto: UpdateRiskScoreDto) {
    return this.prisma.riskScore.update({ where: { id }, data: updateRiskScoreDto });
  }

  remove(id: string) {
    return this.prisma.riskScore.delete({ where: { id } });
  }
}
