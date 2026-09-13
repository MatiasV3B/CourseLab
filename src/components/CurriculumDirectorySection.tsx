import React, { useState } from 'react';
import { BookOpen, Sparkles, CheckCircle, ArrowRight, Layers, GraduationCap, Search, ExternalLink } from 'lucide-react';

interface CourseItem {
  id: string;
  name: string;
  curriculum: 'AP' | 'IB';
  category: 'stem' | 'social' | 'humanities';
  unitsCount: number;
  highlightUnit: string;
  description: string;
  examStructure: string;
  keyTopics: string[];
}

const COURSES_CATALOG: CourseItem[] = [
  {
    id: 'ap-bio',
    name: 'AP Biology',
    curriculum: 'AP',
    category: 'stem',
    unitsCount: 8,
    highlightUnit: 'Unit 3: Cellular Energetics & Enzyme Kinetics',
    description: 'Master College Board AP Biology standards including chemistry of life, cell structure, molecular genetics, gene expression, and natural selection.',
    examStructure: '60 Multiple Choice (50%) + 6 Free-Response Questions (50%)',
    keyTopics: ['Cellular Respiration', 'Photosynthesis', 'Mendelian Genetics', 'DNA Replication', 'Natural Selection'],
  },
  {
    id: 'ap-calc-bc',
    name: 'AP Calculus BC',
    curriculum: 'AP',
    category: 'stem',
    unitsCount: 10,
    highlightUnit: 'Unit 10: Infinite Sequences & Taylor Series',
    description: 'Complete syllabus coverage from limits and derivatives to advanced integration, parametric/polar equations, and infinite series tests.',
    examStructure: '45 Multiple Choice (50%) + 6 Free-Response Questions (50%)',
    keyTopics: ['Integration by Parts', 'Taylor Polynomials', 'Polar Area Integrals', 'Series Convergence Tests', "Euler's Method"],
  },
  {
    id: 'ap-chem',
    name: 'AP Chemistry',
    curriculum: 'AP',
    category: 'stem',
    unitsCount: 9,
    highlightUnit: 'Unit 7: Equilibrium & Le Chatelier’s Principle',
    description: 'In-depth chemical principles aligned with the official CED: thermodynamics, kinetics, intermolecular forces, and acid-base titrations.',
    examStructure: '60 Multiple Choice (50%) + 7 Free-Response Questions (50%)',
    keyTopics: ['Equilibrium Constants', 'Acid-Base Buffers', 'Thermodynamics & Gibbs Free Energy', 'Kinetics Rate Laws'],
  },
  {
    id: 'ap-hug',
    name: 'AP Human Geography',
    curriculum: 'AP',
    category: 'social',
    unitsCount: 7,
    highlightUnit: 'Unit 2: Population & Migration Patterns',
    description: 'Syllabus-structured notebooks covering spatial patterns, demographic transition models, agricultural revolutions, and urban development.',
    examStructure: '60 Stimulus Multiple Choice (50%) + 3 Free-Response Questions (50%)',
    keyTopics: ['Demographic Transition Model', 'Malthusian Theory', 'Von Thünen Land Use', 'Borchert’s Epochs of Urban Growth'],
  },
  {
    id: 'ap-ush',
    name: 'AP United States History (APUSH)',
    curriculum: 'AP',
    category: 'social',
    unitsCount: 9,
    highlightUnit: 'Unit 5: Civil War & Reconstruction (1844–1877)',
    description: 'Comprehensive historical chronology from pre-Columbian societies (Period 1) through modern post-Cold War politics (Period 9) with DBQ/LEQ rubrics.',
    examStructure: '55 Stimulus MCQs (40%) + 3 SAQs (20%) + 1 DBQ (25%) + 1 LEQ (15%)',
    keyTopics: ['Colonial Chesapeake vs. New England', 'Jacksonian Democracy', 'Reconstruction Amendments', 'New Deal Programs'],
  },
  {
    id: 'ap-world',
    name: 'AP World History: Modern',
    curriculum: 'AP',
    category: 'social',
    unitsCount: 9,
    highlightUnit: 'Unit 3: Land-Based Empires (1450–1750)',
    description: 'Global cross-regional exchange networks, imperial administration, industrialization, global conflict, and post-1900 economic globalization.',
    examStructure: '55 Stimulus MCQs (40%) + 3 SAQs (20%) + 1 DBQ (25%) + 1 LEQ (15%)',
    keyTopics: ['Silk Roads & Trans-Saharan Trade', 'Ottoman & Safavid Empires', 'Industrial Revolution Causes', 'Cold War Decolonization'],
  },
  {
    id: 'ib-math-aa',
    name: 'IB Mathematics: Analysis & Approaches HL/SL',
    curriculum: 'IB',
    category: 'stem',
    unitsCount: 5,
    highlightUnit: 'Topic 5: Calculus (Differential & Integral Equations)',
    description: 'Rigorous mathematical investigation for the IB Diploma Programme, emphasizing analytical proofs, trigonometry, and advanced differential equations.',
    examStructure: 'Paper 1 (Non-Calculator) + Paper 2 (Calculator) + Paper 3 (HL Only)',
    keyTopics: ['Mathematical Induction', 'Maclaurin Expansions', 'Integration by Substitution', 'Complex Numbers & Vectors'],
  },
  {
    id: 'ap-eng-lang',
    name: 'AP English Language & Composition',
    curriculum: 'AP',
    category: 'humanities',
    unitsCount: 9,
    highlightUnit: 'Unit 6: Rhetorical Situation & Line of Reasoning',
    description: 'Rhetorical analysis, synthesis essay frameworks, and argument building grounded in non-fiction source evaluation and thesis strength.',
    examStructure: '45 Multiple Choice Reading & Writing (45%) + 3 Free-Response Essays (55%)',
    keyTopics: ['Rhetorical Appeals (Ethos, Pathos, Logos)', 'Synthesis Essay Evidence', 'Line of Reasoning Cohesion', 'Tone & Syntax Analysis'],
  },
];

