import { Module } from '@nestjs/common';
import { MergeLogService } from './merge-log.service';
import { MergeLogController } from './merge-log.controller';  
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MergeLogController],
  providers: [MergeLogService],
})
export class MergeLogModule {}
