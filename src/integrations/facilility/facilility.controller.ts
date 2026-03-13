import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FacililityService } from './facilility.service';
import { CreateFacililityDto } from './dto/create-facilility.dto';
import { UpdateFacililityDto } from './dto/update-facilility.dto';

@Controller('facility')
export class FacililityController {
  constructor(private readonly facililityService: FacililityService) {}

  @Post()
  create(@Body() createFacililityDto: CreateFacililityDto) {
    return this.facililityService.create(createFacililityDto);
  }

  @Get()
  findAll() {
    return this.facililityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facililityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacililityDto: UpdateFacililityDto) {
    return this.facililityService.update(+id, updateFacililityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facililityService.remove(+id);
  }
}
