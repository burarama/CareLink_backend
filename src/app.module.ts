import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MasterpatientModule } from './services/masterpatients/masterpatient/masterpatient.module';
import { EncounterModule } from './services/encounters/encounter/encounter.module';
import { PrismaModule } from './prisma/prisma.module';
import { FacilitiesModule } from './services/facilities/facilities.module';

@Module({
  imports: [MasterpatientModule, EncounterModule, PrismaModule, FacilitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
