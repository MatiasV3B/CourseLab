import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is CourseLab and how does it differ from Quizlet, Khan Academy, or ChatGPT?',
    answer:
      'Unlike isolated flashcard decks or generic chatbots that hallucinate false citations, CourseLab is a unified interactive study workspace preloaded with official College Board AP® and IB® Diploma frameworks. Students don’t start with blank documents or manually uploaded PDFs; our Socratic AI Tutor guides students using exact syllabus citations, active recall practice, and structured note outlines mapped directly to official scoring rubrics.',
    category: 'Product & Methodology',
  },
  {
    question: 'Which Advanced Placement (AP®) and International Baccalaureate (IB®) courses are supported?',
    answer:
      'CourseLab launches with full unit-by-unit frameworks for over 20 courses including AP Biology, AP Calculus AB & BC, AP Chemistry, AP United States History (APUSH), AP World History: Modern, AP Human Geography, AP European History, AP Psychology, AP US Government & Politics, AP English Language, and IB Mathematics: Analysis & Approaches (HL/SL). Additional subjects are ingested regularly based on school and student community votes.',
    category: 'Curricula & Courses',
  },
  {
    question: 'How does CourseLab ensure AI zero hallucinations in complex STEM and History curricula?',
    answer:
      'CourseLab utilizes a deterministic Retrieval-Augmented Generation (RAG) architecture grounded strictly in official Course and Exam Descriptions (CED), textbook standards, and past exam scoring rubrics. The AI does not guess dates, invent mathematical derivatives, or hallucinate citations; every explanation provides verifiable page-level references and follows Socratic questioning to promote independent student critical thinking.',
    category: 'AI & Integrity',
  },
  {
    question: 'How does the Parent Diagnostic Score Projection work?',
    answer:
      'Parents receive transparent weekly email summaries detailing their teen’s mastery progress across each course unit. Rather than waiting until official exam scores arrive in July, CourseLab’s algorithmic model analyzes active retrieval performance to project expected official AP exam scores (from 1 to 5) and IB marks (from 1 to 7), providing peace of mind and pinpointing weak units months in advance.',
    category: 'Parents & Diagnostics',
  },
  {
    question: 'Is CourseLab compliant with student privacy laws like FERPA and COPPA?',
    answer:
      'Yes. CourseLab maintains strict, enterprise-grade data privacy compliance with both FERPA (Family Educational Rights and Privacy Act) and COPPA (Children’s Online Privacy Protection Act). Student notebooks, classroom queries, and diagnostic performance metrics are strictly isolated, encrypted in transit and at rest, and are never used to train public or commercial generative models.',
    category: 'Security & Privacy',
  },
  {
    question: 'Can teachers use CourseLab for assignments and anti-cheating exam generation?',
    answer:
      'Yes. Teachers can synchronize student rosters via Google Classroom, Canvas LMS, and Google Drive in 1 click. CourseLab allows educators to push curated reading modules and automatically generate shuffled, randomized exam variants (Versions A, B, and C) with comprehensive grading keys, preventing copy-pasting and ensuring authentic classroom assessment.',
    category: 'Educators & Classrooms',
  },
  {
    question: 'How does achieving a qualifying score (3, 4, or 5) save money on college tuition?',
    answer:
      'Most public and private universities across the United States and worldwide grant 3 to 8 college credits for scores of 3, 4, or 5 on AP exams and 5, 6, or 7 on IB Higher Level exams. Each passed exam can exempt students from an introductory semester course, effectively saving families between $1,500 and $4,500 per course in university tuition and textbook expenses.',
    category: 'College Credit & Value',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-[#1D72FE] font-bold uppercase tracking-wider mb-4 shadow-xs">
          <HelpCircle className="size-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Everything You Need to Know <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#1D72FE] to-blue-600">
            About CourseLab
          </span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
          Common questions from students, parents, and educators preparing for College Board AP® and IB® Diploma examinations.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:border-blue-300 transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-slate-900 hover:text-[#1D72FE] transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span
                  className={`p-1.5 rounded-full bg-slate-100 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-blue-50 text-[#1D72FE]' : ''
                  }`}
                >
                  <ChevronDown className="size-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                  <p>{item.answer}</p>
                  {item.category && (
                    <div className="mt-3 inline-block font-mono text-[11px] uppercase tracking-wider text-[#1D72FE] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                      {item.category}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Callout */}
      <div className="mt-10 p-6 rounded-2xl bg-slate-100/80 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#1D72FE] shadow-xs">
            <MessageCircle className="size-5" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base">
              Have questions about your specific AP or IB subjects?
            </h4>
            <p className="text-xs text-slate-500">
              Join our community Discord to chat directly with our curriculum engineers.
            </p>
          </div>
        </div>

        <a
          href="https://discord.gg/DE96t7w4XJ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs font-bold transition-all duration-150 active:scale-95 shadow-sm whitespace-nowrap"
        >
          <span>Ask on Discord</span>
          <ArrowRight className="size-3.5" />
        </a>
      </div>
    </section>
  );
};
