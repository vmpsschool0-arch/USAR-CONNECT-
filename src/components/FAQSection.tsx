import React, { useState } from 'react';
import { FAQ_DATA } from '../data/campusData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* HEADER */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm">
            Answers regarding GGSIPU East Delhi Campus admissions, cut-offs, attendance rules, and hostel facilities.
          </p>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="space-y-3">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 text-left bg-slate-50/80 hover:bg-slate-100/80 flex justify-between items-center space-x-4 font-bold text-slate-900 text-sm transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-900 text-[10px] font-black uppercase rounded">
                      {item.category}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 bg-white text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
