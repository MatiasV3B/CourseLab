import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Sparkles, ShieldCheck } from 'lucide-react';

export interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
  tag?: string;
}

export interface FeaturesProps {
  id?: string;
  badge?: string;
  heading?: string;
  subheading?: string;
  items?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    icon: <Zap className="size-6 text-primary" aria-hidden />,
    title: 'Preloaded Curricula',
    description:
      'Jump directly into official College Board AP CEDs and IB syllabus frameworks structured by unit and essential knowledge. Never start from a blank page.',
    tag: 'Official Frameworks',
  },
  {
    icon: <Sparkles className="size-6 text-primary" aria-hidden />,
    title: 'Zero-Hallucination AI Tutor',
    description:
      'Grounded via Google NotebookLM. The tutor answers questions citing exclusively official CED guides, textbooks, and notes with exact page numbers—never inventing facts.',
    tag: 'NotebookLM Grounded',
  },
  {
    icon: <ShieldCheck className="size-6 text-primary" aria-hidden />,
    title: 'Anti-Cheat & Class Sync',
    description:
      'Generate multi-version (A/B/C) exams with printable rubrics, and sync assignments with Google Classroom in one click to bridge students and educators.',
    tag: 'FERPA Compliant',
  },
];

export function Features({
  id = 'how-it-works',
  badge = 'Engineered Study Workflow',
  heading = 'Master Any Subject with Precision.',
  subheading = 'Purpose-built for AP & IB coursework. Replace fragmented binders, unverified internet searches, and generic AI hallucinations with verified academic intelligence.',
  items = defaultFeatures,
}: FeaturesProps) {
  return (
    <section id={id} className="py-20 md:py-32 border-t border-slate-200 text-foreground relative z-10">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          {badge && (
            <Badge variant="outline" className="mb-3 px-3 py-1 font-mono text-xs text-primary border-primary/30 bg-primary/5">
              {badge}
            </Badge>
          )}
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl font-heading text-foreground">
            {heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {subheading}
          </p>
        </div>

        <div className="mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {items.map((item, idx) => (
            <Card
              key={idx}
              className="group border border-slate-200/90 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between text-center p-4 relative z-10"
            >
              <CardHeader className="pb-3">
                <CardDecorator>{item.icon}</CardDecorator>

                {item.tag && (
                  <span className="mt-4 inline-block text-[11px] font-mono font-semibold uppercase tracking-wider text-primary">
                    {item.tag}
                  </span>
                )}

                <h3 className="mt-2 text-lg font-bold text-foreground font-heading group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div aria-hidden className="relative mx-auto size-20 flex items-center justify-center mb-1">
    <div className="absolute inset-0 rounded-2xl bg-blue-50/80 border border-blue-100 shadow-xs" />
    <div className="relative z-10 flex size-12 items-center justify-center rounded-xl bg-white border border-slate-200/80 shadow-sm transition-transform duration-300 group-hover:scale-110">
      {children}
    </div>
  </div>
);

export default Features;
