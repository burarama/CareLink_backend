import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterpatientService } from './masterpatient.service';
import { CreateMasterpatientDto } from './dto/create-masterpatient.dto';
import { UpdateMasterpatientDto } from './dto/update-masterpatient.dto';

@Controller('masterpatients')
export class MasterpatientController {
  constructor(private readonly masterpatientService: MasterpatientService) {}

  @Post()
  create(@Body() createMasterpatientDto: CreateMasterpatientDto) {
    return this.masterpatientService.create(createMasterpatientDto);
  }

  @Get()
  findAll() {
    return this.masterpatientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterpatientService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterpatientDto: UpdateMasterpatientDto) {
    return this.masterpatientService.update(id, updateMasterpatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterpatientService.remove(id);
  }
}
