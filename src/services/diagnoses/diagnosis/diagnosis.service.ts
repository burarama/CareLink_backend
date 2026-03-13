import { Injectable } from '@nestjs/common';
import { CreateDiagnosisDto } from './dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from './dto/update-diagnosis.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DiagnosisService {
  constructor(private prisma: PrismaService) {}
  create(createDiagnosisDto: CreateDiagnosisDto) {
    return this.prisma.diagnosis.create({
      data: {
  masterPatientId: createDiagnosisDto.masterPatientId,    
  encounterId: createDiagnosisDto.encounterId,

  icdCode: createDiagnosisDto.icdCode,
  icdVersion: createDiagnosisDto.icdVersion,
  icdDescription: createDiagnosisDto.icdDescription,
  icdChapter: createDiagnosisDto.icdChapter,
  icdBlock: createDiagnosisDto.icdBlock,

  diagnosisType: createDiagnosisDto.diagnosisType,
  status: createDiagnosisDto.status,
  severity: createDiagnosisDto.severity,
  onsetDate: createDiagnosisDto.onsetDate,
  resolvedDate: createDiagnosisDto.resolvedDate,
  notes: createDiagnosisDto.notes,

  diagnosedBy: createDiagnosisDto.diagnosedBy,
  facilityId: createDiagnosisDto.facilityId,
  fhirResourceJson: createDiagnosisDto.fhirResourceJson,

  createdAt: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.diagnosis.findMany();
  }

  findOne(id: string) {
    return this.prisma.diagnosis.findUnique({
      where: { id },
    });
  }

  update(id: string, updateDiagnosisDto: UpdateDiagnosisDto) {
    return this.prisma.diagnosis.update({
      where: { id },
      data: {...updateDiagnosisDto},
    });
  }

  remove(id: string) {
    return this.prisma.diagnosis.delete({
      where: { id },
    });
  }
}
