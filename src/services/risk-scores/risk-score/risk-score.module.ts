import { Module } from '@nestjs/common';
import { RiskScoreService } from './risk-score.service';
import { RiskScoreController } from './risk-score.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RiskScoreController],
  providers: [RiskScoreService],
})
export class RiskScoreModule {}
