import React from 'react';
import { CourseLabLogo } from './CourseLabLogo';
import { LegalDocType } from './LegalModal';
import { GitHubIcon } from './GitHubStarButton';

interface FooterProps {
  onOpenLegal: (doc: LegalDocType) => void;
}

const DiscordIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-14 relative z-10 text-xs text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand column */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <CourseLabLogo size={44} className="drop-shadow-sm" />
              <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900">
                CourseLab
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              The interactive notebook platform engineered for advanced high school curricula. Powered by verified syllabi and connected classrooms.
            </p>
            <div className="font-mono text-[11px] text-[#1D72FE] font-semibold">
              ACADEMIC YEAR 2026-2027 COHORT
            </div>
            {/* GitHub & Discord Community Buttons in Footer Brand */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href="https://github.com/MatiasV3B/CourseLab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-black text-white font-semibold text-xs transition-all duration-150 hover:scale-[1.02] active:scale-95 shadow-xs"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>Star on GitHub</span>
                <span className="text-amber-400 font-mono">★</span>
              </a>
              <a
                href="https://discord.gg/DE96t7w4XJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/20 text-[#5865F2] font-semibold text-xs transition-all duration-150 hover:scale-[1.02] active:scale-95"
              >
                <DiscordIcon className="w-4 h-4 fill-[#5865F2]" />
                <span>Discord</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-2">
            <div className="font-mono text-[11px] text-slate-900 uppercase tracking-wider mb-2 font-bold">
              Platform
            </div>
            <div><a href="#how-it-works" className="hover:text-[#1D72FE] transition-colors">How It Works</a></div>
            <div><a href="#why-courselab" className="hover:text-[#1D72FE] transition-colors">Why CourseLab</a></div>
            <div><a href="#integrations" className="hover:text-[#1D72FE] transition-colors">Integrations</a></div>
            <div><a href="#pricing" className="hover:text-[#1D72FE] transition-colors">Pricing Matrix</a></div>
            <div><a href="#reviews" className="hover:text-[#1D72FE] transition-colors">Reviews</a></div>
            <div>
              <a 
                href="https://discord.gg/DE96t7w4XJ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 hover:text-[#5865F2] transition-colors text-slate-600"
              >
                <span>Discord Community</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#5865F2]/10 text-[#5865F2] font-semibold">Live</span>
              </a>
            </div>
          </div>

          {/* Courses in Development */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="font-mono text-[11px] text-slate-900 uppercase tracking-wider mb-2 font-bold">
              Courses
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              In development. Join the Discord to suggest new courses and vote for these.
            </p>
            <a
              href="https://discord.gg/DE96t7w4XJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5865F2] hover:underline font-semibold"
            >
              <DiscordIcon className="w-3.5 h-3.5 fill-[#5865F2]" />
              <span>Suggest Courses &amp; Vote &rarr;</span>
            </a>
          </div>

          {/* Student Safety & Legal */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-[11px] text-slate-900 uppercase tracking-wider mb-2 font-bold">
              Student Safety
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Strictly FERPA and COPPA compliant. Student notebooks and classroom queries are isolated and never used to train public generative models.
            </p>
            <div className="pt-2 flex items-center gap-3 text-slate-700">
              <button
                type="button"
                onClick={() => onOpenLegal('terms')}
                className="hover:text-[#1D72FE] hover:underline transition-colors text-xs font-medium cursor-pointer"
              >
                Terms of Service
              </button>
              <span className="text-slate-300">•</span>
              <button
                type="button"
                onClick={() => onOpenLegal('privacy')}
                className="hover:text-[#1D72FE] hover:underline transition-colors text-xs font-medium cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            Copyright &copy; 2026 CourseLab, Inc. All rights reserved. Advanced Placement&reg; and AP&reg; are trademarks registered by the College Board, which is not affiliated with, and does not endorse, this product.
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="https://github.com/MatiasV3B/CourseLab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <GitHubIcon className="w-3.5 h-3.5 fill-current" />
              <span>github.com/MatiasV3B/CourseLab</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <a
              href="https://discord.gg/DE96t7w4XJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#5865F2] transition-colors"
            >
              <DiscordIcon className="w-3.5 h-3.5 fill-current" />
              <span>discord.gg/DE96t7w4XJ</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <div className="font-mono font-medium">
              Designed with CourseLab Modern v1.0
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
