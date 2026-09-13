import React from 'react';
import { Cpu, Repeat, LineChart, ShieldCheck, CheckCircle, Sparkles, BookCheck, Zap, Lock } from 'lucide-react';

const PILLARS = [
  {
    icon: Cpu,
    pill: 'Zero Hallucination Architecture',
    title: 'Grounded Socratic AI ("Tutor Me")',
    description:
      'Unlike generic consumer AI chatbots that invent facts, miscalculate derivatives, and hallucinate historical citations, CourseLab uses a deterministic RAG (Retrieval-Augmented Generation) pipeline locked exclusively to verified College Board and IB course documents.',
    points: [
      'Exact page & paragraph citations to official Course & Exam Descriptions (CED)',
      'Socratic dialogue prompts students to deduce answers rather than copying cheat sheets',
      'Mathematical LaTeX & scientific formula validation with step-by-step guidance',
      'Strict guardrails preventing off-curriculum tangents and false dates',
    ],
    accentColor: 'from-blue-500/10 to-sky-500/10 border-blue-200/80',
    iconColor: 'text-[#1D72FE] bg-blue-50',
  },
  {
    icon: Repeat,
    pill: 'Cognitive Science Engine',
    title: 'Active Retrieval & Automated Spaced Repetition',
    description:
      'Passive reading of 200-page review books leads to the illusion of competence. CourseLab integrates the Ebbinghaus forgetting curve directly into student notebooks to enforce long-term memory consolidation before May exam sessions.',
    points: [
      'Automated daily study prompts tailored to each student’s memory decay curve',
      'Active recall flashcard generation directly from unit key concepts and vocabulary',
      'Stimulus-based multiple choice diagnostics that test conceptual synthesis',
      'Interactive concept mapping to transform linear notes into interconnected knowledge graphs',
    ],
    accentColor: 'from-indigo-500/10 to-purple-500/10 border-indigo-200/80',
    iconColor: 'text-indigo-600 bg-indigo-50',
  },
  {
    icon: LineChart,
    pill: 'Parental Peace of Mind',
    title: 'Weekly Diagnostic Score Projections',
    description:
      'Eliminate the high-stress mystery of whether your teen is prepared. CourseLab continuously calculates a statistically weighted readiness score that accurately forecasts official AP scores (1 to 5) and IB marks (1 to 7) months ahead of exam season.',
    points: [
      'Transparent weekly email digests for parents summarizing mastery percentages',
      'Early warning notifications if specific sub-units (e.g., Taylor Series or Kinetics) lag behind',
      'Benchmarking against historical College Board cutoffs and curve distributions',
      'Clear visibility to protect investments in college credit tuition savings',
    ],
    accentColor: 'from-emerald-500/10 to-teal-500/10 border-emerald-200/80',
    iconColor: 'text-emerald-600 bg-emerald-50',
  },
  {
    icon: ShieldCheck,
    pill: 'Educator & School Integrity',
    title: 'Anti-Cheating Assessment Engine & Roster Sync',
    description:
      'Engineered to empower educators rather than automate them. Teachers push curated unit modules to connected classrooms and generate randomized, printable quizzes that prevent copy-pasting and student collusion.',
    points: [
      'Generates randomized Versions A, B, and C with automated teacher answer keys',
      '1-Click roster and assignment synchronization with Google Classroom, Canvas, and Drive',
      'Strict FERPA & COPPA privacy: student queries never train commercial AI models',
      'Classroom diagnostic heatmaps showing which learning objectives require live re-teaching',
    ],
    accentColor: 'from-amber-500/10 to-orange-500/10 border-amber-200/80',
    iconColor: 'text-amber-600 bg-amber-50',
  },
];

export const LearningEngineSection: React.FC = () => {
  return (
    <section id="engine" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-[#1D72FE] font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Zap className="size-3.5" />
          <span>The CourseLab Learning Engine</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          How CourseLab Guarantees <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#1D72FE] to-blue-600">
            Real Academic Mastery
          </span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
          Designed from the ground up on proven cognitive psychology, official examination blueprints, and zero-hallucination artificial intelligence.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PILLARS.map((pillar, index) => {
          const IconComponent = pillar.icon;
          return (
            <div
              key={pillar.title}
              className={`rounded-3xl bg-white border p-8 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden ${pillar.accentColor}`}
            >
              <div>
                {/* Pillar Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 inline-flex items-center justify-center text-[10px]">
                      0{index + 1}
                    </span>
                    {pillar.pill}
                  </span>
                  <div className={`p-2.5 rounded-2xl ${pillar.iconColor}`}>
                    <IconComponent className="size-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  {pillar.title}
                </h3>

                {/* Narrative Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Feature Bullet Points */}
                <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                  {pillar.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="size-4 text-[#1D72FE] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <Lock className="size-3 text-emerald-600 inline" /> FERPA Aligned · Zero Public AI Training
                </span>
                <span className="font-bold text-[#1D72FE]">Verified Architecture</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
