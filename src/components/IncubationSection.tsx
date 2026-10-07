import React from 'react';
import { Compass, Sparkles, Rocket, Lightbulb, ShieldAlert, Award, ChevronRight, CheckCircle2 } from 'lucide-react';

export const IncubationSection: React.FC = () => {
  return (
    <section id="incubation" className="py-16 px-4 md:px-8 bg-slate-950 text-white relative overflow-hidden">
      
      {/* GLOW DECORATIONS */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black uppercase rounded-full">
            Atal Innovation Mission • NITI Aayog
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Innovation, Incubation & Entrepreneurship
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            GGSIPU East Delhi Campus is home to the Atal Incubation Centre (AIC GGSIPU) and Entrepreneurship Cell (E-Cell), bridging student innovations with commercial venture funding.
          </p>
        </div>

        {/* MAIN FEATURE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT AIC SPOTLIGHT CARD */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-white">Atal Incubation Centre (AIC-GGSIPU)</h3>
                  <p className="text-xs text-amber-300 font-medium">Supported by NITI Aayog & GGSIPU University</p>
                </div>
              </div>
              <span className="bg-indigo-900/60 text-indigo-200 text-xs font-bold px-3 py-1 rounded-full border border-indigo-700/50">
                Cohort 2026
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              AIC GGSIPU provides dedicated co-working space, hardware rapid prototyping machinery, legal IP support, and direct access to venture capital funds up to <strong className="text-amber-300">₹5 Crores</strong> for promising AI, Robotics, Hardware, and Architecture startups.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center space-x-3">
                <Lightbulb className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white">Pre-Incubation Grants</h4>
                  <p className="text-[11px] text-slate-400">Up to ₹5 Lakh prototype funds</p>
                </div>
              </div>

              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center space-x-3">
                <Award className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white">Patent & Legal Desk</h4>
                  <p className="text-[11px] text-slate-400">Free patent attorney guidance</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Industry Technology Partners</span>
              <div className="flex flex-wrap gap-2">
                {['NVIDIA AI', 'Siemens Automation', 'ABB Robotics', 'Autodesk', 'Texas Instruments', 'COA Research'].map((partner, idx) => (
                  <span key={idx} className="bg-slate-800/80 text-slate-200 text-xs font-semibold px-3 py-1 rounded-lg border border-slate-700">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT E-CELL & HACKATHON CARDS */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-800/50 p-6 rounded-3xl space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">USAR & USAP E-Cell</h4>
                  <p className="text-xs text-indigo-300">Entrepreneurship Development Cell</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Organizes annual Ideathons, Hardware Hackathons, Founder Talks, and Venture Pitching Competitions to foster an entrepreneurial mindset among engineering and design undergraduates.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-950/60 to-slate-900 border border-amber-800/50 p-6 rounded-3xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black uppercase text-amber-400">Upcoming Flagship Event</span>
                <span className="text-[10px] bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded uppercase">AUG 2026</span>
              </div>
              <h4 className="font-extrabold text-white text-lg">National Hardware & AI Hackathon '26</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                48-Hour continuous prototyping sprint for AI models, autonomous robotics, and sustainable architectural design. Cash prizes worth ₹1,00,000 + Instant Incubation offers.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
