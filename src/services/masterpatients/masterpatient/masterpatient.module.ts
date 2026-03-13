import { Module } from '@nestjs/common';
import { MasterpatientService } from './masterpatient.service';
import { MasterpatientController } from './masterpatient.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MasterpatientController],
  providers: [MasterpatientService],
})
export class MasterpatientModule { }