export const CurriculumDirectorySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'stem' | 'social' | 'humanities'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = COURSES_CATALOG.filter((course) => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.keyTopics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="curricula" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-[#1D72FE] font-bold uppercase tracking-wider mb-4 shadow-xs">
          <BookOpen className="size-3.5" />
          <span>Official Syllabus Frameworks</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Preloaded Curricula for <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#1D72FE] to-blue-600">
            College Board AP® &amp; IB® Diploma
          </span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
          No blank pages or manual PDF uploads. Every course is pre-configured with officially mapped units, key concepts, stimulus practice questions, and exam scoring rubrics.
        </p>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {[
            { key: 'all', label: 'All Courses' },
            { key: 'stem', label: 'STEM & Math' },
            { key: 'social', label: 'History & Social Sciences' },
            { key: 'humanities', label: 'English & Humanities' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveCategory(tab.key as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                activeCategory === tab.key
                  ? 'bg-[#1D72FE] text-white shadow-md shadow-[#1D72FE]/25'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search subjects, topics, units..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white rounded-full border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D72FE] focus:border-transparent transition-all shadow-xs"
          />
        </div>
      </div>

      {/* Course Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <article
            key={course.id}
            className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-50 text-[#1D72FE] border border-blue-200/80">
                  {course.curriculum} Course
                </span>
                <span className="text-xs font-mono text-slate-500 font-medium">
                  {course.unitsCount} Official Units
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-[#1D72FE] transition-colors mb-2">
                {course.name}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {course.description}
              </p>

              {/* Highlight Unit Callout */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 mb-4 text-xs">
                <div className="text-[10px] font-mono uppercase text-slate-500 font-bold tracking-wider mb-0.5">
                  Featured Notebook Module
                </div>
                <div className="font-semibold text-slate-800">
                  {course.highlightUnit}
                </div>
              </div>

              {/* Key Topics Tag Cloud */}
              <div className="mb-4">
                <div className="text-[10px] font-mono uppercase text-slate-500 font-bold tracking-wider mb-1.5">
                  Core Framework Topics
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {course.keyTopics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-4 border-t border-slate-100 mt-2 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500">
                100% CED &amp; Syllabus Aligned
              </span>
              <a
                href="#waitlist"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#1D72FE] hover:text-blue-700 transition-colors"
              >
                <span>Study Syllabus</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* 20+ Additional Courses Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-700">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-blue-300 font-semibold uppercase tracking-wider">
            <Sparkles className="size-4 text-yellow-400" />
            <span>Over 20+ Curricula Supported at Beta Launch</span>
          </div>
          <h4 className="font-heading text-xl sm:text-2xl font-bold text-white">
            Need a specific AP or IB subject added to your school workspace?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            We continuously ingest official curriculum frameworks. Join our Discord community to vote for upcoming course ingestion cohorts.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://discord.gg/DE96t7w4XJ"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
          >
            Suggest a Subject &rarr;
          </a>
          <a
            href="#waitlist"
            className="px-5 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
          >
            Join Priority Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};
