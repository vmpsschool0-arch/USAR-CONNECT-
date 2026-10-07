import React, { useState } from 'react';
import { Menu, X, Bot, GraduationCap, Building2, BookOpen, Compass, Sparkles, MapPin, Search } from 'lucide-react';
import { CAMPUS_INFO } from '../data/campusData';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Building2 },
    { id: 'schools', label: 'USAR & USAP', icon: BookOpen },
    { id: 'admissions', label: 'Admissions 2026', icon: GraduationCap },
    { id: 'incubation', label: 'Research & AIC', icon: Compass },
    { id: 'facilities', label: 'Campus Life', icon: MapPin },
    { id: 'notices', label: 'Notices', icon: Sparkles },
    { id: 'chatbot', label: 'AI Assistant', icon: Bot, badge: 'AI' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        
        {/* BRAND LOGO & TITLE */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 flex items-center justify-center text-white shadow-md border border-blue-800/30 group-hover:scale-105 transition-transform">
            <div className="text-center">
              <span className="font-extrabold text-sm tracking-tight text-amber-400 block leading-none">IPU</span>
              <span className="text-[9px] font-bold text-slate-200 block tracking-widest leading-none mt-0.5">EDC</span>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-extrabold text-slate-900 text-base md:text-lg tracking-tight group-hover:text-blue-900 transition-colors">
                GGSIPU East Delhi Campus
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded-full border border-amber-300">
                Surajmal Vihar
              </span>
            </div>
            <p className="text-xs text-slate-500 font-semibold flex items-center space-x-1">
              <span>USAR</span>
              <span className="text-amber-500">•</span>
              <span>USAP</span>
              <span className="text-amber-500">•</span>
              <span className="text-indigo-600">AIC GGSIPU</span>
            </p>
          </div>
        </div>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center space-x-1 font-semibold text-sm">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl transition-all relative ${
                  isActive
                    ? 'text-blue-900 bg-blue-50 font-bold shadow-sm'
                    : 'text-slate-600 hover:text-blue-900 hover:bg-slate-100/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-900' : 'text-slate-500'}`} />
                <span>{link.label}</span>
                {link.badge && (
                  <span className="bg-amber-400 text-slate-950 font-black text-[9px] px-1.5 py-0.2 rounded uppercase ml-1 animate-pulse">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* RIGHT ACTION BUTTONS */}
        <div className="flex items-center space-x-2">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-blue-900 hover:bg-slate-100 rounded-xl transition-colors"
              title="Search Campus Site"
            >
              <Search className="w-5 h-5" />
            </button>
          )}

          <button
            onClick={() => handleNavClick('portal')}
            className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-950 hover:to-indigo-950 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all hover:scale-[1.02]"
          >
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>Student Portal</span>
          </button>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-900 text-white font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span>{link.label}</span>
                </div>
                {link.badge && (
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded uppercase">
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-2">
            <button
              onClick={() => handleNavClick('portal')}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-bold text-sm py-3 rounded-xl shadow-md"
            >
              <GraduationCap className="w-5 h-5 text-amber-400" />
              <span>Enter Student Portal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
