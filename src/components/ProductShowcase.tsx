import React from 'react';
import { AppMockup } from './AppMockup';

export const ProductShowcase: React.FC = () => {
  return (
    <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-mono tracking-widest text-[#1D72FE] uppercase font-semibold">
          Product Showcase
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
          Inside CourseLab.
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-2">
          The next-generation interactive notebook and connected classroom environment for AP &amp; IB curricula.
        </p>

        {/* Prominent Mockup Notice */}
        <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium shadow-xs">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span>
            <strong className="font-semibold">Simulated Interface Preview:</strong> This interactive workspace demo is a visual mockup to preview upcoming features — <strong>not the live software</strong>.
          </span>
        </div>
      </div>

      {/* Floating Canvas Browser Frame with Soft Light Ambient Glow */}
      <div className="relative group z-10">
        
        {/* Soft Ambient Glow backdrop */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#1D72FE]/15 via-[#52C1FF]/20 to-[#1D72FE]/15 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />

        {/* Main Browser Frame */}
        <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-300/40 overflow-hidden flex flex-col relative z-10">
          
          {/* Browser Chrome Header Bar */}
          <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between flex-shrink-0">
            {/* Traffic lights */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>

            {/* Light URL Pill */}
            <div className="px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-mono text-slate-600 flex items-center gap-2 max-w-md w-full justify-center">
              <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-[#1D72FE] font-medium">https://</span>courselab.app/workspace/overview
            </div>

            {/* Mockup Status Tag */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-amber-50 text-amber-900 border border-amber-300 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                SIMULATED MOCKUP · NOT REAL SOFTWARE
              </span>
            </div>
          </div>

          {/* Frame Canvas Content: Live App Mockup with All Menus */}
          <div className="relative flex-1 w-full bg-white overflow-hidden">
            <AppMockup />
          </div>

          {/* Frame Bottom Status Bar */}
          <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500 flex-shrink-0">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              CourseLab Prototype Demonstration · Visual Mockup (Non-production preview)
            </span>
            <span className="hidden sm:inline font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-200">
              Simulated Mockup
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
