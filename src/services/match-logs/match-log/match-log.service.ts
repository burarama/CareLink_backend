import { Injectable } from '@nestjs/common';
import { CreateMatchLogDto } from './dto/create-match-log.dto';
import { UpdateMatchLogDto } from './dto/update-match-log.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MatchLogService {
  constructor(private readonly prisma: PrismaService) {}
  create(createMatchLogDto: CreateMatchLogDto) {
    return this.prisma.matchLog.create({ data: {
      sourceRecordId: createMatchLogDto.sourceRecordId,
      candidateMasterId: createMatchLogDto.candidateMasterId,
      matchStatus: createMatchLogDto.matchStatus,
      matchMethod: createMatchLogDto.matchMethod,
      confidenceScore: createMatchLogDto.confidenceScore,
      nationalIdScore: createMatchLogDto.nationalIdScore,
      nameScore: createMatchLogDto.nameScore,
      dobScore: createMatchLogDto.dobScore,
      phoneScore: createMatchLogDto.phoneScore,
      genderScore: createMatchLogDto.genderScore,
      iprsScore: createMatchLogDto.iprsScore,
      decidedBy: createMatchLogDto.decidedBy,
      decidedAt: createMatchLogDto.decidedAt,
      reviewNotes: createMatchLogDto.reviewNotes,
      triggerEvent: createMatchLogDto.triggerEvent,
      createdAt: new Date(),
    } });
  }

  findAll() {
    return this.prisma.matchLog.findMany();
  }

  findOne(id: string) {
    return this.prisma.matchLog.findUnique({ where: { id } });
  }

  update(id: string, updateMatchLogDto: UpdateMatchLogDto) {
    return this.prisma.matchLog.update({ where: { id }, data: updateMatchLogDto });
  }

  remove(id:  string) {
    return this.prisma.matchLog.delete({ where: { id } });
  }
}
