import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FacilityPatientService } from './facility-patient.service';
import { CreateFacilityPatientDto } from './dto/create-facility-patient.dto';
import { UpdateFacilityPatientDto } from './dto/update-facility-patient.dto';

@Controller('facility-patients')
export class FacilityPatientController {
  constructor(private readonly facilityPatientService: FacilityPatientService) {}

  @Post()
  create(@Body() createFacilityPatientDto: CreateFacilityPatientDto) {
    return this.facilityPatientService.create(createFacilityPatientDto);
  }

  @Get()
  findAll() {
    return this.facilityPatientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facilityPatientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacilityPatientDto: UpdateFacilityPatientDto) {
    return this.facilityPatientService.update(+id, updateFacilityPatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facilityPatientService.remove(+id);
  }
}
