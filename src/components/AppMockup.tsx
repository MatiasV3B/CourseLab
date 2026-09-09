import React, { useState } from 'react';
import {
  ChevronDown,
  Search,
  Sparkles,
  User,
  ArrowRight,
  Download,
  Eye,
  FileText,
  BookOpen,
  HelpCircle,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Flame,
  Check,
  AlertTriangle,
  Layers,
  GraduationCap,
} from 'lucide-react';
import { CourseLabLogo } from './CourseLabLogo';

interface CourseData {
  id: string;
  name: string;
  shortName: string;
  examDate: string;
  daysLeft: number;
  streak: number;
  bestStreak: number;
  nextReviewTopic: string;
  nextReviewTime: string;
  filterPills: string[];
  unit1: {
    title: string;
    progress: number;
    baseline: number;
    target: number;
    topics: string[];
    completedModules: number;
    totalModules: number;
  };
  unit2: {
    title: string;
    progress: number;
    topicsReviewed: number;
    totalTopics: number;
    overdue: number;
    topics: string[];
    scheduledTime: string;
  };
  sources: {
    badge: string;
    description: string;
    items: {
      title: string;
      subtitle: string;
      icon: 'file' | 'book' | 'quiz';
    }[];
    lastUpdated: string;
  };
}

const COURSES_DATABASE: Record<string, CourseData> = {
  'AP Human Geography': {
    id: 'aphug',
    name: 'AP Human Geography',
    shortName: 'AP HUG',
    examDate: 'May 6',
    daysLeft: 68,
    streak: 5,
    bestStreak: 14,
    nextReviewTopic: 'Spaced Repetition: Unit 2 Migration',
    nextReviewTime: 'Today at 5:00 PM',
    filterPills: [
      'All Content',
      'Unit 1: Thinking Geographically',
      'Unit 2: Population & Migration',
      'Sources & PDFs',
      'Flashcards',
      'FRQ Rubrics',
    ],
    unit1: {
      title: 'Unit 1: Thinking Geographically',
      progress: 78,
      baseline: 65,
      target: 85,
      topics: ['Fundamentals', 'Maps & Spatial Data', 'Scale & Space', 'GIS Analysis'],
      completedModules: 14,
      totalModules: 18,
    },
    unit2: {
      title: 'Unit 2: Population & Migration Patterns',
      progress: 42,
      topicsReviewed: 9,
      totalTopics: 21,
      overdue: 4,
      topics: ['Demographic Transition', 'Migration Flow', 'Population Pyramids', 'Malthusian Theory'],
      scheduledTime: 'Review scheduled tomorrow',
    },
    sources: {
      badge: 'College Board Verified',
      description: 'Official curriculum blueprints and test-maker citations linked to current course units.',
      items: [
        {
          title: 'College Board Verified CED PDF',
          subtitle: 'Official Curriculum Framework • 4.2 MB',
          icon: 'file',
        },
        {
          title: 'AP HUG Course Description & Standards',
          subtitle: 'College Board Essential Knowledge • 2.8 MB',
          icon: 'book',
        },
        {
          title: 'Practice Exam Diagnostic Q&A',
          subtitle: '60 Stimulus Multiple Choice • Interactive',
          icon: 'quiz',
        },
      ],
      lastUpdated: 'Updated 2 days ago',
    },
  },
  'AP Biology': {
    id: 'apbio',
    name: 'AP Biology',
    shortName: 'AP Bio',
    examDate: 'May 11',
    daysLeft: 73,
    streak: 8,
    bestStreak: 21,
    nextReviewTopic: 'Cell Transport & Water Potential',
    nextReviewTime: 'Tomorrow at 9:00 AM',
    filterPills: [
      'All Content',
      'Unit 1: Chemistry of Life',
      'Unit 2: Cell Structure & Function',
      'Campbell Biology Sync',
      'Lab Protocols',
      'FRQ Practice',
    ],
    unit1: {
      title: 'Unit 1: Chemistry of Life',
      progress: 88,
      baseline: 70,
      target: 90,
      topics: ['Water Properties', 'Macromolecules', 'Nucleic Acids', 'Enzyme Catalysis'],
      completedModules: 16,
      totalModules: 18,
    },
    unit2: {
      title: 'Unit 2: Cell Structure & Function',
      progress: 54,
      topicsReviewed: 11,
      totalTopics: 20,
      overdue: 2,
      topics: ['Membrane Permeability', 'Organelle Synergy', 'Tonicity & Osmosis', 'Surface-to-Volume Ratio'],
      scheduledTime: 'Review scheduled today at 7:00 PM',
    },
    sources: {
      badge: 'College Board Verified',
      description: 'AP Bio CED-grounded index mirroring Campbell Biology textbooks and lab rubrics.',
      items: [
        {
          title: 'Official AP Biology CED Blueprint',
          subtitle: 'Units 1-8 Scoring Standards • 5.1 MB',
          icon: 'file',
        },
        {
          title: 'Campbell Biology 12th Ed. Chapter Sync',
          subtitle: 'Biochemical Pathways & Diagrams • 3.4 MB',
          icon: 'book',
        },
        {
          title: 'Official AP Bio FRQ Scoring Guidelines',
          subtitle: 'Experimental Design & Statistical Analysis',
          icon: 'quiz',
        },
      ],
      lastUpdated: 'Updated 4 hours ago',
    },
  },
  'AP Calculus BC': {
    id: 'apcalc',
    name: 'AP Calculus BC',
    shortName: 'AP Calc BC',
    examDate: 'May 12',
    daysLeft: 74,
    streak: 12,
    bestStreak: 18,
    nextReviewTopic: 'Taylor & Maclaurin Polynomials',
    nextReviewTime: 'Today at 6:30 PM',
    filterPills: [
      'All Content',
      'Unit 6: Integration',
      'Unit 9: Parametric & Polar',
      'Unit 10: Infinite Series',
      'Formulary & Rules',
      'Mock Exam BC',
    ],
    unit1: {
      title: 'Unit 6: Integration & Accumulation of Change',
      progress: 92,
      baseline: 75,
      target: 95,
      topics: ['Fundamental Theorem', 'U-Substitution', 'Integration by Parts', 'Accumulation Functions'],
      completedModules: 22,
      totalModules: 24,
    },
    unit2: {
      title: 'Unit 9: Parametric, Polar & Vector Functions',
      progress: 38,
      topicsReviewed: 8,
      totalTopics: 21,
      overdue: 5,
      topics: ['Polar Area Integrals', 'Vector Velocity & Acceleration', 'Parametric Arc Length', "Euler's Method"],
      scheduledTime: 'Review scheduled Thursday',
    },
    sources: {
      badge: 'College Board Verified',
      description: 'Strict CED mathematical formulations, College Board exam guidelines, and scoring notes.',
      items: [
        {
          title: 'AP Calculus BC Course Framework',
          subtitle: 'Official CED Derivative & Integral Guide • 4.6 MB',
          icon: 'file',
        },
        {
          title: 'Series Convergence Tests & Formulas',
          subtitle: 'Ratio Test, Alternating Series & Error Bound',
          icon: 'book',
        },
        {
          title: 'BC Diagnostic Section 1 & 2 Past Exams',
          subtitle: '45 Multiple Choice & 6 Timed FRQs',
          icon: 'quiz',
        },
      ],
      lastUpdated: 'Updated yesterday',
    },
  },
  'AP United States History': {
    id: 'apush',
    name: 'AP United States History',
    shortName: 'APUSH',
    examDate: 'May 8',
    daysLeft: 70,
    streak: 6,
    bestStreak: 15,
    nextReviewTopic: 'Reconstruction Legislation & DBQ Analysis',
    nextReviewTime: 'Tomorrow at 4:00 PM',
    filterPills: [
      'All Content',
      'Period 4: 1800-1848',
      'Period 5: 1844-1877',
      'Primary Source Compendium',
      'DBQ Rubrics',
      'LEQ Practice',
    ],
    unit1: {
      title: 'Unit 4: Period 4 (1800–1848)',
      progress: 82,
      baseline: 68,
      target: 88,
      topics: ['Jeffersonian Democracy', 'The Market Revolution', 'Jacksonian Era & Bank War', 'Second Great Awakening'],
      completedModules: 18,
      totalModules: 22,
    },
    unit2: {
      title: 'Unit 5: Period 5 (1844–1877)',
      progress: 46,
      topicsReviewed: 10,
      totalTopics: 22,
      overdue: 3,
      topics: ['Manifest Destiny', 'Compromise of 1850', 'Civil War Military Strategies', 'Reconstruction Amendments'],
      scheduledTime: 'Review scheduled tomorrow morning',
    },
    sources: {
      badge: 'College Board Verified',
      description: 'Historical thinking skills and official primary sources curated directly from the APUSH CED.',
      items: [
        {
          title: 'APUSH CED Course & Exam Description',
          subtitle: '9 Periods of Historical Learning Objectives • 5.8 MB',
          icon: 'file',
        },
        {
          title: 'Primary Source Document Archive',
          subtitle: 'Speeches, Treaties & Political Cartoons • 4.1 MB',
          icon: 'book',
        },
        {
          title: 'DBQ & LEQ Scaffolded Timed Practice',
          subtitle: 'Official College Board 7-Point Scoring Rubric',
          icon: 'quiz',
        },
      ],
      lastUpdated: 'Updated 3 days ago',
    },
  },
  'IB Chemistry HL': {
    id: 'ibchem',
    name: 'IB Chemistry HL',
    shortName: 'IB Chem HL',
    examDate: 'May 14',
    daysLeft: 76,
    streak: 9,
    bestStreak: 20,
    nextReviewTopic: 'Hybridization & VSEPR Molecular Geometry',
    nextReviewTime: 'Today at 7:00 PM',
    filterPills: [
      'All Content',
      'Topic 1: Stoichiometry',
      'Topic 4: Chemical Bonding',
      'Topic 14: Further Bonding',
      'IB Data Booklet',
      'Paper 1 & 2 Bank',
    ],
    unit1: {
      title: 'Topic 1: Stoichiometric Relationships',
      progress: 90,
      baseline: 72,
      target: 92,
      topics: ['The Mole Concept', 'Avogadro Constant', 'Reacting Masses & Volumes', 'Ideal Gas Equation'],
      completedModules: 19,
      totalModules: 21,
    },
    unit2: {
      title: 'Topic 4 & 14: Chemical Bonding & Structure',
      progress: 50,
      topicsReviewed: 12,
      totalTopics: 24,
      overdue: 3,
      topics: ['Hybridization (sp, sp², sp³)', 'VSEPR Molecular Shapes', 'Formal Charge', 'Resonance & Delocalization'],
      scheduledTime: 'Review scheduled Wednesday',
    },
    sources: {
      badge: 'IBO Curriculum Aligned',
      description: 'International Baccalaureate diploma framework, verified constants, and past paper rubrics.',
      items: [
        {
          title: 'IB Chemistry HL Subject Guide (2025/2026)',
          subtitle: 'Official IBO Syllabus & Assessment Outline • 4.4 MB',
          icon: 'file',
        },
        {
          title: 'Chemistry Data Booklet Formula Tables',
          subtitle: 'Spectrochemical Series & Bond Enthalpies • 2.7 MB',
          icon: 'book',
        },
        {
          title: 'Paper 1 & Paper 2 Exam Past Question Sets',
          subtitle: 'Structured Free-Response with Examiner Notes',
          icon: 'quiz',
        },
      ],
      lastUpdated: 'Updated yesterday',
    },
  },
};

