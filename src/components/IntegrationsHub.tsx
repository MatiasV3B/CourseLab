import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface IntegrationItem {
  logoSrc: string;
  logoAlt: string;
  name: string;
  tag: string;
  description: string;
  badge: string;
}

const integrations: IntegrationItem[] = [
  {
    logoSrc: '/NotebookLM.png',
    logoAlt: 'NotebookLM Logo',
    name: 'NotebookLM (Google)',
    tag: 'ZERO HALLUCINATIONS',
    description:
      'Grounded source indexing that eliminates hallucinations. The AI tutor is strictly constrained to your official AP/IB CEDs, textbooks, and notes with direct page citations.',
    badge: 'VERIFIED CITATIONS',
  },
  {
    logoSrc: '/Classroom.png',
    logoAlt: 'Google Classroom Logo',
    name: 'Google Classroom',
    tag: '1-CLICK SSO & ROSTERS',
    description:
      'Direct class roster import and assignment synchronization. Teachers distribute dynamic notebook templates and quizzes with zero district migration friction.',
    badge: 'ROSTER SYNC',
  },
  {
    logoSrc: '/Drive.png',
    logoAlt: 'Google Drive Logo',
    name: 'Google Drive',
    tag: 'LIVE REPOSITORY MIRROR',
    description:
      'Instant OAuth connection to school Google Drive folders. Automatically parse textbooks, lecture slides, and student study decks with live folder mirroring.',
    badge: 'INSTANT OAUTH',
  },
];

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div aria-hidden className="relative mx-auto size-20 flex items-center justify-center mb-1">
    <div className="absolute inset-0 rounded-2xl bg-blue-50/80 border border-blue-100 shadow-xs" />
    <div className="relative z-10 flex size-12 items-center justify-center rounded-xl bg-white border border-slate-200/80 shadow-sm transition-transform duration-300 group-hover:scale-110">
      {children}
    </div>
  </div>
);

export const IntegrationsHub: React.FC = () => {
  return (
    <section
      id="integrations"
      className="py-20 md:py-32 border-t border-border bg-background text-foreground"
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="mb-3 px-3 py-1 font-mono text-xs text-primary border-primary/30 bg-primary/5"
          >
            Seamless Interoperability
          </Badge>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl font-heading text-foreground">
            1-Click Connected Ecosystem.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Works natively alongside the school tools your district already pays for. Zero migration headaches.
          </p>
        </div>

        <div className="mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {integrations.map((item) => (
            <Card
              key={item.name}
              className="group border border-slate-200/90 bg-white relative z-10 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between text-center p-4"
            >
              <CardHeader className="pb-3">
                <CardDecorator>
                  <img
                    src={item.logoSrc}
                    alt={item.logoAlt}
                    className="size-9 object-contain drop-shadow-xs"
                    loading="lazy"
                  />
                </CardDecorator>

                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-2 text-lg font-bold text-foreground font-heading group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="pt-3 border-t border-border text-[11px] font-mono text-muted-foreground font-medium">
                  ✓ {item.badge}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
