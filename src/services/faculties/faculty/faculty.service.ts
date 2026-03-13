import { Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FacultyService {
  constructor(private readonly prisma: PrismaService) {}
  create(createFacultyDto: CreateFacultyDto) {
    return this.prisma.facility.create({
      data: {
        name: createFacultyDto.name,
        code: createFacultyDto.code,
        type: createFacultyDto.type,
        county: createFacultyDto.county,
        subCounty: createFacultyDto.subCounty,
        hmisSystem: createFacultyDto.hmisSystem,
        fhirEndpoint: createFacultyDto.fhirEndpoint,
        isActive: createFacultyDto.isActive,
        createdAt: new Date(),
        // updatedAt: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.facility.findMany();
  }

  findOne(id: string) {
    return this.prisma.facility.findUnique({
      where: { id },
    });
  }

  update(id: string, updateFacultyDto: UpdateFacultyDto) {
    return this.prisma.facility.update({
      where: { id },
      data: updateFacultyDto,
    });
  }

  remove(id: string) {
    return this.prisma.facility.delete({
      where: { id },
    });
  }
}
