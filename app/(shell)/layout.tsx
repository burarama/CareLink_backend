import React from 'react';
import { Sidebar } from '@/components/shell/Sidebar';
import { Topnav } from '@/components/shell/Topnav';

export default function ShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-page-bg">
      <Sidebar />
      <div className="pl-[260px]">
        <Topnav />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
