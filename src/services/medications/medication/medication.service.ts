import { Injectable } from '@nestjs/common';
import { CreateMedicationDto } from './dto/create-medication.dto';
import { UpdateMedicationDto } from './dto/update-medication.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MedicationService {
  constructor(private readonly prisma: PrismaService) {}
  create(createMedicationDto: CreateMedicationDto) {
      return this.prisma.medication.create({ data: {
      masterPatientId: createMedicationDto.masterPatientId,
      encounterId: createMedicationDto.encounterId,
      medicationCode: createMedicationDto.medicationCode,
      medicationName: createMedicationDto.medicationName,
      brandName: createMedicationDto.brandName,
      form: createMedicationDto.form,
      strength: createMedicationDto.strength,
      dose: createMedicationDto.dose,
      frequency: createMedicationDto.frequency,
      route: createMedicationDto.route,
      durationDays: createMedicationDto.durationDays,
      quantity: createMedicationDto.quantity,
      prescribedAt: createMedicationDto.prescribedAt,
      startDate: createMedicationDto.startDate,
      endDate: createMedicationDto.endDate,
      dispensedAt: createMedicationDto.dispensedAt,
      status: createMedicationDto.status,
      stopReason: createMedicationDto.stopReason,
      isChronicMed: createMedicationDto.isChronicMed,
      hasInteractionFlag: createMedicationDto.hasInteractionFlag,
      interactionNote: createMedicationDto.interactionNote,
      facilityId: createMedicationDto.facilityId,
      prescribedBy: createMedicationDto.prescribedBy,
      dispensedBy: createMedicationDto.dispensedBy,
      fhirResourceJson: createMedicationDto.fhirResourceJson as any,
      createdAt: new Date(),
    } });
  } 

  findAll() {
    return this.prisma.medication.findMany(
      {
        orderBy: {
          createdAt: 'desc',
        },
      }
    );
  }

  findOne(id: string) {
    return this.prisma.medication.findUnique({ where: { id } });
  }

  update(id: string, updateMedicationDto: UpdateMedicationDto) {
    return this.prisma.medication.update({ where: { id }, data: updateMedicationDto });
  }

  remove(id: string) {
    return this.prisma.medication.delete({ where: { id } });
  }
}
