import { Injectable } from '@nestjs/common';
import { CreateMasterpatientDto } from './dto/create-masterpatient.dto';
import { UpdateMasterpatientDto } from './dto/update-masterpatient.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MasterpatientService {
  constructor(private readonly prisma: PrismaService) {}
  create(createMasterpatientDto: CreateMasterpatientDto) {
    return this.prisma.masterPatient.create({
      data: {
        mpiId: createMasterpatientDto.mpiId,
        nationalId: createMasterpatientDto.nationalId,
        fullName: createMasterpatientDto.fullName,
        firstName: createMasterpatientDto.firstName,
        middleName: createMasterpatientDto.middleName,
        lastName: createMasterpatientDto.lastName,
        dateOfBirth: createMasterpatientDto.dateOfBirth,
        gender: createMasterpatientDto.gender,
        bloodType: createMasterpatientDto.bloodType,
        nationality: createMasterpatientDto.nationality,
        phoneNumber: createMasterpatientDto.phoneNumber,
        alternatePhone: createMasterpatientDto.alternatePhone,
        email: createMasterpatientDto.email,
        county: createMasterpatientDto.county,
        subCounty: createMasterpatientDto.subCounty,
        ward: createMasterpatientDto.ward,
        village: createMasterpatientDto.village,
        status: createMasterpatientDto.status,
        mergedIntoId: createMasterpatientDto.mergedIntoId,
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: createMasterpatientDto.createdBy,
      },
      include: {
        sourceRecords: true,
      },
    });
  }

  findAll() {
    return this.prisma.masterPatient.findMany();
  }

  findOne(id: string) {
    return this.prisma.masterPatient.findUnique({
      where: { id },
    });
  }

  update(id: string, updateMasterpatientDto: UpdateMasterpatientDto) {
    return this.prisma.masterPatient.update({
      where: { id },
      data: updateMasterpatientDto,
    });
  }

  remove(id:  string) {
    return this.prisma.masterPatient.delete({
      where: { id },
    });
  }
}
