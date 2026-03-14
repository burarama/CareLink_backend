import { Injectable } from '@nestjs/common';
import { CreateFacililityDto } from './dto/create-facilility.dto';
import { UpdateFacililityDto } from './dto/update-facilility.dto';

@Injectable()
export class FacililityService {
  create(createFacililityDto: CreateFacililityDto) {
    return 'This action adds a new facilility';
  }

  findAll() {
    return `This action returns all facilility`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facilility`;
  }

  update(id: number, updateFacililityDto: UpdateFacililityDto) {
    return `This action updates a #${id} facilility`;
  }

  remove(id: number) {
    return `This action removes a #${id} facilility`;
  }
}
