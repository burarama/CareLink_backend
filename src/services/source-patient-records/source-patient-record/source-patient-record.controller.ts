import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SourcePatientRecordService } from './source-patient-record.service';
import { CreateSourcePatientRecordDto } from './dto/create-source-patient-record.dto';
import { UpdateSourcePatientRecordDto } from './dto/update-source-patient-record.dto';

@Controller('source-patient-record')
export class SourcePatientRecordController {
  constructor(private readonly sourcePatientRecordService: SourcePatientRecordService) {}

  @Post()
  create(@Body() createSourcePatientRecordDto: CreateSourcePatientRecordDto) {
    return this.sourcePatientRecordService.create(createSourcePatientRecordDto);
  }

  @Get()
  findAll() {
    return this.sourcePatientRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sourcePatientRecordService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSourcePatientRecordDto: UpdateSourcePatientRecordDto) {
    return this.sourcePatientRecordService.update(id, updateSourcePatientRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sourcePatientRecordService.remove(id);
  }
}
