import { Injectable } from '@nestjs/common';
import { CreateMasterpatientDto } from './dto/create-masterpatient.dto';
import { UpdateMasterpatientDto } from './dto/update-masterpatient.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MasterpatientService {
  constructor(private readonly prisma: PrismaService) { }
  create(createMasterpatientDto: CreateMasterpatientDto) {
  return 'Hello';
  }

  findAll() {
    return 'find all';
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

  remove(id: string) {
    return this.prisma.masterPatient.delete({
      where: { id },
    });
  }
}
