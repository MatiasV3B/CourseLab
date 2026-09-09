import React from 'react';

export type LegalDocType = 'terms' | 'privacy';

interface LegalModalProps {
  isOpen: boolean;
  activeDoc: LegalDocType;
  onClose: () => void;
  onSelectDoc: (doc: LegalDocType) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  activeDoc,
  onClose,
  onSelectDoc,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex p-1 rounded-xl bg-slate-200/70 border border-slate-200">
              <button
                onClick={() => onSelectDoc('terms')}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeDoc === 'terms'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Terms of Service
              </button>
              <button
                onClick={() => onSelectDoc('privacy')}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeDoc === 'privacy'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Privacy Policy (FERPA/COPPA)
              </button>
            </div>
            <span className="hidden sm:inline text-xs font-mono text-[#1D72FE] font-medium">
              Effective: Academic Year 2026-2027
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-slate-400 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Document Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
          
          {activeDoc === 'terms' ? (
            /* TERMS OF SERVICE */
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-[#1D72FE] uppercase tracking-wider font-semibold">
                  CourseLab Legal Agreement
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Terms of Service
                </h2>
                <p className="text-xs text-slate-500 mt-1">Last Updated: September 2026</p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950">
                <strong>Important Notice:</strong> CourseLab is an educational technology service engineered for high school Advanced Placement (AP) and International Baccalaureate (IB) courses. By accessing or using CourseLab, you agree to these Terms.
              </div>

              <section className="space-y-2">
                <h3 className="font-heading text-lg font-bold text-slate-900">1. Eligibility and Educational Context</h3>
                <p>
                  CourseLab is accessible to individual high school scholars, secondary educators, and accredited school districts. Users under the age of 18 may use CourseLab with educator authorization or parental consent pursuant to applicable federal education guidelines.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-lg font-bold text-slate-900">2. Preloaded Syllabi and Third-Party Marks</h3>
                <p>
                  CourseLab organizes educational study units aligned with public frameworks. Advanced Placement®, AP®, and College Board® are trademarks registered by the College Entrance Examination Board, which was not involved in the production of, and does not endorse, CourseLab. International Baccalaureate® (IB) is a registered trademark of the International Baccalaureate Organization.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-lg font-bold text-slate-900">3. Academic Integrity &amp; Anti-Cheating Protocol</h3>
                <p>
                  CourseLab tools—including practice quiz generation, interactive diagrams, and AI Tutor Me—are strictly designated to facilitate active study, conceptual retention, and teacher-led classroom assessment. Generating unauthorized aids during proctored testing constitutes a violation of these Terms.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-lg font-bold text-slate-900">4. User Accounts and Classroom Join Codes</h3>
                <p>
                  Educators may invite students to collaborative classrooms via unique join codes. Teachers retain administrative oversight over classroom spaces, assignments, and exam configurations created within their institution.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-lg font-bold text-slate-900">5. Subscriptions, Beta Cohorts &amp; Cancellations</h3>
                <p>
                  Access to the CourseLab beta cohort includes one complimentary month of the Plus tier for verified applicants. Subscriptions may be modified or cancelled at any time through account settings without penalty.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-lg font-bold text-slate-900">6. Limitation of Liability</h3>
                <p>
                  CourseLab is provided on an &quot;as is&quot; and &quot;as available&quot; basis for educational enrichment. While we employ rigorous syllabus verification to minimize inaccuracies, CourseLab does not guarantee specific standardized test scores or official exam outcomes.
                </p>
              </section>
            </div>
          ) : (
            /* PRIVACY POLICY */
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-[#1D72FE] uppercase tracking-wider font-semibold">
                  CourseLab Data Protection &amp; Student Safety
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Privacy Policy (FERPA &amp; COPPA Compliant)
                </h2>
                <p className="text-xs text-slate-500 mt-1">Last Updated: September 2026</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                <strong>Our Core Privacy Guarantee:</strong> Student notebooks, question queries, and classroom work are strictly isolated. We never sell student information and <u>never</u> use student data to train public artificial intelligence models.
              </div>

              <section className="space-y-2">
                <h3 className="font-heading text-lg font-bold text-slate-900">1. Compliance with FERPA and COPPA</h3>
                <p>
                  CourseLab complies with the Family Educational Rights and Privacy Act (FERPA, 34 CFR Part 99) and the Children&apos;s Online Privacy Protection Act (COPPA). When operating under an institutional district agreement, CourseLab acts as a &quot;School Official&quot; with a legitimate educational interest.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-lg font-bold text-slate-900">2. Information We Collect</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Account Credentials:</strong> Full name, school district email, role (student or educator), and academic level.</li>
                  <li><strong>Curricular Selections:</strong> Chosen AP/IB subjects, unit completion checkpoints, and study analytics.</li>
                  <li><strong>Student-Generated Content:</strong> User notes, quiz attempts, and practice queries submitted to Tutor Me.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-lg font-bold text-slate-900">3. Zero Model Training Policy</h3>
                <p>
                  Unlike consumer AI chatbots, queries submitted to CourseLab Tutor Me are processed through private enterprise APIs with zero data-retention for model training. Your coursework and ideas remain your intellectual property.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-lg font-bold text-slate-900">4. Data Encryption &amp; Security Architecture</h3>
                <p>
                  All data is encrypted in transit using TLS 1.3 and at rest with AES-256 bit encryption. Access controls and isolated database shards ensure student notes cannot be accessed across unauthorized classrooms.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-lg font-bold text-slate-900">5. Data Deletion and Portability</h3>
                <p>
                  Students and teachers can export notes in clean PDF formats at any time. Upon formal request by an individual or participating school district, all associated account data and records will be permanently purged within 30 days.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-heading text-lg font-bold text-slate-900">6. Contact Our Privacy Officer</h3>
                <p>
                  If you or your school district administration have privacy questions, email our Data Protection Team at <span className="text-[#1D72FE] font-mono font-medium">privacy@courselab.app</span>.
                </p>
              </section>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between flex-shrink-0">
          <span className="text-xs font-mono text-slate-500">
            CourseLab Trust &amp; Safety
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-[#1D72FE] hover:bg-[#1558CC] transition-colors shadow-sm"
          >
            I Understand &amp; Close
          </button>
        </div>

      </div>
    </div>
  );
};
