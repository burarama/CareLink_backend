import { Injectable } from '@nestjs/common';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FacilitiesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createFacilityDto: CreateFacilityDto) {
    return this.prisma.facility.create({
      data: {
        name: createFacilityDto.name,
        code: createFacilityDto.code,
        type: createFacilityDto.type,
        county: createFacilityDto.county,
        isActive: createFacilityDto.isActive ?? true,
      },
    });
  }

  findAll() {
    return this.prisma.facility.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
  }

  findOne(id: string) {
    return this.prisma.facility.findUnique({
      where: { id },
    });
  }

  update(id: string, updateFacilityDto: UpdateFacilityDto) {
    return this.prisma.facility.update({
      where: { id },
      data: updateFacilityDto,
    });
  }

  remove(id: string) {
    return this.prisma.facility.delete({
      where: { id },
    });
  }
}