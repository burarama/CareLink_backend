import { create } from 'zustand';
import { MatchQueueItem } from '@/types/matching';
import { mockMatchQueue } from '@/lib/mock-data/match-queue';
import { Patient, Gender, BloodGroup } from '@/types/patient';
import { mockPatients } from '@/lib/mock-data/patients';

export interface ActivityLog {
  id: string;
  timestamp: string;
  message: string;
  type: 'MATCH_CONFIRMED' | 'MATCH_DISMISSED' | 'SYSTEM';
}

interface MatchStoreState {
  queueItems: MatchQueueItem[];
  masterPatients: Patient[];
  activityLogs: ActivityLog[];
  
  // Actions
  confirmMatch: (queueId: string) => void;
  dismissMatch: (queueId: string) => void;
  getRecentActivity: () => ActivityLog[];
}

export const useMatchStore = create<MatchStoreState>((set, get) => ({
  queueItems: [...mockMatchQueue],
  masterPatients: [...mockPatients],
  activityLogs: [
    {
      id: 'log-1',
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
      message: 'System completed automated daily master patient index synchronization.',
      type: 'SYSTEM'
    }
  ],
  
  confirmMatch: (queueId: string) => {
    const { queueItems, masterPatients, activityLogs } = get();
    const itemToConfirm = queueItems.find(item => item.id === queueId);
    
    if (!itemToConfirm) return;

    // Generate a new MPI ID (mock logic)
    const newMpiId = `MPI-${Math.floor(Math.random() * 900000) + 100000}`;
    
    // Choose canonical data (simplistic mock merge: prefer Name from Record A)
    const newPatient: Patient = {
      id: newMpiId,
      fullName: itemToConfirm.recordA.name || itemToConfirm.recordB.name,
      dob: itemToConfirm.recordA.dob,
      gender: itemToConfirm.recordA.gender as Gender, // Typing assumption
      bloodGroup: BloodGroup.O_POS, // Defaulting for mock
      county: itemToConfirm.recordA.address.county,
      isIprsVerified: !!itemToConfirm.recordA.nationalId,
      nationalId: itemToConfirm.recordA.nationalId,
      initials: (itemToConfirm.recordA.name || '').substring(0, 2).toUpperCase(),
      contributingFacilities: Array.from(new Set([itemToConfirm.recordA.facilityId, itemToConfirm.recordB.facilityId]))
    };

    const newLog: ActivityLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toISOString(),
      message: `Manual match confirmed: merged records from ${itemToConfirm.recordA.facilityName} and ${itemToConfirm.recordB.facilityName} -> ${newMpiId}`,
      type: 'MATCH_CONFIRMED'
    };

    set({
      queueItems: queueItems.filter(item => item.id !== queueId),
      masterPatients: [newPatient, ...masterPatients],
      activityLogs: [newLog, ...activityLogs]
    });
  },

  dismissMatch: (queueId: string) => {
    const { queueItems, activityLogs } = get();
    const itemToDismiss = queueItems.find(item => item.id === queueId);
    
    if (!itemToDismiss) return;
    
    const newLog: ActivityLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toISOString(),
      message: `Match rejected: candidate pair ${itemToDismiss.id} dismissed.`,
      type: 'MATCH_DISMISSED'
    };

    set({
      queueItems: queueItems.filter(item => item.id !== queueId),
      activityLogs: [newLog, ...activityLogs]
    });
  },

  getRecentActivity: () => {
    return get().activityLogs;
  }
}));
