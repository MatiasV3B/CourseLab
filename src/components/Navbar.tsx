import React from 'react';
import { CourseLabLogo } from './CourseLabLogo';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-slate-200/80 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative transition-transform group-hover:scale-105 duration-200 flex-shrink-0">
            <CourseLabLogo size={52} className="drop-shadow-sm" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-2xl tracking-tight text-slate-900 flex items-center gap-1.5">
              CourseLab
              <span className="inline-block w-2 h-2 rounded-full bg-[#1D72FE] shadow-[0_0_6px_rgba(29,114,254,0.6)]" />
            </span>
            <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase font-semibold">
              AP · IB Intelligence
            </span>
          </div>
        </a>

        {/* Smooth-scroll Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-[#1D72FE] transition-colors duration-150">
            About
          </a>
          <a href="#how-it-works" className="hover:text-[#1D72FE] transition-colors duration-150">
            How It Works
          </a>
          <a href="#why-courselab" className="hover:text-[#1D72FE] transition-colors duration-150">
            Why CourseLab
          </a>
          <a href="#integrations" className="hover:text-[#1D72FE] transition-colors duration-150">
            Integrations
          </a>
          <a href="#pricing" className="hover:text-[#1D72FE] transition-colors duration-150">
            Pricing
          </a>
          <a href="#reviews" className="hover:text-[#1D72FE] transition-colors duration-150">
            Reviews
          </a>
          <a href="#community" className="hover:text-[#1D72FE] transition-colors duration-150">
            Community
          </a>
        </nav>

        {/* Right Action: Waitlist Pill CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium text-white bg-[#1D72FE] hover:bg-[#1558CC] shadow-md shadow-[#1D72FE]/25 hover:shadow-[#1D72FE]/35 transition-all duration-200 active:scale-95 font-semibold"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </header>
  );
};
