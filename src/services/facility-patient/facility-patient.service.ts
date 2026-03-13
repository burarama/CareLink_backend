import { Injectable } from '@nestjs/common';
import { CreateFacilityPatientDto } from './dto/create-facility-patient.dto';
import { UpdateFacilityPatientDto } from './dto/update-facility-patient.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FacilityPatientService {
  constructor(private readonly prisma: PrismaService) { }
  create(createFacilityPatientDto: CreateFacilityPatientDto) {
    return this.prisma.facilityPatient.create({
      data: createFacilityPatientDto,
    });
  }

  findAll() {
    return this.prisma.facilityPatient.findMany({
      include: {
        facility: {
          select: {
            name: true,
          },
        },
      },
    }).then(patients => patients.map(({ facility, ...rest }) => ({
      ...rest,
      facilityName: facility?.name,
    })));
  }

  findOne(id: number) {
    return `This action returns a #${id} facilityPatient`;
  }

  update(id: number, updateFacilityPatientDto: UpdateFacilityPatientDto) {
    return `This action updates a #${id} facilityPatient`;
  }

  remove(id: number) {
    return `This action removes a #${id} facilityPatient`;
  }
}