export const AppMockup: React.FC = () => {
  // Active course state
  const [selectedCourseKey, setSelectedCourseKey] = useState<string>('AP Human Geography');
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState<boolean>(false);
  
  // App navigation state
  const [activeTab, setActiveTab] = useState<string>('units');
  const [activeFilterIndex, setActiveFilterIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const course = COURSES_DATABASE[selectedCourseKey] || COURSES_DATABASE['AP Human Geography'];
  const courseKeys = Object.keys(COURSES_DATABASE);

  const handleSelectCourse = (courseName: string) => {
    setSelectedCourseKey(courseName);
    setActiveFilterIndex(0);
    setIsCourseDropdownOpen(false);
    showNotice(`Switched simulated workspace to ${courseName}`);
  };

  const showNotice = (msg: string) => {
    setActionNotice(msg);
    setTimeout(() => setActionNotice(null), 3000);
  };

  const navTabs = [
    { id: 'units', label: 'Units' },
    { id: 'review', label: 'Review' },
    { id: 'ai-coach', label: 'AI Coach' },
    { id: 'library', label: 'Library' },
    { id: 'practice', label: 'Practice' },
  ];

  return (
    <div className="w-full bg-[#F8FAFC] text-slate-900 font-sans select-none overflow-x-hidden relative">
      {/* EXPLICIT DISCLAIMER BANNER: MOCKUP ONLY */}
      <div className="bg-amber-500 text-slate-950 px-4 py-2 text-xs font-semibold flex items-center justify-between gap-3 shadow-xs border-b border-amber-600/40">
        <div className="flex items-center gap-2 max-w-4xl mx-auto w-full justify-center text-center">
          <AlertTriangle className="size-4 shrink-0 text-slate-950" />
          <span>
            <strong>INTERACTIVE PROTOTYPE MOCKUP:</strong> This is a visual simulation to demonstrate the interface — <strong>NOT real software</strong>. Course data, units, and metrics change dynamically for preview demonstration.
          </span>
        </div>
      </div>

      {/* 1. APP TOP NAVIGATION HEADER MENU */}
      <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 transition-all">
        {/* Left: Brand & Course Selector Menu */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2.5">
            <CourseLabLogo size={28} className="drop-shadow-xs" />
            <span className="text-base sm:text-lg font-heading font-extrabold tracking-tight text-slate-900">
              Course<span className="text-[#1D72FE]">Lab</span>
            </span>
          </div>

          <div className="h-4 w-px bg-slate-200 hidden sm:block" />

          {/* Course Selector Dropdown Menu */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsCourseDropdownOpen(!isCourseDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50/80 hover:bg-blue-100/70 active:scale-[0.98] text-[#1D72FE] hover:text-[#1558CC] transition-all text-xs font-bold border border-blue-200/80 shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#1D72FE] shadow-[0_0_8px_rgba(29,114,254,0.4)] animate-pulse" />
              <span className="truncate max-w-[140px] sm:max-w-none">{course.name}</span>
              <ChevronDown className={`size-3.5 text-[#1D72FE] transition-transform duration-200 ${isCourseDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Course Selector Dropdown List */}
            {isCourseDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100 flex items-center justify-between">
                  <span>Select Course to Preview</span>
                  <span className="text-[9px] text-[#1D72FE] font-semibold">5 Available</span>
                </div>
                {courseKeys.map((cName) => {
                  const isSelected = selectedCourseKey === cName;
                  return (
                    <button
                      key={cName}
                      type="button"
                      onClick={() => handleSelectCourse(cName)}
                      className={`w-full px-3.5 py-2.5 text-left text-xs font-medium flex items-center justify-between transition-colors ${
                        isSelected
                          ? 'bg-blue-50/90 text-[#1D72FE] font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <GraduationCap className={`size-3.5 ${isSelected ? 'text-[#1D72FE]' : 'text-slate-400'}`} />
                        <span>{cName}</span>
                      </div>
                      {isSelected && <Check className="size-3.5 text-[#1D72FE]" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Center: Navigation Menu Tabs (Units, Review, AI Coach, etc.) */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-slate-100/90 border border-slate-200/60 shadow-inner">
          {navTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  showNotice(`Opened ${tab.label} simulated tab`);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-slate-900 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 font-medium'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Quick Search, Tutor Me & Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick search input trigger */}
          <div className="hidden md:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-100/80 text-slate-500 text-xs border border-transparent hover:border-slate-200 transition-all cursor-pointer">
            <Search className="size-3.5 text-slate-400" />
            <span className="text-slate-400">Search {course.shortName}...</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-200 text-[10px] font-mono text-slate-600 font-semibold border border-slate-300/60">
              ⌘K
            </kbd>
          </div>

          {/* Tutor Me Button */}
          <button
            type="button"
            onClick={() => showNotice(`Simulated NotebookLM AI Tutor for ${course.name}`)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#1D72FE] hover:bg-[#1558CC] text-white font-heading font-semibold text-xs transition-all shadow-md shadow-[#1D72FE]/20 hover:shadow-lg hover:shadow-[#1D72FE]/30 active:scale-95 cursor-pointer"
          >
            <Sparkles className="size-3.5" />
            <span>Tutor Me</span>
          </button>

          {/* User Profile Avatar */}
          <button
            type="button"
            onClick={() => showNotice('Simulated student profile (Demo mode)')}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-600 transition-transform active:scale-95 cursor-pointer"
          >
            <User className="size-4" />
          </button>
        </div>
      </header>

      {/* FLOATING ACTION FEEDBACK TOAST */}
      {actionNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-2xl shadow-2xl text-xs font-medium border border-slate-700/80 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#1D72FE]" />
          <span>{actionNotice}</span>
        </div>
      )}

      {/* 2. MAIN APP CANVAS WORKSPACE */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl mx-auto flex flex-col items-center">
        {/* Subtle radial ambient glow */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#1D72FE]/5 blur-3xl pointer-events-none rounded-full" />

        {/* QUICK COURSE SWITCH BAR (Allows 1-click test of multiple real classes) */}
        <div className="mb-8 w-full max-w-3xl flex flex-col items-center">
          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold mb-2 flex items-center gap-1.5">
            <Layers className="size-3.5 text-[#1D72FE]" />
            <span>Quick Course Switcher (Click to preview real syllabi):</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-200/60 border border-slate-300/70 shadow-inner">
            {courseKeys.map((cName) => {
              const isSelected = selectedCourseKey === cName;
              return (
                <button
                  key={cName}
                  type="button"
                  onClick={() => handleSelectCourse(cName)}
                  className={`px-3 py-1 rounded-xl text-xs font-heading font-semibold transition-all duration-200 active:scale-95 ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-300/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {cName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Centered Hero & Search Section */}
        <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#1D72FE] text-[11px] font-mono font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D72FE] animate-pulse" />
            <span>Interactive {course.name} Study Workspace</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-900 mb-6 text-balance">
            What did you study today?
          </h1>

          {/* Search Input Bar with Glowing Ring */}
          <div className="w-full relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1D72FE]/25 via-sky-300/30 to-[#1D72FE]/25 rounded-2xl blur-sm opacity-40 group-focus-within:opacity-100 transition duration-300" />
            <div className="relative flex items-center w-full h-14 sm:h-15 px-4 sm:px-5 rounded-2xl bg-white shadow-md border border-slate-200 group-focus-within:border-[#1D72FE]/60 transition-colors">
              <Search className="size-5 text-[#1D72FE] mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${course.name} units, CED topics, or sources...`}
                className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-sans focus:outline-none"
              />
              <div className="flex items-center gap-2 ml-2">
                <kbd className="hidden sm:inline-flex items-center justify-center px-2 py-1 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-500 border border-slate-200">
                  ⌘K
                </kbd>
                <button
                  type="button"
                  onClick={() => showNotice('AI Assist: Indexing course CED frameworks')}
                  title="AI Search Assist"
                  className="p-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 active:scale-95 text-[#1D72FE] transition-all cursor-pointer"
                >
                  <Sparkles className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Filter Pills Menu */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-5">
            {course.filterPills.map((pill, idx) => {
              const isSelected = activeFilterIndex === idx;
              return (
                <button
                  key={pill}
                  type="button"
                  onClick={() => {
                    setActiveFilterIndex(idx);
                    showNotice(`Filtered view: ${pill}`);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-heading transition-all duration-200 active:scale-95 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1D72FE] text-white font-semibold shadow-md shadow-[#1D72FE]/25'
                      : 'bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 font-medium'
                  }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Dashboard Grid: Changes with each course */}
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-10 transition-opacity duration-300">
          {/* Card 1: Unit 1 Card */}
          <div className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300">
            <div>
              {/* Top Row */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#1D72FE]">
                  CURRENT PROGRESS
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-50 text-[#1D72FE] border border-blue-100">
                  {course.unit1.progress}%
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-heading font-bold text-slate-900 mb-4 group-hover:text-[#1D72FE] transition-colors">
                {course.unit1.title}
              </h2>

              {/* Progress Gauge */}
              <div className="w-full mb-5">
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-400 to-[#1D72FE] transition-all duration-700"
                    style={{ width: `${course.unit1.progress}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-[11px] font-mono text-slate-500 mt-2">
                  <span>Diagnostic baseline: {course.unit1.baseline}%</span>
                  <span className="text-[#1D72FE] font-medium">Mastery target: {course.unit1.target}%</span>
                </div>
              </div>

              {/* Topic Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {course.unit1.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-slate-100 transition-colors"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 mt-auto flex items-center justify-between border-t border-slate-100 bg-slate-50/60 -mx-6 -mb-6 p-5 rounded-b-2xl">
              <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                <CheckCircle2 className="size-4" />
                <span className="text-slate-600">
                  {course.unit1.completedModules}/{course.unit1.totalModules} Modules Done
                </span>
              </div>
              <button
                type="button"
                onClick={() => showNotice(`Resume module in ${course.unit1.title}`)}
                className="group/btn inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#1D72FE] text-[#1D72FE] hover:text-white font-heading font-semibold text-xs border border-slate-200 hover:border-[#1D72FE] transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <span>Resume</span>
                <ArrowRight className="size-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Unit 2 Card */}
          <div className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300">
            <div>
              {/* Top Row */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500">
                  IN PROGRESS
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  {course.unit2.progress}%
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-heading font-bold text-slate-900 mb-4 group-hover:text-[#1D72FE] transition-colors">
                {course.unit2.title}
              </h2>

              {/* Progress Gauge */}
              <div className="w-full mb-5">
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-300 to-[#1D72FE] transition-all duration-700"
                    style={{ width: `${course.unit2.progress}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-[11px] font-mono text-slate-500 mt-2">
                  <span>
                    {course.unit2.topicsReviewed}/{course.unit2.totalTopics} Topics reviewed
                  </span>
                  <span className="text-rose-600 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block" />
                    {course.unit2.overdue} overdue
                  </span>
                </div>
              </div>

              {/* Topic Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {course.unit2.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-slate-100 transition-colors"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 mt-auto flex items-center justify-between border-t border-slate-100 bg-slate-50/60 -mx-6 -mb-6 p-5 rounded-b-2xl">
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <span className="w-2 h-2 rounded-full bg-[#1D72FE] animate-ping" />
                <span>{course.unit2.scheduledTime}</span>
              </div>
              <button
                type="button"
                onClick={() => showNotice(`Continue study in ${course.unit2.title}`)}
                className="group/btn inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#1D72FE] text-[#1D72FE] hover:text-white font-heading font-semibold text-xs border border-slate-200 hover:border-[#1D72FE] transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="size-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 3: Sources & Practice Card */}
          <div className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-1.5 text-[#1D72FE]">
                  <ShieldCheck className="size-4" />
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-slate-900">
                    Sources
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-50 text-[#1D72FE] uppercase tracking-tight border border-blue-100">
                  {course.sources.badge}
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                {course.sources.description}
              </p>

              {/* List of Document Items */}
              <div className="flex flex-col gap-2 mb-4">
                {course.sources.items.map((doc, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/70 transition-all"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-100/70 flex items-center justify-center shrink-0 text-[#1D72FE]">
                        {doc.icon === 'file' && <FileText className="size-4" />}
                        {doc.icon === 'book' && <BookOpen className="size-4" />}
                        {doc.icon === 'quiz' && <HelpCircle className="size-4" />}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-semibold text-slate-800 truncate">
                          {doc.title}
                        </h4>
                        <p className="text-[10px] font-mono text-slate-400 truncate">{doc.subtitle}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => showNotice(`Simulated download: ${doc.title}`)}
                      title="Download/View document"
                      className="p-1.5 rounded-lg hover:bg-white text-slate-500 hover:text-[#1D72FE] border border-transparent hover:border-slate-200 transition-all cursor-pointer"
                    >
                      {doc.icon === 'quiz' ? <Eye className="size-3.5" /> : <Download className="size-3.5" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-3 mt-auto flex items-center justify-between border-t border-slate-100">
              <span className="text-[11px] font-mono text-slate-400">{course.sources.lastUpdated}</span>
              <button
                type="button"
                onClick={() => showNotice(`Opened ${course.shortName} Source Repository`)}
                className="text-xs font-heading font-semibold text-[#1D72FE] hover:text-[#1558CC] inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Browse Library</span>
                <ArrowRight className="size-3" />
              </button>
            </div>
          </div>
        </div>

        {/* 4. QUICK STATS & STUDY PULSE DOCK: Matches selected course */}
        <div className="w-full max-w-4xl p-1 rounded-2xl bg-white border border-slate-200/80 shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-3.5 rounded-xl bg-slate-50/70">
            {/* Metric 1: Streak */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-500 shadow-2xs">
                <Flame className="size-5 fill-amber-400 text-amber-500" />
              </div>
              <div>
                <div className="text-xs font-heading font-bold text-slate-900">{course.streak} Day Streak</div>
                <div className="text-[11px] font-mono text-slate-500">Personal best: {course.bestStreak} days</div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-7 bg-slate-200" />

            {/* Metric 2: Target Exam */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#1D72FE] shadow-2xs">
                <Calendar className="size-5" />
              </div>
              <div>
                <div className="text-xs font-heading font-bold text-slate-900">Target Exam: {course.examDate}</div>
                <div className="text-[11px] font-mono text-slate-500">
                  {course.name} ({course.daysLeft} days left)
                </div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-7 bg-slate-200" />

            {/* Metric 3: Next AI Review */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#1D72FE] shadow-2xs">
                <Clock className="size-5" />
              </div>
              <div>
                <div className="text-xs font-heading font-bold text-slate-900 flex items-center gap-1.5">
                  <span>Next AI Review</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D72FE] animate-ping" />
                </div>
                <div className="text-[11px] font-mono text-[#1D72FE] font-medium truncate max-w-[220px]">
                  {course.nextReviewTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. APP MOCKUP FOOTER */}
        <div className="w-full mt-10 pt-6 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-heading font-semibold text-slate-800">CourseLab</span>
            <span>•</span>
            <span>Interactive {course.shortName} Study Workspace</span>
            <span className="text-[10px] font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">MOCKUP ONLY</span>
          </div>
          <div className="flex items-center gap-5 text-slate-500">
            <span className="hover:text-slate-900 cursor-pointer">Syllabus Alignments</span>
            <span className="hover:text-slate-900 cursor-pointer">Diagnostic Rubrics</span>
            <span className="hover:text-slate-900 cursor-pointer">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
