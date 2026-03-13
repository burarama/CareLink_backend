import { Injectable } from '@nestjs/common';
import { CreateSourcePatientRecordDto } from './dto/create-source-patient-record.dto';
import { UpdateSourcePatientRecordDto } from './dto/update-source-patient-record.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SourcePatientRecordService {
  constructor(private readonly prisma: PrismaService) {}
  create(createSourcePatientRecordDto: CreateSourcePatientRecordDto) {
    return this.prisma.sourcePatientRecord.create({
      data: {
        masterPatientId: createSourcePatientRecordDto.masterPatientId,
        matchStatus: createSourcePatientRecordDto.matchStatus,
        matchConfidence: createSourcePatientRecordDto.matchConfidence,
        matchedAt: createSourcePatientRecordDto.matchedAt,
        matchedBy: createSourcePatientRecordDto.matchedBy,
        facilityId: createSourcePatientRecordDto.facilityId,
        facilityPatientId: createSourcePatientRecordDto.facilityPatientId,
        facilityMrn: createSourcePatientRecordDto.facilityMrn,
        rawFullName: createSourcePatientRecordDto.rawFullName,
        rawDateOfBirth: createSourcePatientRecordDto.rawDateOfBirth,
        rawGender: createSourcePatientRecordDto.rawGender,
        rawNationalId: createSourcePatientRecordDto.rawNationalId,
        rawPhoneNumber: createSourcePatientRecordDto.rawPhoneNumber,
        rawCounty: createSourcePatientRecordDto.rawCounty,
        fhirResourceId: createSourcePatientRecordDto.fhirResourceId,
        fhirResourceJson: createSourcePatientRecordDto.fhirResourceJson,
        sourceSyncAt: createSourcePatientRecordDto.sourceSyncAt,
        sourceCreatedAt: createSourcePatientRecordDto.sourceCreatedAt,
        createdAt: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.sourcePatientRecord.findMany(
      {
        orderBy: {
          createdAt: 'desc',
        },
      }
      );
  }

  findOne(id: string) {
    return this.prisma.sourcePatientRecord.findUnique({
      where: { id },
    });
  }

  update(id: string, updateSourcePatientRecordDto: UpdateSourcePatientRecordDto) {
    return this.prisma.sourcePatientRecord.update({
      where: { id },
      data: updateSourcePatientRecordDto,
    });
  }

  remove(id: string) {
    return this.prisma.sourcePatientRecord.delete({
      where: { id },
    });
  }
}
