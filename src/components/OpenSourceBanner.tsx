import React, { useState } from 'react';
import { Star, Sparkles, X, Terminal, ArrowRight } from 'lucide-react';
import { GitHubIcon, GITHUB_REPO_URL } from './GitHubStarButton';

interface OpenSourceBannerProps {
  onOpenModal: () => void;
}

export const OpenSourceBanner: React.FC<OpenSourceBannerProps> = ({ onOpenModal }) => {
  const [isVisible, setIsVisible] = useState(() => {
    return sessionStorage.getItem('courselab_dismiss_banner') !== 'true';
  });

  if (!isVisible) return null;

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('courselab_dismiss_banner', 'true');
  };

  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-[#0F172A] to-slate-900 text-white text-xs font-medium py-2.5 px-4 border-b border-slate-800 z-50 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left / Center Message */}
        <div className="flex items-center gap-2.5 mx-auto text-center sm:text-left flex-wrap justify-center">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase tracking-wider">
            <Sparkles className="size-3" /> Open Source
          </span>
          <span className="text-slate-200">
            CourseLab es 100% de código abierto. ¡Consíguelo gratis y apóyanos con una <strong className="text-amber-300 font-semibold">estrella en GitHub</strong>!
          </span>

          <div className="inline-flex items-center gap-2">
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-150 active:scale-95 group"
            >
              <GitHubIcon className="size-3.5" />
              <span>Dar Star ⭐</span>
            </a>

            <button
              type="button"
              onClick={onOpenModal}
              className="hidden md:inline-flex items-center gap-1 text-slate-400 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
            >
              <Terminal className="size-3" />
              <span>Cómo conseguirlo</span>
              <ArrowRight className="size-3" />
            </button>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          type="button"
          onClick={handleDismiss}
          className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0 cursor-pointer"
          aria-label="Cerrar banner"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
};
