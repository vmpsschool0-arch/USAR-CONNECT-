import React from 'react';
import { ArrowRight, Sparkles, GraduationCap, Compass, Bot, CheckCircle2, Building, ShieldCheck, Flame } from 'lucide-react';

interface HeroProps {
  onExplorePrograms: () => void;
  onAdmissionsClick: () => void;
  onOpenVirtualTour: () => void;
  onOpenChatbot: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplorePrograms,
  onAdmissionsClick,
  onOpenVirtualTour,
  onOpenChatbot,
}) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      {/* BACKGROUND IMAGE & OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1920&q=80"
          alt="GGSIPU East Delhi Campus Architecture"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950/90 to-indigo-950/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-16 md:pt-20 md:pb-24">
        
        {/* TOP ACCREDITATION & ADMISSIONS ALERT */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold tracking-wide">
            <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>ADMISSIONS 2026 OPEN</span>
          </span>

          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-900/60 text-blue-200 border border-blue-700/50 text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>GGSIPU Government University • NAAC Grade A++</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT MAIN TEXT CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Empowering Innovation, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                Technology & Design
              </span> <br />
              at East Delhi Campus
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              Home to <strong className="text-white font-semibold">USAR (Automation & Robotics)</strong> and{' '}
              <strong className="text-white font-semibold">USAP (Architecture & Planning)</strong>. Fostering next-generation engineers, AI specialists, designers, and architects in a state-of-the-art net-zero green campus in Surajmal Vihar.
            </p>

            {/* HIGHLIGHT BULLETS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2 text-xs md:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>B.Tech in AIML, AI-DS, Robotics & IIoT</span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>B.Arch, B.Des, M.Des & Urban Planning</span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>AIC GGSIPU Startup Incubation Fund</span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>25+ Industry 4.0 Advanced Hardware Labs</span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onExplorePrograms}
                className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] flex items-center space-x-2"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onAdmissionsClick}
                className="px-6 py-3.5 bg-blue-900/80 hover:bg-blue-800 text-white font-bold text-sm rounded-xl border border-blue-700/60 shadow-md transition-all flex items-center space-x-2"
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>Admissions 2026</span>
              </button>

              <button
                onClick={onOpenVirtualTour}
                className="px-5 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700/60 transition-all flex items-center space-x-2"
              >
                <Compass className="w-4 h-4 text-indigo-400" />
                <span>Virtual Campus Tour</span>
              </button>

              <button
                onClick={onOpenChatbot}
                className="px-4 py-3.5 bg-indigo-600/90 hover:bg-indigo-600 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center space-x-2"
              >
                <Bot className="w-4 h-4 text-amber-300" />
                <span>Ask AI Assistant</span>
              </button>
            </div>
          </div>

          {/* RIGHT HERO FEATURE CARD */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 p-6 md:p-8 rounded-3xl shadow-2xl backdrop-blur-xl relative overflow-hidden group">
              
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl group-hover:bg-blue-600/30 transition-all"></div>

              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">GGSIPU East Delhi Campus</h3>
                    <p className="text-xs text-slate-400">Surajmal Vihar, Delhi 110092</p>
                  </div>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-emerald-500/30">
                  LIVE CAMPUS
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 hover:border-blue-700/50 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-amber-400 tracking-wider">USAR Engineering</span>
                      <h4 className="text-sm font-bold text-white mt-0.5">University School of Automation & Robotics</h4>
                    </div>
                    <span className="text-xs text-blue-300 font-semibold bg-blue-900/50 px-2 py-0.5 rounded">4 B.Tech Degrees</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    AIML, Data Science, Industrial IoT, Automation & Robotics with 6-axis hardware manipulators.
                  </p>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 hover:border-amber-700/50 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-amber-400 tracking-wider">USAP Design & Architecture</span>
                      <h4 className="text-sm font-bold text-white mt-0.5">University School of Architecture & Planning</h4>
                    </div>
                    <span className="text-xs text-amber-300 font-semibold bg-amber-900/50 px-2 py-0.5 rounded">COA Approved</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    B.Arch, B.Des (Interior, Industrial, Interaction), M.Des & Urban Planning studios.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-indigo-900/40 to-blue-900/40 p-3.5 rounded-xl border border-indigo-700/40 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="font-semibold text-slate-200">Atal Incubation Centre (AIC GGSIPU)</span>
                  </div>
                  <span className="text-amber-300 font-bold">₹5 Cr Grants</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
