import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SyncLogService } from './sync-log.service';
import { CreateSyncLogDto } from './dto/create-sync-log.dto';
import { UpdateSyncLogDto } from './dto/update-sync-log.dto';

@Controller('sync-log')
export class SyncLogController {
  constructor(private readonly syncLogService: SyncLogService) {}

  @Post()
  create(@Body() createSyncLogDto: CreateSyncLogDto) {
    return this.syncLogService.create(createSyncLogDto);
  }

  @Get()
  findAll() {
    return this.syncLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.syncLogService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSyncLogDto: UpdateSyncLogDto) {
    return this.syncLogService.update(id, updateSyncLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.syncLogService.remove(id);
  }
}
