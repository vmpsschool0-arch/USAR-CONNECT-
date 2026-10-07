import React, { useState } from 'react';
import { NOTICES_DATA } from '../data/campusData';
import { Bell, Search, ExternalLink, Calendar, Filter, Sparkles, AlertCircle } from 'lucide-react';

export const NoticesWidget: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Admissions', 'Exams', 'Academic', 'Events'];

  const filteredNotices = NOTICES_DATA.filter((notice) => {
    const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          notice.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="notices" className="py-16 px-4 md:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER & TICKER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="p-1.5 bg-amber-100 text-amber-800 rounded-lg">
                <Bell className="w-5 h-5" />
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600">
                Official Campus Ticker
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Notices, Circulars & Announcements
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Stay updated with real-time admissions, examination date sheets, and academic orders.
            </p>
          </div>

          {/* SEARCH BOX */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search circulars, exams, dates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* CATEGORY FILTER CHIPS */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-slate-400 flex items-center space-x-1 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* NOTICES LIST CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50/70 border border-slate-200 rounded-2xl p-5 hover:border-blue-500 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-2.5 py-1 bg-blue-100 text-blue-900 text-[10px] font-black uppercase rounded-md border border-blue-200">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm mb-2 leading-snug hover:text-blue-900 cursor-pointer">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                  {item.isImportant ? (
                    <span className="flex items-center space-x-1 text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                      <AlertCircle className="w-3 h-3" />
                      <span>HIGH PRIORITY</span>
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-slate-400 uppercase">
                      GGSIPU EDC
                    </span>
                  )}

                  <a
                    href="https://ipu.admissions.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-blue-900 hover:text-indigo-600 flex items-center space-x-1 transition-colors"
                  >
                    <span>{item.linkText || 'View Document'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              <Sparkles className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold">No notices matching "{searchQuery}" in category "{selectedCategory}"</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
