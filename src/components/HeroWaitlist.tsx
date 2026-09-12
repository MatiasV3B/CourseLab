import React, { useState, useEffect } from 'react';
import { ArrowRight, X, Sparkles, Star } from 'lucide-react';
import { GitHubIcon } from './GitHubStarButton';

export const HeroWaitlist: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    // Load Tally embed script dynamically
    const tallyScriptSrc = 'https://tally.so/widgets/embed.js';
    const existingScript = document.querySelector(`script[src="${tallyScriptSrc}"]`);

    const initTally = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((el) => {
          const iframe = el as HTMLIFrameElement;
          if (iframe.dataset.tallySrc) {
            iframe.src = iframe.dataset.tallySrc;
          }
        });
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = tallyScriptSrc;
      script.async = true;
      script.onload = initTally;
      script.onerror = initTally;
      document.body.appendChild(script);
    } else {
      initTally();
    }

    // Global open handler via hash or event
    const handleHash = () => {
      if (window.location.hash === '#waitlist') {
        setIsWaitlistOpen(true);
      }
    };

    const handleCustomEvent = () => {
      setIsWaitlistOpen(true);
    };

    window.addEventListener('hashchange', handleHash);
    window.addEventListener('open-waitlist', handleCustomEvent);

    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('open-waitlist', handleCustomEvent);
    };
  }, []);

  // When modal is opened, trigger Tally to initialize embeds
  useEffect(() => {
    if (isWaitlistOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        if (typeof (window as any).Tally !== 'undefined') {
          (window as any).Tally.loadEmbeds();
        }
      }, 100);
    } else {
      document.body.style.overflow = '';
    }
  }, [isWaitlistOpen]);

  return (
    <section id="waitlist" className="pt-16 pb-20 md:pt-24 md:pb-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Centered Hero Header */}
      <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Curricula Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-mono text-[#1D72FE] font-semibold tracking-wide mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#1D72FE]" />
          <span>College Board AP &amp; IB</span>
        </div>

        {/* Catchy 1-Line Headline */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 leading-[1.08] mb-6 text-balance">
          Interactive notebooks built for AP &amp; IB success.
        </h1>

        {/* Concise Subheadline (Not AI-heavy) */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Official College Board and IB course frameworks, structured study notebooks, and seamless classroom synchronization — ready from day one.
        </p>

        {/* Center CTA Button & Star on GitHub directly underneath */}
        <div className="flex flex-col items-center justify-center gap-3.5 mb-4">
          <button
            type="button"
            onClick={() => setIsWaitlistOpen(true)}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-[#1D72FE] hover:bg-[#1558CC] shadow-lg shadow-[#1D72FE]/25 hover:shadow-xl hover:shadow-[#1D72FE]/35 transition-all duration-200 active:scale-95 group cursor-pointer"
          >
            <span>Join the Waitlist</span>
            <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <a
            href="https://github.com/MatiasV3B/CourseLab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-150 active:scale-95 group cursor-pointer"
            title="Star CourseLab on GitHub"
          >
            <GitHubIcon className="size-4 text-slate-800 group-hover:scale-110 transition-transform" />
            <span>Star on GitHub</span>
            <Star className="size-3.5 text-amber-500 fill-amber-400 group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        {/* Reassurance note */}
        <p className="text-xs font-mono text-slate-500 mb-12">
          🔒 Free reservation · No credit card required · Launching soon
        </p>

        {/* 3 Value Metrics */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-xl mx-auto pt-8 border-t border-slate-200/80">
          <div>
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">20+</div>
            <div className="text-[11px] sm:text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider font-semibold">
              Preloaded Courses
            </div>
          </div>
          <div>
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1D72FE]">100%</div>
            <div className="text-[11px] sm:text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider font-semibold">
              Curriculum Aligned
            </div>
          </div>
          <div>
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">FERPA</div>
            <div className="text-[11px] sm:text-xs text-slate-500 font-mono mt-1 uppercase tracking-wider font-semibold">
              Student Privacy
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: Join Early Access / Waitlist Form Dialog */}
      {isWaitlistOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-200 animate-in fade-in"
          onClick={() => setIsWaitlistOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-heading text-xl font-bold text-slate-900">Join the Waitlist</h2>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[#1D72FE] border border-blue-200/80">
                    <Sparkles className="size-3" /> Early Access
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Complete the quick form below to reserve your priority spot for launch.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsWaitlistOpen(false)}
                className="p-2 rounded-full hover:bg-slate-200/60 text-slate-400 hover:text-slate-700 transition-colors"
                aria-label="Close waitlist modal"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Body with Official Tally Embed */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white min-h-[580px]">
              <iframe
                data-tally-src="https://tally.so/embed/Me4g1A?alignLeft=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
                src="https://tally.so/embed/Me4g1A?alignLeft=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
                loading="lazy"
                width="100%"
                height="580"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="CourseLab Waitlist Form"
                className="w-full border-0 min-h-[580px]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
