import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MasterpatientModule } from './services/masterpatients/masterpatient/masterpatient.module';
import { SourcePatientRecordModule } from './services/source-patient-records/source-patient-record/source-patient-record.module';
import { EncounterModule } from './services/encounters/encounter/encounter.module';
import { DiagnosisModule } from './services/diagnoses/diagnosis/diagnosis.module';
import { LabResultModule } from './services/lab-results/lab-result/lab-result.module';
import { MedicationModule } from './services/medications/medication/medication.module';
import { MatchLogModule } from './services/match-logs/match-log/match-log.module';
import { MergeLogModule } from './services/merge-logs/merge-log/merge-log.module';
import { RiskScoreModule } from './services/risk-scores/risk-score/risk-score.module';
import { SyncLogModule } from './services/sync-logs/sync-log/sync-log.module';
import { PrismaModule } from './prisma/prisma.module';
import { FacilitiesModule } from './services/facilities/facilities.module';

@Module({
  imports: [MasterpatientModule, SourcePatientRecordModule, EncounterModule, DiagnosisModule, LabResultModule, MedicationModule, MatchLogModule, MergeLogModule, RiskScoreModule, SyncLogModule, PrismaModule, FacilitiesModule, ParticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
