import React, { useState } from 'react';
import campusBannerImg from '../assets/images/ggsipu_campus_hd_1786450854228.jpg';
import { 
  Building2, 
  Sparkles, 
  Globe, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  BookOpen, 
  Award, 
  Zap, 
  ArrowRight, 
  ExternalLink,
  Search,
  School,
  Compass
} from 'lucide-react';

interface Props {
  onNavigateTab: (tab: any) => void;
}

export const CampusHomeView: React.FC<Props> = ({ onNavigateTab }) => {
  const [activeSection, setActiveSection] = useState<'usar' | 'usap' | 'aic' | 'admissions'>('usar');

  return (
    <div className="space-y-6">
      
      {/* HERO BANNER - BEAUTIFUL CAMPUS PHOTOGRAPH BACKGROUND WITH RICH OVERLAY */}
      <div className="relative text-white p-6 sm:p-8 rounded-3xl shadow-xl overflow-hidden space-y-6 min-h-[260px] bg-slate-900 border border-emerald-300/40">
        {/* Background Campus Image - Ultra High Resolution */}
        <img 
          src={campusBannerImg} 
          alt="GGSIPU East Delhi Campus Architecture" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90 brightness-110 contrast-105 scale-100 transition-all"
          referrerPolicy="no-referrer"
        />
        {/* Soft Contrast Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-emerald-950/50 to-transparent"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl bg-slate-950/40 p-4 sm:p-5 rounded-2xl backdrop-blur-xs border border-white/10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-600/90 text-white backdrop-blur-md rounded-full text-xs font-black border border-emerald-400/40 shadow-xs">
              <Globe className="w-3.5 h-3.5 text-lime-300" />
              <span>GGSIPU East Delhi Campus (EDC) Portal View</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              Guru Gobind Singh Indraprastha University <br />
              <span className="text-lime-300 font-black">East Delhi Campus, Surajmal Vihar</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed drop-shadow-xs">
              A premier 5.8-acre Net-Zero Eco-Friendly state campus housing two pioneer schools: <strong className="underline font-bold text-lime-200">USAR</strong> (Automation & Robotics) and <strong className="underline font-bold text-lime-200">USAP</strong> (Architecture & Planning).
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-bold">
              <span className="px-3 py-1 bg-slate-900/80 text-emerald-300 rounded-full border border-emerald-500/40 shadow-xs">Established 2021</span>
              <span className="px-3 py-1 bg-slate-900/80 text-lime-300 rounded-full border border-lime-500/40 shadow-xs">5.8-Acre Net-Zero Campus</span>
              <span className="px-3 py-1 bg-white/20 text-white rounded-full backdrop-blur-xs">NAAC A++ Grade</span>
              <span className="px-3 py-1 bg-white/20 text-white rounded-full backdrop-blur-xs">Atal Incubation Center (AIC)</span>
            </div>
          </div>

          <div className="flex flex-col space-y-2 shrink-0">
            <button
              onClick={() => onNavigateTab('attendance')}
              className="px-5 py-3 bg-lime-300 text-emerald-950 font-black text-xs rounded-2xl shadow-md transition-all flex items-center justify-center space-x-2 hover:bg-lime-200"
            >
              <span>View Batch Attendance</span>
              <ArrowRight className="w-4 h-4 text-emerald-900" />
            </button>

            <button
              onClick={() => onNavigateTab('assistant')}
              className="px-5 py-3 bg-black/20 hover:bg-black/30 text-white font-extrabold text-xs rounded-2xl border border-white/30 transition-all flex items-center justify-center space-x-2 backdrop-blur-xs"
            >
              <Sparkles className="w-4 h-4 text-lime-300" />
              <span>Ask AI EDC-Bot</span>
            </button>
          </div>
        </div>

        {/* QUICK JUMP NAVIGATION BAR */}
        <div className="pt-4 border-t border-white/20 flex flex-wrap items-center gap-2 relative z-10">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-100 mr-2">Quick Jump:</span>
          
          <button
            onClick={() => setActiveSection('usar')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSection === 'usar'
                ? 'bg-white text-zinc-900 shadow-md font-extrabold'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-xs'
            }`}
          >
            🤖 USAR (Automation & Robotics)
          </button>

          <button
            onClick={() => setActiveSection('usap')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSection === 'usap'
                ? 'bg-white text-zinc-900 shadow-md font-extrabold'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-xs'
            }`}
          >
            🏛️ USAP (Architecture & Planning)
          </button>

          <button
            onClick={() => setActiveSection('aic')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSection === 'aic'
                ? 'bg-white text-zinc-900 shadow-md font-extrabold'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-xs'
            }`}
          >
            🚀 AIC-GGSIPU Incubation Hub
          </button>

          <button
            onClick={() => setActiveSection('admissions')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSection === 'admissions'
                ? 'bg-white text-zinc-900 shadow-md font-extrabold'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-xs'
            }`}
          >
            🎓 Admissions 2026 Portal
          </button>
        </div>
      </div>

      {/* DYNAMIC CONTENT CONTAINER BASED ON QUICK JUMP */}
      {activeSection === 'usar' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/90 shadow-2xs space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-tr from-amber-500 via-rose-500 to-fuchsia-600 text-white rounded-2xl flex items-center justify-center font-extrabold text-base shadow-xs">
                USAR
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-900 text-lg">University School of Automation & Robotics</h3>
                <p className="text-xs text-zinc-500 font-medium">Flagship Technology & AI School at East Delhi Campus</p>
              </div>
            </div>
            <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              4-Year B.Tech
            </span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed">
            USAR is GGSIPU's pioneering school dedicated to future tech domains. Featuring world-class NVIDIA supercomputing clusters, KUKA 6-axis industrial robots, and automated IoT testing rigs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2">
              <h4 className="font-extrabold text-xs text-rose-600">B.Tech AI & Machine Learning (AIML)</h4>
              <p className="text-xs text-zinc-600">Deep Learning, Computer Vision, Transformers, Reinforcement Learning, Natural Language Processing.</p>
              <p className="text-[10px] font-mono font-bold text-zinc-500">Intake: 120 Seats • Split into Batch 1 & Batch 2 (Group A/B)</p>
            </div>

            <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2">
              <h4 className="font-extrabold text-xs text-rose-600">B.Tech AI & Data Science (AIDS)</h4>
              <p className="text-xs text-zinc-600">Big Data Analytics, Statistical Inference, Predictive Modeling, Data Engineering.</p>
              <p className="text-[10px] font-mono font-bold text-zinc-500">Intake: 120 Seats • Split into Batch 1 & Batch 2 (Group A/B)</p>
            </div>

            <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2">
              <h4 className="font-extrabold text-xs text-rose-600">B.Tech Automation & Robotics (AR)</h4>
              <p className="text-xs text-zinc-600">Industrial Kinematics, ROS 2 Framework, Control Systems, Embedded Actuators.</p>
              <p className="text-[10px] font-mono font-bold text-zinc-500">Intake: 120 Seats • Split into Batch 1 & Batch 2 (Group A/B)</p>
            </div>

            <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2">
              <h4 className="font-extrabold text-xs text-rose-600">B.Tech Industrial IoT (IIoT)</h4>
              <p className="text-xs text-zinc-600">Edge AI Devices, Smart Sensors, Cyber-Physical Systems, Wireless Networks.</p>
              <p className="text-[10px] font-mono font-bold text-zinc-500">Intake: 120 Seats • Split into Batch 1 & Batch 2 (Group A/B)</p>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'usap' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/90 shadow-2xs space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-sky-600 text-white rounded-2xl flex items-center justify-center font-extrabold text-base shadow-xs">
                USAP
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-900 text-lg">University School of Architecture & Planning</h3>
                <p className="text-xs text-zinc-500 font-medium">Pioneer School of Design & Urban Habitat</p>
              </div>
            </div>
            <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              5-Year B.Arch / B.Des
            </span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed">
            USAP offers eco-sensitive architectural pedagogy with spacious drafting halls, material simulation laboratories, and 3D prototyping suites.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2">
              <h4 className="font-extrabold text-xs text-sky-700">Bachelor of Architecture (B.Arch)</h4>
              <p className="text-xs text-zinc-600">5-Year Council of Architecture (CoA) approved program focusing on sustainable urbanism and BIM modeling.</p>
              <p className="text-[10px] font-mono font-bold text-zinc-500">Admissions via NATA / JEE Main Paper 2</p>
            </div>

            <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2">
              <h4 className="font-extrabold text-xs text-sky-700">Bachelor of Design (B.Des)</h4>
              <p className="text-xs text-zinc-600">4-Year program in Industrial Design, Interaction Design, and Environmental Spatial Arts.</p>
              <p className="text-[10px] font-mono font-bold text-zinc-500">Admissions via UCEED / NID Dat / IPU CET</p>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'aic' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/90 shadow-2xs space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-tr from-amber-500 via-rose-500 to-fuchsia-600 text-white rounded-2xl flex items-center justify-center font-extrabold text-base shadow-xs">
                AIC
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-900 text-lg">Atal Incubation Center (AIC-GGSIPU)</h3>
                <p className="text-xs text-zinc-500 font-medium">NITI Aayog Funded Startup Incubation Hub at EDC</p>
              </div>
            </div>
            <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              ₹10 Crore Grant
            </span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed">
            AIC-GGSIPU supports student founders with seed funds, patent assistance, cloud credits, and industrial mentorship.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-1">
              <span className="text-2xl font-black text-rose-600">35+</span>
              <p className="text-xs font-bold text-zinc-800">Incubated Startups</p>
            </div>
            <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-1">
              <span className="text-2xl font-black text-rose-600">₹4.2 Cr</span>
              <p className="text-xs font-bold text-zinc-800">Seed Funding Raised</p>
            </div>
            <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-1">
              <span className="text-2xl font-black text-rose-600">18</span>
              <p className="text-xs font-bold text-zinc-800">Patents Filed</p>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'admissions' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/90 shadow-2xs space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-extrabold text-base shadow-xs">
                IPU
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-900 text-lg">Admissions & Counseling 2026</h3>
                <p className="text-xs text-zinc-500 font-medium">GGSIPU East Delhi Campus Seat Matrix & Cutoffs</p>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              JEE Main Based
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <p className="font-semibold text-zinc-700">
              Admissions to B.Tech programs at USAR are conducted strictly via GGSIPU Online Counseling based on JEE Main All India Ranks.
            </p>
            <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2">
              <p><strong>Delhi Region Reservation:</strong> 85% Seats reserved for Delhi School Passing Candidates.</p>
              <p><strong>Outside Delhi Region:</strong> 15% All-India Quota Seats.</p>
              <p><strong>Batch Allocation:</strong> Admitted students are assigned to Batch 1 or Batch 2 during physical orientation based on roll numbers.</p>
            </div>
          </div>
        </div>
      )}

      {/* CAMPUS INFRASTRUCTURE & FACILITY PHOTO CARDS */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-200/90 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-100 pb-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-100 text-emerald-950 rounded-full text-xs font-black border border-emerald-300 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Surajmal Vihar Infrastructure</span>
            </div>
            <h3 className="font-extrabold text-zinc-900 text-xl">Campus Facilities & Academic Labs</h3>
          </div>

          <button
            onClick={() => onNavigateTab('gallery')}
            className="px-4 py-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center space-x-2 hover:opacity-95 transition-opacity"
          >
            <span>Open Full EDC Photo Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Card 0-A: Official EDC Surajmal Vihar Building Facade 1 */}
          <div className="group bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden flex flex-col justify-between hover:border-blue-500 transition-colors">
            <div className="relative h-36 bg-zinc-200 overflow-hidden">
              <img
                src="https://educationpost.in/_next/image?url=https%3A%2F%2Fiirfranking2.s3.ap-south-1.amazonaws.com%2F1776067092401-ggsipu.jpg&w=3840&q=75"
                alt="GGSIPU EDC Surajmal Vihar Academic Complex"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80";
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-blue-900/90 text-amber-300 font-extrabold text-[9px] rounded-md uppercase tracking-wider">
                GGSIPU EDC Campus
              </span>
            </div>
            <div className="p-3.5 space-y-1">
              <h4 className="font-extrabold text-xs text-zinc-900">Academic Block (EDC)</h4>
              <p className="text-[11px] text-zinc-600">Surajmal Vihar 5.8-acre net-zero academic building.</p>
            </div>
          </div>

          {/* Card 0-B: Official EDC Surajmal Vihar Building Facade 2 */}
          <div className="group bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden flex flex-col justify-between hover:border-blue-500 transition-colors">
            <div className="relative h-36 bg-zinc-200 overflow-hidden">
              <img
                src="https://github.com/EDCWEBSITE/EDC-Website/blob/main/Img/IMG-20230608-WA0021.jpg?raw=true"
                alt="GGSIPU EDC Surajmal Vihar Campus Building"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80";
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-blue-900/90 text-amber-300 font-extrabold text-[9px] rounded-md uppercase tracking-wider">
                Official EDC Facade
              </span>
            </div>
            <div className="p-3.5 space-y-1">
              <h4 className="font-extrabold text-xs text-zinc-900">GGSIPU EDC Building</h4>
              <p className="text-[11px] text-zinc-600">Surajmal Vihar main campus entrance.</p>
            </div>
          </div>

          {/* Card 1: USAR Robotics Lab */}
          <div className="group bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden flex flex-col justify-between hover:border-amber-400 transition-colors">
            <div className="relative h-36 bg-zinc-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
                alt="USAR Robotics Lab"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80";
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-zinc-900/90 text-white font-extrabold text-[9px] rounded-md uppercase tracking-wider">
                USAR Lab Block B
              </span>
            </div>
            <div className="p-3.5 space-y-1">
              <h4 className="font-extrabold text-xs text-zinc-900">Robotics & Automation Lab</h4>
              <p className="text-[11px] text-zinc-600">KUKA 6-axis industrial arms & PLC testing benches.</p>
            </div>
          </div>

          {/* Card 2: USAP Drafting Studio */}
          <div className="group bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden flex flex-col justify-between hover:border-indigo-400 transition-colors">
            <div className="relative h-36 bg-zinc-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
                alt="USAP Architecture Studio"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80";
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-indigo-900/90 text-white font-extrabold text-[9px] rounded-md uppercase tracking-wider">
                USAP Design Block
              </span>
            </div>
            <div className="p-3.5 space-y-1">
              <h4 className="font-extrabold text-xs text-zinc-900">Architecture Drafting Hall</h4>
              <p className="text-[11px] text-zinc-600">Spacious drafting tables & 3D urban scale models.</p>
            </div>
          </div>

          {/* Card 3: EDC Library */}
          <div className="group bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden flex flex-col justify-between hover:border-rose-400 transition-colors">
            <div className="relative h-36 bg-zinc-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
                alt="EDC Central Library"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=600&q=80";
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-rose-900/90 text-white font-extrabold text-[9px] rounded-md uppercase tracking-wider">
                Library 5th/6th Fl.
              </span>
            </div>
            <div className="p-3.5 space-y-1">
              <h4 className="font-extrabold text-xs text-zinc-900">Central Digital Resource Center</h4>
              <p className="text-[11px] text-zinc-600">25,000+ journals & IEEE Xplore digital terminals.</p>
            </div>
          </div>

          {/* Card 4: AIC Incubation Bay */}
          <div className="group bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden flex flex-col justify-between hover:border-emerald-400 transition-colors">
            <div className="relative h-36 bg-zinc-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
                alt="Atal Incubation Center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80";
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 bg-emerald-900/90 text-white font-extrabold text-[9px] rounded-md uppercase tracking-wider">
                AIC Innovation Wing
              </span>
            </div>
            <div className="p-3.5 space-y-1">
              <h4 className="font-extrabold text-xs text-zinc-900">3D Prototyping Workshop</h4>
              <p className="text-[11px] text-zinc-600">Laser cutters & PCB printers funded by NITI Aayog.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
