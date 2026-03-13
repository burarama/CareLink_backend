import { Module } from '@nestjs/common';
import { SourcePatientRecordService } from './source-patient-record.service';
import { SourcePatientRecordController } from './source-patient-record.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SourcePatientRecordController],
  providers: [SourcePatientRecordService],
})
export class SourcePatientRecordModule {  }
