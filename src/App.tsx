import React from 'react';
import { StudentPortalView } from './components/StudentPortalView';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 flex flex-col selection:bg-amber-300 selection:text-slate-950">
      <StudentPortalView />
    </div>
  );
}
