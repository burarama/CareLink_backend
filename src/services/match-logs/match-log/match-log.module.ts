import { Module } from '@nestjs/common';
import { MatchLogService } from './match-log.service';
import { MatchLogController } from './match-log.controller';  
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MatchLogController],
  providers: [MatchLogService],
})
export class MatchLogModule {}
