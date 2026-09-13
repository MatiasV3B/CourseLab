import React, { useState } from 'react';
import { BookOpen, Search, ArrowRight } from 'lucide-react';

interface CourseItem {
  id: string;
  name: string;
  curriculum: 'AP' | 'IB';
  category: 'stem-sciences' | 'math-computing' | 'history-social' | 'languages-humanities';
  unitsCount: number;
  highlightUnit: string;
  description: string;
  examStructure: string;
  keyTopics: string[];
}

const COURSES_CATALOG: CourseItem[] = [
  // CATEGORY 1: STEM & Sciences (6 courses)
  {
    id: 'ap-bio',
    name: 'AP Biology',
    curriculum: 'AP',
    category: 'stem-sciences',
    unitsCount: 8,
    highlightUnit: 'Unit 3: Cellular Energetics & Enzyme Kinetics',
    description: 'Master College Board AP Biology standards including chemistry of life, cell structure, molecular genetics, gene expression, and natural selection.',
    examStructure: '60 Multiple Choice (50%) + 6 Free-Response Questions (50%)',
    keyTopics: ['Cellular Respiration', 'Photosynthesis', 'Mendelian Genetics', 'DNA Replication', 'Natural Selection'],
  },
  {
    id: 'ap-chem',
    name: 'AP Chemistry',
    curriculum: 'AP',
    category: 'stem-sciences',
    unitsCount: 9,
    highlightUnit: 'Unit 7: Equilibrium & Le Chatelier’s Principle',
    description: 'In-depth chemical principles aligned with the official CED: thermodynamics, kinetics, intermolecular forces, and acid-base titrations.',
    examStructure: '60 Multiple Choice (50%) + 7 Free-Response Questions (50%)',
    keyTopics: ['Equilibrium Constants', 'Acid-Base Buffers', 'Thermodynamics & Gibbs Free Energy', 'Kinetics Rate Laws'],
  },
  {
    id: 'ap-physics-1',
    name: 'AP Physics 1: Algebra-Based',
    curriculum: 'AP',
    category: 'stem-sciences',
    unitsCount: 8,
    highlightUnit: 'Unit 3: Circular Motion & Gravitation',
    description: 'Newtonian mechanics, work, energy, power, mechanical waves, sound, and simple introductory circuits based on the revised College Board standards.',
    examStructure: '50 Multiple Choice (50%) + 5 Free-Response Questions (50%)',
    keyTopics: ['Kinematics 2D', 'Newtonian Dynamics', 'Conservation of Energy', 'Simple Harmonic Motion', 'Torque & Rotational Statics'],
  },
  {
    id: 'ap-physics-c-mech',
    name: 'AP Physics C: Mechanics',
    curriculum: 'AP',
    category: 'stem-sciences',
    unitsCount: 7,
    highlightUnit: 'Unit 5: Rotation & Angular Momentum',
    description: 'Calculus-based classical mechanics covering kinematics, Newton’s laws of motion, work, energy, linear momentum, circular motion, and oscillations.',
    examStructure: '35 Multiple Choice (50%) + 3 Free-Response Questions (50%)',
    keyTopics: ['Differential Kinematics', 'Variable Force Work Integrals', 'Center of Mass Integrals', 'Moment of Inertia Theorems'],
  },
  {
    id: 'ap-environmental-science',
    name: 'AP Environmental Science (APES)',
    curriculum: 'AP',
    category: 'stem-sciences',
    unitsCount: 9,
    highlightUnit: 'Unit 6: Energy Resources & Global Consumption',
    description: 'Interrelationships of the natural world, identifying environmental problems, assessing ecological risks, and examining alternative solutions.',
    examStructure: '80 Multiple Choice (60%) + 3 Free-Response Questions (40%)',
    keyTopics: ['Ecosystem Biogeochemical Cycles', 'Biodiversity Threats', 'Renewable Energy Technologies', 'Atmospheric Pollution & Climate'],
  },
  {
    id: 'ib-bio-hl',
    name: 'IB Biology Higher Level (HL)',
    curriculum: 'IB',
    category: 'stem-sciences',
    unitsCount: 11,
    highlightUnit: 'Topic 7: Nucleic Acids & Molecular Protein Synthesis',
    description: 'Rigorous molecular and evolutionary inquiry for the IB Diploma Programme, covering cell biology, genetics, human physiology, and plant biology.',
    examStructure: 'Paper 1 (MCQ) + Paper 2 (Data Response & Extended) + Internal Assessment (IA)',
    keyTopics: ['DNA Structure & Transcription', 'Cladistics & Speciation', 'Photosynthetic Light Reactions', 'Kidney Osmoregulation'],
  },

  // CATEGORY 2: Mathematics & Computing (6 courses)
  {
    id: 'ap-calc-ab',
    name: 'AP Calculus AB',
    curriculum: 'AP',
    category: 'math-computing',
    unitsCount: 8,
    highlightUnit: 'Unit 6: Integration & Accumulation of Change',
    description: 'Fundamental differential and integral calculus concepts: limits, derivatives, mean value theorem, definite integrals, and differential equations.',
    examStructure: '45 Multiple Choice (50%) + 6 Free-Response Questions (50%)',
    keyTopics: ['Limits at Infinity', 'Chain Rule & Implicit Differentiation', 'Riemann Sums', 'Fundamental Theorem of Calculus', 'Slope Fields'],
  },
  {
    id: 'ap-calc-bc',
    name: 'AP Calculus BC',
    curriculum: 'AP',
    category: 'math-computing',
    unitsCount: 10,
    highlightUnit: 'Unit 10: Infinite Sequences & Taylor Series',
    description: 'Complete syllabus coverage including all AB topics plus advanced integration techniques, parametric and polar functions, and infinite series convergence.',
    examStructure: '45 Multiple Choice (50%) + 6 Free-Response Questions (50%)',
    keyTopics: ['Integration by Parts', 'Taylor & Maclaurin Polynomials', 'Polar Area Integrals', 'Series Convergence Tests', "Euler's Method"],
  },
  {
    id: 'ap-stats',
    name: 'AP Statistics',
    curriculum: 'AP',
    category: 'math-computing',
    unitsCount: 9,
    highlightUnit: 'Unit 6: Inference for Categorical Data (Proportions)',
    description: 'Collecting, analyzing, and drawing conclusions from data: experimental design, normal distributions, probability rules, and significance testing.',
    examStructure: '40 Multiple Choice (50%) + 6 Free-Response Questions (50%)',
    keyTopics: ['Linear Regression & Residuals', 'Randomized Controlled Trials', 'Central Limit Theorem', 'Chi-Square Goodness of Fit', 't-Tests & Confidence Intervals'],
  },
  {
    id: 'ap-precalc',
    name: 'AP Precalculus',
    curriculum: 'AP',
    category: 'math-computing',
    unitsCount: 4,
    highlightUnit: 'Unit 3: Trigonometric & Polar Functions',
    description: 'Deep mathematical modeling with polynomial, rational, exponential, logarithmic, trigonometric, and polar functions designed to prepare students for calculus.',
    examStructure: '48 Multiple Choice (62.5%) + 4 Free-Response Questions (37.5%)',
    keyTopics: ['Rate of Change Modeling', 'Logarithmic Transformations', 'Unit Circle & Sine Graphs', 'Parametric Planar Curves'],
  },
  {
    id: 'ap-csa',
    name: 'AP Computer Science A',
    curriculum: 'AP',
    category: 'math-computing',
    unitsCount: 10,
    highlightUnit: 'Unit 9: Inheritance & Object Polymorphism',
    description: 'Object-oriented programming methodology in Java, emphasizing problem solving, algorithm development, data structures, and code abstraction.',
    examStructure: '40 Multiple Choice (50%) + 4 Free-Response Code Questions (50%)',
    keyTopics: ['Classes & Object Construction', '2D Arrays & ArrayLists', 'Class Hierarchies & Interfaces', 'Recursive Algorithms', 'Sorting & Searching Algorithms'],
  },
  {
    id: 'ib-math-aa',
    name: 'IB Mathematics: Analysis & Approaches HL/SL',
    curriculum: 'IB',
    category: 'math-computing',
    unitsCount: 5,
    highlightUnit: 'Topic 5: Calculus (Differential & Integral Equations)',
    description: 'Rigorous mathematical proof, analytical geometry, advanced calculus, and vector spaces for the IB Diploma Programme.',
    examStructure: 'Paper 1 (Non-Calculator) + Paper 2 (Calculator) + Paper 3 (HL Only)',
    keyTopics: ['Mathematical Induction', 'Maclaurin Expansions', 'Integration by Substitution', 'Complex Numbers & Vectors', 'Kinematics Modeling'],
  },

  // CATEGORY 3: History & Social Sciences (6 courses)
  {
    id: 'ap-ush',
    name: 'AP United States History (APUSH)',
    curriculum: 'AP',
    category: 'history-social',
    unitsCount: 9,
    highlightUnit: 'Unit 5: Civil War & Reconstruction (1844–1877)',
    description: 'Comprehensive historical chronology from pre-Columbian societies through modern post-Cold War politics with DBQ and LEQ writing rubrics.',
    examStructure: '55 Stimulus MCQs (40%) + 3 SAQs (20%) + 1 DBQ (25%) + 1 LEQ (15%)',
    keyTopics: ['Colonial Chesapeake vs. New England', 'Jacksonian Democracy', 'Reconstruction Amendments', 'New Deal Programs', 'Cold War Foreign Policy'],
  },
  {
    id: 'ap-world',
    name: 'AP World History: Modern',
    curriculum: 'AP',
    category: 'history-social',
    unitsCount: 9,
    highlightUnit: 'Unit 3: Land-Based Empires (1450–1750)',
    description: 'Global cross-regional exchange networks, imperial administration, industrialization, world conflicts, and economic globalization from 1200 CE to present.',
    examStructure: '55 Stimulus MCQs (40%) + 3 SAQs (20%) + 1 DBQ (25%) + 1 LEQ (15%)',
    keyTopics: ['Silk Roads & Trans-Saharan Trade', 'Ottoman & Safavid Empires', 'Industrial Revolution Causes', 'World Wars & Decolonization'],
  },
  {
    id: 'ap-euro',
    name: 'AP European History',
    curriculum: 'AP',
    category: 'history-social',
    unitsCount: 9,
    highlightUnit: 'Unit 7: 19th-Century Perspective & Political Developments',
    description: 'Cultural, economic, political, and social developments that shaped Europe from 1450 Renaissance thought to the European Union and modern integration.',
    examStructure: '55 Stimulus MCQs (40%) + 3 SAQs (20%) + 1 DBQ (25%) + 1 LEQ (15%)',
    keyTopics: ['Italian Renaissance Humanism', 'Protestant Reformation', 'French Revolution & Napoleon', 'Industrialization & Marxism', 'Post-War European Integration'],
  },
  {
    id: 'ap-hug',
    name: 'AP Human Geography',
    curriculum: 'AP',
    category: 'history-social',
    unitsCount: 7,
    highlightUnit: 'Unit 2: Population & Migration Patterns',
    description: 'Syllabus-structured notebooks covering spatial patterns, demographic transition models, agricultural revolutions, and urban development.',
    examStructure: '60 Stimulus Multiple Choice (50%) + 3 Free-Response Questions (50%)',
    keyTopics: ['Demographic Transition Model', 'Malthusian Theory', 'Von Thünen Land Use', 'Borchert’s Epochs of Urban Growth', 'Gentrification & Sprawl'],
  },
  {
    id: 'ap-psych',
    name: 'AP Psychology',
    curriculum: 'AP',
    category: 'history-social',
    unitsCount: 9,
    highlightUnit: 'Unit 5: Cognitive Psychology & Memory Retention',
    description: 'Systematic and scientific study of human behavior and mental processes, including biological bases of behavior, cognition, learning, and clinical treatments.',
    examStructure: '100 Multiple Choice (66.7%) + 2 Free-Response Questions (33.3%)',
    keyTopics: ['Neural Communication & Neurotransmitters', 'Classical & Operant Conditioning', 'Information Processing & Memory Storage', 'Social Influence & Conformity'],
  },
  {
    id: 'ap-gov',
    name: 'AP U.S. Government & Politics',
    curriculum: 'AP',
    category: 'history-social',
    unitsCount: 5,
    highlightUnit: 'Unit 2: Interactions Among Branches of Government',
    description: 'Key principles, institutions, policies, and behavior of the constitutional system, landmark Supreme Court cases, and foundational democratic documents.',
    examStructure: '55 Multiple Choice (50%) + 4 Free-Response Questions (50%)',
    keyTopics: ['Federalist No. 10 & Brutus No. 1', 'Separation of Powers & Checks', 'Civil Liberties & 14th Amendment Due Process', 'SCOTUS Precedents (Marbury, McCulloch)'],
  },

  // CATEGORY 4: Languages & English Literature (2 courses)
  {
    id: 'ap-eng-lang',
    name: 'AP English Language & Composition',
    curriculum: 'AP',
    category: 'languages-humanities',
    unitsCount: 9,
    highlightUnit: 'Unit 6: Rhetorical Situation & Line of Reasoning',
    description: 'Rhetorical analysis, synthesis essay frameworks, and argument building grounded in non-fiction source evaluation and thesis strength.',
    examStructure: '45 Multiple Choice Reading & Writing (45%) + 3 Free-Response Essays (55%)',
    keyTopics: ['Rhetorical Appeals (Ethos, Pathos, Logos)', 'Synthesis Essay Evidence', 'Line of Reasoning Cohesion', 'Tone & Syntax Analysis', 'Counterargument Rebuttals'],
  },
  {
    id: 'ap-eng-lit',
    name: 'AP English Literature & Composition',
    curriculum: 'AP',
    category: 'languages-humanities',
    unitsCount: 9,
    highlightUnit: 'Unit 5: Poetry Analysis & Figurative Meaning',
    description: 'In-depth critical reading and analytical writing over works of recognized literary merit across drama, poetry, short fiction, and classic novels.',
    examStructure: '55 Multiple Choice (45%) + 3 Free-Response Essays (55%)',
    keyTopics: ['Poetic Meter & Rhyme Scheme', 'Character Foil Relationships', 'Narrative Perspective & Irony', 'Thematic Complexity & Motifs', 'Literary Argumentation'],
  },
];

export const CurriculumDirectorySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    'stem-sciences' | 'math-computing' | 'history-social' | 'languages-humanities'
  >('stem-sciences');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = COURSES_CATALOG.filter((course) => {
    const matchesCategory = searchQuery !== '' || course.category === activeCategory;
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
          <span>20 Official Syllabus Frameworks</span>
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

      {/* Filter Tabs and Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
        {/* Category Switcher Tabs: 6 in 1st, 6 in 2nd, 6 in 3rd, 2 in 4th */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {[
            { key: 'stem-sciences', label: 'STEM & Sciences (6)' },
            { key: 'math-computing', label: 'Math & Computing (6)' },
            { key: 'history-social', label: 'History & Social Sciences (6)' },
            { key: 'languages-humanities', label: 'Languages & English (2)' },
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
            placeholder="Search 20 official courses..."
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
    </section>
  );
};
