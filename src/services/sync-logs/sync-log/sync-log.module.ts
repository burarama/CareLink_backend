import { Module } from '@nestjs/common';
import { SyncLogService } from './sync-log.service';
import { SyncLogController } from './sync-log.controller';  
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SyncLogController],
  providers: [SyncLogService],
})
export class SyncLogModule {}
