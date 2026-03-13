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
         // links
  // masterPatientId   String
  masterPatientId: createDiagnosisDto.masterPatientId,    
  // masterPatient     MasterPatient @relation(fields: [masterPatientId], references: [id])
  // encounterId       String
  encounterId: createDiagnosisDto.encounterId,
  // encounter         Encounter @relation(fields: [encounterId], references: [id])

  // // ICD-10
  // icdCode           String   // e.g. "J06.9"
  icdCode: createDiagnosisDto.icdCode,
  // icdVersion        String   @default("ICD-10")
  icdVersion: createDiagnosisDto.icdVersion,
  // icdDescription    String   // "Acute upper respiratory infection, unspecified"
  icdDescription: createDiagnosisDto.icdDescription,
  // icdChapter        String?  // "Respiratory" — derived from code range
  icdChapter: createDiagnosisDto.icdChapter,
  // icdBlock          String?  // "J00-J06"
  icdBlock: createDiagnosisDto.icdBlock,

  // // clinical details
  // diagnosisType     DiagnosisType // PRIMARY | SECONDARY | COMORBIDITY | DISCHARGE
  diagnosisType: createDiagnosisDto.diagnosisType,
  // status            DiagnosisStatus // ACTIVE | RESOLVED | CHRONIC | RULED_OUT
  status: createDiagnosisDto.status,
  // severity          String?  // "Mild" | "Moderate" | "Severe"
  severity: createDiagnosisDto.severity,
  // onsetDate         DateTime?
  onsetDate: createDiagnosisDto.onsetDate,
  // resolvedDate      DateTime?
  resolvedDate: createDiagnosisDto.resolvedDate,
  // notes             String?
  notes: createDiagnosisDto.notes,

  // // source
  // diagnosedBy       String?
  diagnosedBy: createDiagnosisDto.diagnosedBy,
  // facilityId        String?
  facilityId: createDiagnosisDto.facilityId,
  // fhirResourceJson  Json?
  fhirResourceJson: createDiagnosisDto.fhirResourceJson,

  // createdAt         DateTime @default(now())
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
