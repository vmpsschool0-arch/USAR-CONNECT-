import React from 'react';
import { STATS_DATA } from '../data/campusData';
import { Award, Cpu, Coins, ShieldCheck } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const icons = [Cpu, Award, Coins, ShieldCheck];

  return (
    <section className="bg-slate-900 text-white border-y border-slate-800 py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-slate-950/70 border border-slate-800 p-6 rounded-2xl flex items-start space-x-4 hover:border-blue-700/60 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center text-amber-400 font-bold shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">
                    {stat.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
