import { Injectable } from '@nestjs/common';
import { CreateMergeLogDto } from './dto/create-merge-log.dto';
import { UpdateMergeLogDto } from './dto/update-merge-log.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MergeLogService {
  constructor(private readonly prisma: PrismaService) {}
  create(createMergeLogDto: CreateMergeLogDto) {
    return this.prisma.mergeLog.create({
      data: {
        sourcePatientId: createMergeLogDto.sourcePatientId,
        targetPatientId: createMergeLogDto.targetPatientId,
        mergedBy: createMergeLogDto.mergedBy,
        mergedAt: createMergeLogDto.mergedAt,
        mergeReason: createMergeLogDto.mergeReason,
        confidenceScore: createMergeLogDto.confidenceScore,
        sourceSnapshot: createMergeLogDto.sourceSnapshot ? (createMergeLogDto.sourceSnapshot as any) : {},
      },
    });
  }

  findAll() {
    return this.prisma.mergeLog.findMany();
  }

  findOne(id: string) {
    return this.prisma.mergeLog.findUnique({ where: { id } });
  }

  update(id: string, updateMergeLogDto: UpdateMergeLogDto) {
    return this.prisma.mergeLog.update({ where: { id }, data: updateMergeLogDto });
  }

  remove(id: string) {
    return this.prisma.mergeLog.delete({ where: { id } });
  }
}
