import React, { useState } from 'react';
import { FACILITIES_DATA } from '../data/campusData';
import { Facility } from '../types';
import { CheckCircle2, Eye, X, MapPin } from 'lucide-react';

export const CampusLife: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  return (
    <section id="facilities" className="py-16 px-4 md:px-8 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-900 text-xs font-black uppercase tracking-wider rounded-full border border-indigo-200">
            World-Class Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Campus Life & Facilities
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Spanning 18.75 acres in Surajmal Vihar, GGSIPU East Delhi Campus is built to net-zero environmental standards with cutting-edge academic and recreational infrastructure.
          </p>
        </div>

        {/* FACILITIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-black uppercase px-2.5 py-1 rounded-md border border-slate-800">
                    {item.category}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-900 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-3">
                <div className="space-y-1">
                  {item.highlights.slice(0, 2).map((hl, idx) => (
                    <div key={idx} className="flex items-center space-x-1.5 text-[11px] text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedFacility(item)}
                  className="w-full py-2 bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 font-bold text-xs rounded-xl transition-colors flex items-center justify-center space-x-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details & Photo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FACILITY DETAIL MODAL */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-slate-200 animate-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setSelectedFacility(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-950/60 text-white hover:bg-slate-950 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 bg-slate-950">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">
                  {selectedFacility.category}
                </span>
                <h3 className="text-2xl font-black">{selectedFacility.name}</h3>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-4 text-slate-700">
              <p className="text-xs md:text-sm leading-relaxed">{selectedFacility.description}</p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">Technical & Infrastructure Specifications</h4>
                <div className="space-y-2">
                  {selectedFacility.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="px-6 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-blue-900 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
