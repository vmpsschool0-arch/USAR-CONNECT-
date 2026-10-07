import React, { useState } from 'react';
import { X, MapPin, Building, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

interface VirtualTourModalProps {
  onClose: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({ onClose }) => {
  const [activeBlock, setActiveBlock] = useState<'blockA' | 'blockB' | 'blockC' | 'sports'>('blockA');

  const blocks = {
    blockA: {
      title: "Academic Block A (Engineering & Lectures)",
      description: "Houses smart air-conditioned lecture theatres, USAR Dean's Office, AIML & AI-DS Department faculty chambers, and high-performance server rooms.",
      highlights: ["30+ Smart Lecture Halls", "NVIDIA AI Workstation Farm", "USAR Academic Office"],
      image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80"
    },
    blockB: {
      title: "Lab Block B (Robotics & Design Studios)",
      description: "Dedicated 6-story lab complex featuring 6-axis industrial manipulator arms, IIoT testbeds, USAP architectural drafting studios, laser routers, and carpentry workshops.",
      highlights: ["Industrial Manipulators & ROS 2 Lab", "USAP Architecture Studios", "Laser Cutting Prototyping Bay"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80"
    },
    blockC: {
      title: "Central Block C (Library, AIC & Auditorium)",
      description: "Multi-story central hub housing the 40,000+ volume Central Library, Atal Incubation Centre (AIC-GGSIPU), 500-seat main auditorium, and food court.",
      highlights: ["Atal Incubation Centre (AIC GGSIPU)", "Central Library Reading Pods", "500-Seat Main Auditorium"],
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80"
    },
    sports: {
      title: "Sports Complex & Green Campus Grounds",
      description: "Net-zero green campus featuring solar panel rooftops, rainwater harvesting systems, indoor badminton courts, gymnasium, and open-air amphitheatre.",
      highlights: ["Solar Rooftop Energy Plant", "Indoor Sports Court & Gym", "Open Air Amphitheatre"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
    }
  };

  const current = blocks[activeBlock];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 text-white rounded-3xl max-w-4xl w-full border border-slate-800 shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-950/70 text-slate-300 hover:text-white hover:bg-slate-950 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* MODAL HEADER */}
        <div className="p-6 border-b border-slate-800 bg-slate-950 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white">GGSIPU East Delhi Campus Virtual Map</h3>
            <p className="text-xs text-slate-400">Surajmal Vihar • Net-Zero 18.75 Acre Campus Tour</p>
          </div>
        </div>

        {/* BLOCK SELECTOR TABS */}
        <div className="bg-slate-950/50 p-2 flex border-b border-slate-800 overflow-x-auto space-x-2">
          {(['blockA', 'blockB', 'blockC', 'sports'] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActiveBlock(key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeBlock === key
                  ? 'bg-blue-900 text-amber-300 border border-blue-700 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {key === 'blockA' && 'Academic Block A'}
              {key === 'blockB' && 'Lab Block B'}
              {key === 'blockC' && 'Central Block C'}
              {key === 'sports' && 'Sports & Green Grounds'}
            </button>
          ))}
        </div>

        {/* BLOCK DETAILS VIEW */}
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6 relative h-64 rounded-2xl overflow-hidden border border-slate-800">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 bg-blue-950/90 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-md border border-blue-800">
              Interactive View
            </div>
          </div>

          <div className="md:col-span-6 space-y-4">
            <div>
              <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">
                Surajmal Vihar Campus
              </span>
              <h4 className="text-xl font-bold text-white mt-1">{current.title}</h4>
            </div>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {current.description}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Key Facilities in this zone:</span>
              {current.highlights.map((h, i) => (
                <div key={i} className="flex items-center space-x-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-950 border-t border-slate-800 text-center text-xs text-slate-400">
          Located at Surajmal Vihar, East Delhi - 110092 • Nearest Metro: Karkardooma / Anand Vihar ISBT
        </div>

      </div>
    </div>
  );
};
