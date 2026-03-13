import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatchLogService } from './match-log.service';
import { CreateMatchLogDto } from './dto/create-match-log.dto';
import { UpdateMatchLogDto } from './dto/update-match-log.dto';

@Controller('match-log')
export class MatchLogController {
  constructor(private readonly matchLogService: MatchLogService) {}

  @Post()
  create(@Body() createMatchLogDto: CreateMatchLogDto) {
    return this.matchLogService.create(createMatchLogDto);
  }

  @Get()
  findAll() {
    return this.matchLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchLogService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchLogDto: UpdateMatchLogDto) {
    return this.matchLogService.update(id, updateMatchLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchLogService.remove(id);
  }
}
