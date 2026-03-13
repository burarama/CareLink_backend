import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MergeLogService } from './merge-log.service';
import { CreateMergeLogDto } from './dto/create-merge-log.dto';
import { UpdateMergeLogDto } from './dto/update-merge-log.dto';

@Controller('merge-log')
export class MergeLogController {
  constructor(private readonly mergeLogService: MergeLogService) {}

  @Post()
  create(@Body() createMergeLogDto: CreateMergeLogDto) {
    return this.mergeLogService.create(createMergeLogDto);
  }

  @Get()
  findAll() {
    return this.mergeLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mergeLogService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMergeLogDto: UpdateMergeLogDto) {
    return this.mergeLogService.update(id, updateMergeLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mergeLogService.remove(id);
  }
}
