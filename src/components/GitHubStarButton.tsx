import React, { useState, useEffect } from 'react';
import { Star, GitFork, Sparkles } from 'lucide-react';

export const GitHubIcon = ({ className = "size-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

interface GitHubStarButtonProps {
  variant?: 'navbar' | 'hero' | 'badge' | 'footer';
  onOpenModal?: () => void;
  className?: string;
}

export const GITHUB_REPO_URL = 'https://github.com/MatiasV3B/CourseLab';

export const GitHubStarButton: React.FC<GitHubStarButtonProps> = ({
  variant = 'navbar',
  onOpenModal,
  className = '',
}) => {
  const [starCount, setStarCount] = useState<number | null>(null);

  useEffect(() => {
    // Check cached star count first
    const cached = sessionStorage.getItem('courselab_gh_stars');
    if (cached !== null) {
      setStarCount(parseInt(cached, 10));
      return;
    }

    // Fetch from GitHub API with graceful fallback
    fetch('https://api.github.com/repos/MatiasV3B/CourseLab')
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data) => {
        if (typeof data.stargazers_count === 'number') {
          setStarCount(data.stargazers_count);
          sessionStorage.setItem('courselab_gh_stars', data.stargazers_count.toString());
        }
      })
      .catch(() => {
        // Fallback: don't break UI if rate-limited or offline
      });
  }, []);

  if (variant === 'hero') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm hover:shadow-md hover:border-slate-400 transition-all duration-200 active:scale-95 group cursor-pointer"
        >
          <GitHubIcon className="size-5 text-slate-900 group-hover:scale-110 transition-transform duration-200" />
          <span>Star on GitHub</span>
          <span className="inline-flex items-center gap-1 pl-2 border-l border-slate-200 text-slate-600 font-mono text-xs">
            <Star className="size-4 text-amber-500 fill-amber-400 group-hover:rotate-12 transition-transform duration-200" />
            <span>{starCount !== null ? starCount : '★'}</span>
          </span>
        </a>

        {onOpenModal && (
          <button
            type="button"
            onClick={onOpenModal}
            className="hidden sm:inline-flex items-center justify-center px-4 py-4 rounded-full text-sm font-semibold text-[#1D72FE] hover:text-blue-700 hover:bg-blue-50/80 transition-all cursor-pointer"
            title="¿Cómo conseguir CourseLab?"
          >
            ¿Cómo conseguirlo? &rarr;
          </button>
        )}
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-slate-900/5 hover:bg-slate-900/10 border border-slate-200/80 transition-all">
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-slate-700 hover:text-slate-900 group"
        >
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] uppercase font-bold tracking-wider">
            Open Source
          </span>
          <span className="hidden xs:inline">MatiasV3B/CourseLab</span>
          <Star className="size-3.5 text-amber-500 fill-amber-400 group-hover:scale-110 transition-transform" />
          {starCount !== null && (
            <span className="text-[11px] text-slate-500 font-mono">{starCount}</span>
          )}
        </a>
      </div>
    );
  }

  // Default: navbar
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={GITHUB_REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100/90 hover:bg-slate-200/80 border border-slate-300/70 shadow-xs hover:shadow-sm transition-all duration-150 active:scale-95 group cursor-pointer"
        title="Danos una estrella en GitHub (Proyecto Open Source)"
      >
        <GitHubIcon className="size-4 text-slate-800 group-hover:scale-110 transition-transform duration-200" />
        <span className="hidden sm:inline">Star</span>
        <div className="flex items-center gap-1 text-slate-600 group-hover:text-amber-600 transition-colors">
          <Star className="size-3.5 text-amber-500 fill-amber-400 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-200" />
          {starCount !== null && (
            <span className="font-mono text-[11px] font-bold text-slate-700">
              {starCount}
            </span>
          )}
        </div>
        <span className="hidden lg:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-blue-100 text-[#1D72FE] font-bold uppercase tracking-wider">
          OSS
        </span>
      </a>

      {onOpenModal && (
        <button
          type="button"
          onClick={onOpenModal}
          className="hidden md:inline-flex items-center justify-center p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors cursor-pointer"
          title="Ver cómo conseguir CourseLab"
          aria-label="Ver detalles de código abierto"
        >
          <Sparkles className="size-3.5 text-amber-500" />
        </button>
      )}
    </div>
  );
};
