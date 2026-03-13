import { Injectable } from '@nestjs/common';
import { CreateSyncLogDto } from './dto/create-sync-log.dto';
import { UpdateSyncLogDto } from './dto/update-sync-log.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SyncLogService {
  constructor(private readonly prisma: PrismaService) {}
  create(createSyncLogDto: CreateSyncLogDto) {
    return this.prisma.syncLog.create({
      data: {
        facilityId: createSyncLogDto.facilityId,
        syncType: createSyncLogDto.syncType,
        status: createSyncLogDto.status,
        recordsPulled: createSyncLogDto.recordsPulled,
        recordsProcessed: createSyncLogDto.recordsProcessed,
        recordsFailed: createSyncLogDto.recordsFailed,
        newPatients: createSyncLogDto.newPatients,
        matchedPatients: createSyncLogDto.matchedPatients,
        reviewQueue: createSyncLogDto.reviewQueue,
        startedAt: createSyncLogDto.startedAt,
        completedAt: createSyncLogDto.completedAt,
        errorMessage: createSyncLogDto.errorMessage,
        syncMetadata: createSyncLogDto.syncMetadata ? (createSyncLogDto.syncMetadata as any) : undefined,
      },
    });
  }

  findAll() {
    return this.prisma.syncLog.findMany(
      {
        orderBy: {
          startedAt: 'desc',
        },
      }
    );
  }

  findOne(id: string) {
    return this.prisma.syncLog.findUnique({ where: { id } });
  }

  update(id: string, updateSyncLogDto: UpdateSyncLogDto) {
    return this.prisma.syncLog.update({ where: { id }, data: updateSyncLogDto });
  }

  remove(id: string) {
    return this.prisma.syncLog.delete({ where: { id } });
  }
}
