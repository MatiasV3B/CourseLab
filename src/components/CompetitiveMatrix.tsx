import React from 'react';

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

export const CompetitiveMatrix: React.FC = () => {
  return (
    <section id="why-courselab" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono tracking-widest text-[#1D72FE] uppercase font-semibold">
          Competitive Advantage
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
          Why High Schools Are Choosing CourseLab.
        </h2>
        <p className="text-base text-slate-600 mt-3">
          Most tools force you to start with blank documents or isolated study cards. CourseLab is purpose-built for AP &amp; IB success.
        </p>
      </div>

      {/* 4-Row Clean Comparison Matrix */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50 overflow-hidden">
        <div className="grid grid-cols-12 bg-slate-50 px-6 py-4 border-b border-slate-200 text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
          <div className="col-span-3 sm:col-span-2">Alternative</div>
          <div className="col-span-4 sm:col-span-5">Their Limitation</div>
          <div className="col-span-5 sm:col-span-5 text-[#1D72FE]">The CourseLab Distinction</div>
        </div>

        <div className="divide-y divide-slate-200">
          {/* Row 1: vs. Knowt */}
          <div className="grid grid-cols-12 px-6 py-5 items-center hover:bg-slate-50/70 transition-colors">
            <div className="col-span-3 sm:col-span-2 font-heading font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span className="text-amber-600">vs.</span> Knowt
            </div>
            <div className="col-span-4 sm:col-span-5 text-xs sm:text-sm text-slate-500 pr-4">
              Primarily relies on isolated flashcard decks without cohesive curricular hierarchy.
            </div>
            <div className="col-span-5 sm:col-span-5 text-xs sm:text-sm text-slate-900 font-medium flex items-start gap-2.5">
              <CheckIcon />
              <span>
                CourseLab provides structured, preloaded official course notebooks and unit audio overviews, not just isolated flashcard decks.
              </span>
            </div>
          </div>

          {/* Row 2: vs. Fiveable */}
          <div className="grid grid-cols-12 px-6 py-5 items-center hover:bg-slate-50/70 transition-colors">
            <div className="col-span-3 sm:col-span-2 font-heading font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span className="text-rose-600">vs.</span> Fiveable
            </div>
            <div className="col-span-4 sm:col-span-5 text-xs sm:text-sm text-slate-500 pr-4">
              Static text study guides and passive community pages without generative practice.
            </div>
            <div className="col-span-5 sm:col-span-5 text-xs sm:text-sm text-slate-900 font-medium flex items-start gap-2.5">
              <CheckIcon />
              <span>
                CourseLab is an active AI study workspace with live note-taking and practice quizzes, not just static reading guides.
              </span>
            </div>
          </div>

          {/* Row 3: vs. MagicSchool AI */}
          <div className="grid grid-cols-12 px-6 py-5 items-center hover:bg-slate-50/70 transition-colors">
            <div className="col-span-3 sm:col-span-2 font-heading font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span className="text-purple-600">vs.</span> MagicSchool AI
            </div>
            <div className="col-span-4 sm:col-span-5 text-xs sm:text-sm text-slate-500 pr-4">
              Built strictly as an administrative back-office tool for educators without student notebooks.
            </div>
            <div className="col-span-5 sm:col-span-5 text-xs sm:text-sm text-slate-900 font-medium flex items-start gap-2.5">
              <CheckIcon />
              <span>
                CourseLab unites both students and teachers in a single collaborative classroom, rather than serving solely as an administrative teacher planner.
              </span>
            </div>
          </div>

          {/* Row 4: vs. NotebookLM */}
          <div className="grid grid-cols-12 px-6 py-5 items-center hover:bg-slate-50/70 transition-colors">
            <div className="col-span-3 sm:col-span-2 font-heading font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span className="text-blue-600">vs.</span> NotebookLM
            </div>
            <div className="col-span-4 sm:col-span-5 text-xs sm:text-sm text-slate-500 pr-4">
              Starts completely blank; requires manual PDF uploading and lacks classroom roster tools.
            </div>
            <div className="col-span-5 sm:col-span-5 text-xs sm:text-sm text-slate-900 font-medium flex items-start gap-2.5">
              <CheckIcon />
              <span>
                CourseLab comes preloaded with ready-to-use College Board AP curricula, classroom roster codes, and printable anti-cheating test exports.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
