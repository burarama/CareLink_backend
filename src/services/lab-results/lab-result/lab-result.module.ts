import { Module } from '@nestjs/common';
import { LabResultService } from './lab-result.service';
import { LabResultController } from './lab-result.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LabResultController],
  providers: [LabResultService],  
})
export class LabResultModule { }
