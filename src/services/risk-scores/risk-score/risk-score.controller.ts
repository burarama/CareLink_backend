import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RiskScoreService } from './risk-score.service';
import { CreateRiskScoreDto } from './dto/create-risk-score.dto';
import { UpdateRiskScoreDto } from './dto/update-risk-score.dto';

@Controller('risk-score')
export class RiskScoreController {
  constructor(private readonly riskScoreService: RiskScoreService) {}

  @Post()
  create(@Body() createRiskScoreDto: CreateRiskScoreDto) {
    return this.riskScoreService.create(createRiskScoreDto);
  }

  @Get()
  findAll() {
    return this.riskScoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.riskScoreService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRiskScoreDto: UpdateRiskScoreDto) {
    return this.riskScoreService.update(id, updateRiskScoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.riskScoreService.remove(id);
  }
}
