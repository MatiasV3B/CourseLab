import React, { useState, useEffect } from 'react';
import { CourseLabLogo } from './CourseLabLogo';
import { Menu, X, ArrowRight, Star } from 'lucide-react';
import { GitHubIcon } from './GitHubStarButton';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on escape key or resize to desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#curricula', label: 'Curricula' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#why-courselab', label: 'Why CourseLab' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
    { href: '#community', label: 'Community' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group">
          <div className="relative transition-transform group-hover:scale-105 duration-200 flex-shrink-0">
            <div className="sm:hidden">
              <CourseLabLogo size={38} className="drop-shadow-xs" />
            </div>
            <div className="hidden sm:block">
              <CourseLabLogo size={52} className="drop-shadow-sm" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 flex items-center gap-1.5">
              CourseLab
              <span className="inline-block w-2 h-2 rounded-full bg-[#1D72FE] shadow-[0_0_6px_rgba(29,114,254,0.6)]" />
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-slate-500 uppercase font-semibold">
              AP · IB Intelligence
            </span>
          </div>
        </a>

        {/* Desktop Smooth-scroll Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#1D72FE] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Waitlist CTA & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#1D72FE] hover:bg-[#1558CC] shadow-md shadow-[#1D72FE]/25 hover:shadow-[#1D72FE]/35 transition-all duration-200 active:scale-95"
          >
            Join Waitlist
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 border border-slate-200 transition-all active:scale-95 cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#1D72FE] hover:bg-blue-50/70 transition-all"
              >
                <span>{link.label}</span>
                <ArrowRight className="size-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="#waitlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#1D72FE] hover:bg-[#1558CC] shadow-md shadow-[#1D72FE]/20 transition-all active:scale-95 text-center"
              >
                <span>Join Priority Waitlist</span>
                <ArrowRight className="size-4" />
              </a>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://github.com/MatiasV3B/CourseLab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all"
                >
                  <GitHubIcon className="size-3.5 text-slate-800" />
                  <span>Star on GitHub</span>
                  <Star className="size-3 text-amber-500 fill-amber-400" />
                </a>
                <a
                  href="https://discord.gg/DE96t7w4XJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#5865F2] bg-[#EEF2FF] border border-[#C7D2FE] hover:bg-[#E0E7FF] transition-all"
                >
                  <span>Discord Community</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
