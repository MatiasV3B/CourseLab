import React from 'react';

const DiscordIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5 fill-current' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export const CommunityDiscord: React.FC = () => {
  return (
    <section id="community" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="relative z-10 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 md:p-12 overflow-hidden shadow-xl shadow-slate-200/50 transition-all hover:shadow-2xl hover:border-slate-300">
        {/* Ambient subtle blurple glow */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#5865F2]/5 blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#EEF2FF] border border-[#C7D2FE] flex items-center justify-center text-[#5865F2] shadow-sm">
                <DiscordIcon className="w-6 h-6 fill-[#5865F2]" />
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  Join the Official CourseLab Discord
                </h3>
                <p className="text-xs font-mono text-slate-500 font-medium">Students &amp; Teachers · Suggest New Courses &amp; Vote</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              In development. Suggest new AP and IB courses, vote on upcoming unit priorities, and connect directly with high school educators and students.
            </p>

            {/* Discord Channel Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-600">
              <span className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200/80">#ap-bio-study</span>
              <span className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200/80">#frq-scoring-rubrics</span>
              <span className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200/80">#teacher-lounge</span>
              <span className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200/80">#feature-voting</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            {/* Clear/Light Discord Button */}
            <a
              href="https://discord.gg/DE96t7w4XJ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl font-heading font-bold text-[#5865F2] bg-white hover:bg-slate-50 border-2 border-[#5865F2]/25 hover:border-[#5865F2] shadow-md shadow-[#5865F2]/10 hover:shadow-lg hover:shadow-[#5865F2]/15 transition-all duration-200 active:scale-95 text-sm sm:text-base cursor-pointer"
            >
              <DiscordIcon className="w-5 h-5 fill-[#5865F2]" />
              <span>Join Discord Server</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
