import React from 'react';
import { CAMPUS_INFO } from '../data/campusData';
import { Building2, Mail, Phone, MapPin, ExternalLink, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenPortal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-8 px-4 md:px-8 text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* COL 1: BRAND & ABOUT */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center text-amber-400 font-extrabold text-xs shadow-md">
                IPU EDC
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base">GGSIPU East Delhi Campus</h3>
                <p className="text-[11px] text-slate-400">Guru Gobind Singh Indraprastha University</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              State-of-the-art 18.75-acre smart campus in Surajmal Vihar housing the University School of Automation & Robotics (USAR), University School of Architecture & Planning (USAP), and Atal Incubation Centre (AIC GGSIPU).
            </p>

            <div className="pt-2 flex items-center space-x-2 text-[11px] text-amber-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>NAAC Grade 'A++' Accredited Government State University</span>
            </div>
          </div>

          {/* COL 2: ACADEMIC SCHOOLS */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Academic Schools</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onSelectTab('schools')} className="hover:text-amber-300 transition-colors">
                  USAR - B.Tech AIML & AI-DS
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('schools')} className="hover:text-amber-300 transition-colors">
                  USAR - B.Tech Robotics & IIoT
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('schools')} className="hover:text-amber-300 transition-colors">
                  USAP - Bachelor of Architecture (B.Arch)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('schools')} className="hover:text-amber-300 transition-colors">
                  USAP - B.Des (Interior, Industrial, UX)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('incubation')} className="hover:text-amber-300 transition-colors">
                  Atal Incubation Centre (AIC GGSIPU)
                </button>
              </li>
            </ul>
          </div>

          {/* COL 3: QUICK LINKS & MANDATORY DISCLOSURES */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Mandatory Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={onOpenPortal} className="text-amber-300 hover:underline font-bold">
                  Student Portal Login
                </button>
              </li>
              <li>
                <a href="https://ipu.admissions.nic.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                  GGSIPU Admissions 2026 Portal
                </a>
              </li>
              <li>
                <a href="https://www.ipu.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                  Anti-Ragging Cell & Helpline
                </a>
              </li>
              <li>
                <a href="https://www.ipu.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
                  Internal Complaints Committee (ICC)
                </a>
              </li>
              <li>
                <button onClick={() => onSelectTab('notices')} className="hover:text-amber-300 transition-colors">
                  Exam Date Sheets & Results
                </button>
              </li>
            </ul>
          </div>

          {/* COL 4: CONTACT & MAP */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Campus Address</h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{CAMPUS_INFO.address}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{CAMPUS_INFO.email}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{CAMPUS_INFO.phone}</span>
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=GGSIPU+East+Delhi+Campus+Surajmal+Vihar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-blue-900/60 hover:bg-blue-800 text-amber-300 rounded-lg border border-blue-700/50 transition-colors font-semibold"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 GGSIPU East Delhi Campus (EDC). Guru Gobind Singh Indraprastha University. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg transition-colors flex items-center space-x-1"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
