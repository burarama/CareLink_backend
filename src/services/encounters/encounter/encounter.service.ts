import { Injectable } from '@nestjs/common';
import { CreateEncounterDto } from './dto/create-encounter.dto';
import { UpdateEncounterDto } from './dto/update-encounter.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EncounterService {
  constructor(private prisma: PrismaService) { }
  create(createEncounterDto: CreateEncounterDto) {
    return this.prisma.encounter.create({
      data: {
        masterPatientId: createEncounterDto.masterPatientId,
        facilityPatientId: createEncounterDto.facilityPatientId,
        encounterDate: createEncounterDto.encounterDate,
        facilityId: createEncounterDto.facilityId
      },
    });
  }

  findAll() {
    return this.prisma.encounter.findMany();
  }

  findOne(id: string) {
    return this.prisma.encounter.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateEncounterDto: UpdateEncounterDto) {
   return 'update';
  }

  remove(id: string) {
    return this.prisma.encounter.delete({
      where: {
        id: id,
      },
    });
  }
}
