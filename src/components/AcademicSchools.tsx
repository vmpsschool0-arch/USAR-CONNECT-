import React, { useState } from 'react';
import { SCHOOLS_DATA } from '../data/campusData';
import { Program } from '../types';
import { 
  Bot, 
  BrainCircuit, 
  Database, 
  Cpu, 
  Compass, 
  Palette, 
  Layers, 
  Building2, 
  CheckCircle2, 
  X, 
  ArrowRight,
  BookOpen,
  UserCheck
} from 'lucide-react';

interface AcademicSchoolsProps {
  onApplyProgram?: (programName: string) => void;
}

export const AcademicSchools: React.FC<AcademicSchoolsProps> = ({ onApplyProgram }) => {
  const [activeSchoolId, setActiveSchoolId] = useState<'usar' | 'usap'>('usar');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const activeSchool = SCHOOLS_DATA.find((s) => s.id === activeSchoolId) || SCHOOLS_DATA[0];

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return BrainCircuit;
      case 'Database': return Database;
      case 'Bot': return Bot;
      case 'Cpu': return Cpu;
      case 'Compass': return Compass;
      case 'Palette': return Palette;
      case 'Layers': return Layers;
      case 'Building2': return Building2;
      default: return BookOpen;
    }
  };

  return (
    <section id="schools" className="py-16 px-4 md:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 bg-blue-100 text-blue-900 text-xs font-black uppercase tracking-wider rounded-full border border-blue-200">
            Academic Schools & Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Excellence in Engineering, Architecture & Design
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GGSIPU East Delhi Campus houses two premier University Schools offering Industry 4.0 technical degrees and Council of Architecture approved design programs.
          </p>
        </div>

        {/* SCHOOL TOGGLE TABS */}
        <div className="flex justify-center">
          <div className="bg-slate-200/80 p-1.5 rounded-2xl flex max-w-md w-full shadow-inner border border-slate-300">
            <button
              onClick={() => setActiveSchoolId('usar')}
              className={`flex-1 py-3 px-4 rounded-xl font-extrabold text-xs md:text-sm transition-all flex items-center justify-center space-x-2 ${
                activeSchoolId === 'usar'
                  ? 'bg-blue-950 text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Bot className="w-4 h-4 text-amber-400" />
              <span>USAR (Automation & Robotics)</span>
            </button>

            <button
              onClick={() => setActiveSchoolId('usap')}
              className={`flex-1 py-3 px-4 rounded-xl font-extrabold text-xs md:text-sm transition-all flex items-center justify-center space-x-2 ${
                activeSchoolId === 'usap'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>USAP (Architecture & Planning)</span>
            </button>
          </div>
        </div>

        {/* SCHOOL OVERVIEW BANNER */}
        <div className={`p-8 rounded-3xl bg-gradient-to-r ${activeSchool.bgGradient} text-white shadow-xl relative overflow-hidden`}>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="px-3 py-1 bg-amber-400 text-slate-950 font-black text-xs uppercase rounded-full">
                {activeSchool.badge}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white">
                {activeSchool.fullName} ({activeSchool.shortName})
              </h3>
              <p className="text-amber-200 font-semibold text-sm">
                "{activeSchool.tagline}"
              </p>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-2xl">
                {activeSchool.description}
              </p>
            </div>

            <div className="md:col-span-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 space-y-2">
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block">Dean of School</span>
              <h4 className="font-bold text-white text-base">{activeSchool.dean}</h4>
              <p className="text-xs text-slate-300">Guru Gobind Singh Indraprastha University East Delhi Campus</p>
              <div className="pt-2 border-t border-white/10 text-xs text-amber-300 font-semibold flex items-center space-x-1">
                <UserCheck className="w-4 h-4" />
                <span>Centralized Counseling Admission</span>
              </div>
            </div>
          </div>
        </div>

        {/* PROGRAM CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeSchool.programs.map((prog) => {
            const ProgramIcon = getProgramIcon(prog.iconName);
            return (
              <div
                key={prog.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-500 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center font-bold border border-blue-100 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                      <ProgramIcon className="w-6 h-6" />
                    </div>
                    <span className="bg-slate-100 text-slate-800 text-[11px] font-extrabold px-2.5 py-1 rounded-md border border-slate-200">
                      Seats: {prog.intake}
                    </span>
                  </div>

                  <span className="text-[10px] font-black uppercase text-amber-600 tracking-wider">
                    {prog.duration}
                  </span>
                  <h4 className="font-bold text-slate-900 text-base mt-1 mb-2 leading-snug">
                    {prog.name}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                    {prog.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="space-y-1">
                    {prog.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center space-x-1.5 text-[11px] text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="w-full py-2.5 bg-slate-900 hover:bg-blue-900 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <span>View Curriculum & Eligibility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* PROGRAM DETAILS MODAL */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-200 animate-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-black uppercase rounded-full">
                {selectedProgram.degree}
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                {selectedProgram.name}
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                Duration: {selectedProgram.duration} • Annual Approved Intake: {selectedProgram.intake} Students
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-1 text-xs uppercase tracking-wider text-blue-900">Program Description</h4>
                <p className="leading-relaxed text-xs md:text-sm">{selectedProgram.description}</p>
              </div>

              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200">
                <h4 className="font-bold text-amber-900 mb-1 text-xs uppercase tracking-wider">Eligibility & Admission Criteria</h4>
                <p className="leading-relaxed text-xs md:text-sm text-amber-950">{selectedProgram.eligibility}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider">Key Department Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProgram.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 bg-slate-100 p-2.5 rounded-xl text-xs font-medium text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap justify-between items-center gap-3">
              <button
                onClick={() => setSelectedProgram(null)}
                className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl"
              >
                Close Window
              </button>

              <a
                href="https://ipu.admissions.nic.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-900 to-indigo-900 text-white text-xs font-bold rounded-xl shadow-md hover:from-blue-950 hover:to-indigo-950 transition-all flex items-center space-x-1.5"
              >
                <span>Apply via GGSIPU Admission Portal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
