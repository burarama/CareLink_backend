import { Injectable } from '@nestjs/common';
import { CreateLabResultDto } from './dto/create-lab-result.dto';
import { UpdateLabResultDto } from './dto/update-lab-result.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LabResultService {
  constructor(private readonly prisma: PrismaService) {}
  create(createLabResultDto: CreateLabResultDto) {
    return this.prisma.labResult.create({ data: {
      masterPatientId: createLabResultDto.masterPatientId,
      encounterId: createLabResultDto.encounterId,
      testCode: createLabResultDto.testCode,
      testName: createLabResultDto.testName,
      testCategory: createLabResultDto.testCategory,
      resultValue: createLabResultDto.resultValue,
      resultNumeric: createLabResultDto.resultNumeric,
      resultUnit: createLabResultDto.resultUnit,
      resultStatus: createLabResultDto.resultStatus,
      interpretation: createLabResultDto.interpretation,
      isAbnormal: createLabResultDto.isAbnormal,
      isCritical: createLabResultDto.isCritical,
      referenceRangeLow: createLabResultDto.referenceRangeLow,
      referenceRangeHigh: createLabResultDto.referenceRangeHigh,
      referenceRangeText: createLabResultDto.referenceRangeText,
      orderedAt: createLabResultDto.orderedAt,
      collectedAt: createLabResultDto.collectedAt,
      resultAt: createLabResultDto.resultAt,
      reportedAt: createLabResultDto.reportedAt,
      facilityId: createLabResultDto.facilityId,
      orderedBy: createLabResultDto.orderedBy,
      performedBy: createLabResultDto.performedBy,
      labName: createLabResultDto.labName,
      fhirResourceJson: createLabResultDto.fhirResourceJson,  
      createdAt: new Date(),
    } });
  }

  findAll() {
    return this.prisma.labResult.findMany();
  }

  findOne(id: string) {
    return this.prisma.labResult.findUnique({ where: { id } });
  }

  update(id: string, updateLabResultDto: UpdateLabResultDto) {
    return this.prisma.labResult.update({ where: { id }, data: updateLabResultDto });
  }

  remove(id: string) {
    return this.prisma.labResult.delete({ where: { id } });
  }
}
