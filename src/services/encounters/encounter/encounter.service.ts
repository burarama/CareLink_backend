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
        ...createEncounterDto,
        createdAt: new Date(),
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
    return this.prisma.encounter.update({
      where: {
        id: id,
      },
      data: {
        masterPatientId: updateEncounterDto.masterPatientId,
        sourceRecordId: updateEncounterDto.sourceRecordId,
        facilityId: updateEncounterDto.facilityId,
        facilityEncounterId: updateEncounterDto.facilityEncounterId,
        fhirEncounterId: updateEncounterDto.fhirEncounterId,
        type: updateEncounterDto.type,
        status: updateEncounterDto.status,
        class: updateEncounterDto.class,
        startDate: updateEncounterDto.startDate,
        endDate: updateEncounterDto.endDate,
        admissionDate: updateEncounterDto.admissionDate,
        dischargeDate: updateEncounterDto.dischargeDate,
        lengthOfStay: updateEncounterDto.lengthOfStay,
        chiefComplaint: updateEncounterDto.chiefComplaint,
        department: updateEncounterDto.department,
        ward: updateEncounterDto.ward,
        attendingProvider: updateEncounterDto.attendingProvider,
        referredFrom: updateEncounterDto.referredFrom,
        referredTo: updateEncounterDto.referredTo,
        claimId: updateEncounterDto.claimId,
        payerName: updateEncounterDto.payerName,
        paymentStatus: updateEncounterDto.paymentStatus,
        fhirResourceJson: updateEncounterDto.fhirResourceJson,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  remove(id: string) {
    return this.prisma.encounter.delete({
      where: {
        id: id,
      },
    });
  }
}
