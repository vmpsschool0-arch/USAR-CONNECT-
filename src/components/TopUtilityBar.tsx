import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, GraduationCap, FileText, Bell } from 'lucide-react';
import { CAMPUS_INFO } from '../data/campusData';

interface TopUtilityBarProps {
  onOpenPortal: () => void;
  onSelectTab: (tab: string) => void;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({ onOpenPortal, onSelectTab }) => {
  return (
    <div className="bg-blue-950 text-slate-200 border-b border-blue-900 text-xs py-2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Contact Items */}
        <div className="flex flex-wrap items-center gap-4 text-slate-300">
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="font-medium truncate max-w-[280px] sm:max-w-none">{CAMPUS_INFO.address}</span>
          </div>
          <div className="hidden sm:flex items-center space-x-1.5">
            <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <a href={`mailto:${CAMPUS_INFO.email}`} className="hover:text-amber-300 transition-colors">
              {CAMPUS_INFO.email}
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-1.5">
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{CAMPUS_INFO.phone}</span>
          </div>
        </div>

        {/* Right Quick Links */}
        <div className="flex items-center gap-3 font-semibold shrink-0">
          <button
            onClick={() => onSelectTab('notices')}
            className="flex items-center space-x-1 text-slate-200 hover:text-amber-300 transition-colors"
          >
            <Bell className="w-3.5 h-3.5 text-amber-400" />
            <span>Notices 2026</span>
          </button>
          
          <span className="text-blue-800">|</span>

          <a
            href="https://ipu.admissions.nic.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-amber-300 hover:text-amber-200 transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Admissions Portal</span>
          </a>

          <span className="text-blue-800">|</span>

          <button
            onClick={onOpenPortal}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-2.5 py-1 rounded-md text-[11px] font-bold transition-all flex items-center space-x-1 shadow-sm"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Student Portal</span>
          </button>
        </div>
      </div>
    </div>
  );
};
