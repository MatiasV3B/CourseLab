import React from 'react';
import { AlertCircle, CheckCircle2, GraduationCap, Users, ArrowRight, Sparkles, FileText, TrendingUp } from 'lucide-react';

export const ProblemSolutionSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-[#1D72FE] font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Sparkles className="size-3.5" />
          <span>Why We Built CourseLab</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Advanced exams are high stakes. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#1D72FE] to-blue-600">
            The way students prepare is broken.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
          CourseLab was engineered to bridge the disconnect between overwhelmed students and anxious parents with grounded, verified academic intelligence.
        </p>
      </div>

      {/* 2-Column Side-by-Side Comparison: The Broken Way vs. The CourseLab Way */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Card 1: The Broken Preparation (The Problem) */}
        <div className="relative rounded-3xl bg-white border border-rose-200/80 p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group">
          {/* Subtle decorative background tint */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50/50 rounded-full blur-3xl pointer-events-none -z-0" />
          
          <div className="relative z-10">
            {/* Pill Tag */}
            <div className="flex items-center justify-between gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-bold uppercase tracking-wider">
                <AlertCircle className="size-3.5" />
                The Problem
              </span>
              <span className="text-xs font-mono text-slate-600 font-semibold">
                Current Status Quo
              </span>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-4 leading-snug">
              Studying for advanced high school exams is currently broken.
            </h3>

            {/* Exact User Text for The Problem */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Studying for advanced high school exams (AP &amp; IB) is currently broken: teens get overwhelmed by dense 200-page course PDFs and passive YouTube videos that don't test actual retention. Meanwhile, parents live with the anxiety of not knowing if their child is truly prepared until a failing score arrives in July, costing thousands in lost college tuition credits.
            </p>

            {/* Visual Pain Points Breakdown */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                  ✕
                </div>
                <div>
                  <strong className="text-slate-800">For Teens:</strong> Overloaded by 200-page syllabus PDFs and passive video consumption without genuine memory retention.
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                  ✕
                </div>
                <div>
                  <strong className="text-slate-800">For Parents:</strong> Zero visibility into actual readiness until official scores arrive in July, risking lost college credits.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100/80 text-[11px] font-mono text-slate-600 flex items-center gap-1.5">
            <FileText className="size-3.5 text-slate-600" />
            <span>Fragmented study habits · High stakes · Passive retention</span>
          </div>
        </div>

        {/* Card 2: The CourseLab Solution (The Solution) */}
        <div className="relative rounded-3xl bg-gradient-to-b from-blue-50/40 via-white to-white border-2 border-[#1D72FE]/40 p-6 sm:p-8 md:p-10 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-200 flex flex-col justify-between overflow-hidden ring-1 ring-[#1D72FE]/20 group">
          {/* Subtle decorative blue glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-0" />
          
          <div className="relative z-10">
            {/* Pill Tag */}
            <div className="flex items-center justify-between gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1D72FE] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
                <CheckCircle2 className="size-3.5 text-white" />
                The Solution
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#1D72FE] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/80">
                <Sparkles className="size-3" /> Unified Workspace
              </span>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-4 leading-snug">
              CourseLab unifies official curricula, active practice &amp; parental peace of mind.
            </h3>

            {/* Exact User Text for The Solution */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 font-medium">
              CourseLab solves this by unifying official curricula, interactive quizzes, and grounded Socratic AI guidance into one clean workspace. Students practice actively against official standards, while parents receive transparent weekly diagnostic reports projecting their official exam scores—delivering the peace of mind of a private tutor at a fraction of the cost.
            </p>

            {/* Visual Value Props Breakdown */}
            <div className="space-y-3 pt-6 border-t border-blue-100/80">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <div className="w-5 h-5 rounded-full bg-[#1D72FE]/15 text-[#1D72FE] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                  ✓
                </div>
                <div>
                  <strong className="text-slate-900">For Students:</strong> Active retrieval practice directly against official standards with grounded, hallucination-free Socratic AI.
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <div className="w-5 h-5 rounded-full bg-[#1D72FE]/15 text-[#1D72FE] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                  ✓
                </div>
                <div>
                  <strong className="text-slate-900">For Parents:</strong> Weekly diagnostic reports with projected exam scores, delivering complete peace of mind.
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action inside Solution card */}
          <div className="mt-8 pt-5 border-t border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="text-[11px] font-mono text-[#1D72FE] font-semibold flex items-center gap-1.5">
              <TrendingUp className="size-3.5" />
              <span>Projected official exam scores &middot; Socratic tutoring</span>
            </div>

            <a
              href="#waitlist"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D72FE] hover:text-blue-700 group/link"
            >
              <span>Reserve Priority Spot</span>
              <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
