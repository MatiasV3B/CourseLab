import React, { useState } from 'react';
import { Check, Clock, Sparkles, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  seats?: string;
  description: string;
  badge: string | null;
  isFeatured: boolean;
  features: string[];
}

export const PricingSection: React.FC = () => {
  const [pricingRole, setPricingRole] = useState<'student' | 'teacher' | 'school'>('student');

  const studentPlans: PricingPlan[] = [
    {
      name: 'Student Starter',
      price: '0',
      period: '/mo',
      description: 'Essential tools for self-studying high schoolers.',
      badge: null,
      isFeatured: false,
      features: [
        '3 preloaded courses',
        '10 quizzes / month',
        '10 Tutor Me chats / week',
        '5 presentations / week',
        '5 interactive graphs / month',
        'Watermarked PDF export',
      ],
    },
    {
      name: 'Scholar Plus',
      price: '5',
      period: '/mo',
      description: 'Recommended for full-load AP and IB diploma candidates.',
      badge: 'Most Popular',
      isFeatured: true,
      features: [
        '5 active courses',
        '50 quizzes / month',
        'High-allowance Tutor Me chats',
        '20 presentations / week',
        '20 interactive graphs / month',
        'Clean PDF export (no watermark)',
      ],
    },
    {
      name: 'Mastery Pro',
      price: '10',
      period: '/mo',
      description: 'Maximum throughput for intensive multi-exam cramming.',
      badge: null,
      isFeatured: false,
      features: [
        'Unlimited courses',
        'Unlimited quizzes',
        'Priority Tutor Me chat (Ultra speed)',
        '50 presentations / week',
        '50 interactive graphs / month',
        'Ultra-HD clean export',
      ],
    },
  ];

  const teacherPlans: PricingPlan[] = [
    {
      name: 'Teacher Free',
      price: '0',
      period: '/mo',
      description: 'Get started with your first active high school classes.',
      badge: null,
      isFeatured: false,
      features: [
        '3 active classrooms',
        '5 exams / month',
        'Anti-cheating versions (A/B/C)',
        '5 graphs / month',
        'Watermarked PDF export',
      ],
    },
    {
      name: 'Teacher Plus',
      price: '10',
      period: '/mo',
      description: 'Ideal for individual teachers managing multiple course sections.',
      badge: 'Teacher Choice',
      isFeatured: true,
      features: [
        '7 classrooms',
        '50 exams / month',
        'Anti-cheating versions included',
        '20 graphs / month',
        'Diagnostic question-level analytics',
        'Clean PDF export',
      ],
    },
    {
      name: 'Teacher Pro',
      price: '25',
      period: '/mo',
      description: 'Unlimited power for high school educators and AP/IB department leads.',
      badge: null,
      isFeatured: false,
      features: [
        'Unlimited classrooms',
        'Unlimited exams',
        '50 graphs / month',
        'AI-generated student improvement plans',
        'Clean PDF & editable Word (.docx)',
        'Priority curriculum support',
      ],
    },
  ];

  const schoolPlans: PricingPlan[] = [
    {
      name: 'School Plus',
      price: '10',
      period: '/seat/mo',
      seats: 'Up to 50 seats',
      description: 'Designed for academic departments and grade-level cohorts up to 50 seats.',
      badge: 'Department Choice',
      isFeatured: true,
      features: [
        'Up to 50 seats maximum',
        'Same per-seat rate as Teacher Plus ($10/seat)',
        'All Teacher Plus capabilities included',
        'Centralized department admin dashboard',
        'Shared exam bank & curriculum folders',
        'Anti-cheating exam generator (A/B/C)',
        'Department-level diagnostic analytics',
        'Clean PDF & editable Word (.docx) export',
      ],
    },
    {
      name: 'School Pro',
      price: '25',
      period: '/seat/mo',
      seats: 'Up to 150 seats',
      description: 'Comprehensive institutional deployment for high schools and academies up to 150 seats.',
      badge: null,
      isFeatured: false,
      features: [
        'Up to 150 seats maximum',
        'Same per-seat rate as Teacher Pro ($25/seat)',
        'All Teacher Pro capabilities included',
        'Unlimited classrooms & exam generation',
        'Full LMS integration (Canvas & Google Classroom)',
        'School-wide diagnostic AP & IB score projections',
        'Enterprise district data isolation & FERPA compliance',
        'Dedicated onboarding & faculty training',
      ],
    },
  ];

  const currentPlans =
    pricingRole === 'student'
      ? studentPlans
      : pricingRole === 'teacher'
      ? teacherPlans
      : schoolPlans;

  return (
    <section id="pricing" className="py-24 sm:py-32 border-t border-border bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center mb-10">
          <Badge variant="outline" className="px-3 py-1 font-mono text-xs text-primary border-primary/30 bg-primary/5">
            Transparent Investment
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-heading text-foreground">
            Simple, Predictable Plans.
          </h2>
          <p className="max-w-xl text-muted-foreground text-sm sm:text-base">
            No hidden fees, no credit card required to start, and full district data isolation.
          </p>

          {/* Interactive Role Toggle with 3 distinct categories */}
          <div className="mt-3 relative inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner w-full sm:w-auto min-w-[320px] sm:min-w-[440px]">
            {/* Smooth Sliding Pill */}
            <div
              className="absolute top-1.5 bottom-1.5 rounded-xl bg-white shadow-md border border-slate-200/80 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none"
              style={{
                left:
                  pricingRole === 'student'
                    ? '6px'
                    : pricingRole === 'teacher'
                    ? 'calc(33.333% + 2px)'
                    : 'calc(66.666% - 2px)',
                width: 'calc(33.333% - 4px)',
              }}
            />
            <button
              onClick={() => setPricingRole('student')}
              className={cn(
                'relative z-10 flex-1 px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 text-center whitespace-nowrap',
                pricingRole === 'student'
                  ? 'text-slate-900 font-bold'
                  : 'text-slate-500 hover:text-slate-900'
              )}
            >
              For Students
            </button>
            <button
              onClick={() => setPricingRole('teacher')}
              className={cn(
                'relative z-10 flex-1 px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 text-center whitespace-nowrap',
                pricingRole === 'teacher'
                  ? 'text-slate-900 font-bold'
                  : 'text-slate-500 hover:text-slate-900'
              )}
            >
              For Teachers
            </button>
            <button
              onClick={() => setPricingRole('school')}
              className={cn(
                'relative z-10 flex-1 px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 text-center whitespace-nowrap',
                pricingRole === 'school'
                  ? 'text-slate-900 font-bold'
                  : 'text-slate-500 hover:text-slate-900'
              )}
            >
              For Schools
            </button>
          </div>

          {/* Availability Notice Banner */}
          <div className="mt-4 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-blue-50/80 border border-blue-200/70 text-blue-900 text-xs sm:text-sm font-medium shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D72FE] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1D72FE]"></span>
            </span>
            <span>
              <strong className="font-semibold">In Active Development:</strong> Plans and subscriptions are not available for purchase yet, but will open soon upon official launch.
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid with Animated Keyframe Switch (3 cards for student/teacher, 2 cards for school) */}
        <div
          key={pricingRole}
          className={cn(
            'animate-card-switch grid gap-6 lg:gap-8 items-stretch mx-auto pt-6',
            currentPlans.length === 2
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl'
              : 'grid-cols-1 md:grid-cols-3 max-w-6xl'
          )}
        >
          {currentPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col justify-between rounded-2xl border transition-all p-6 pt-10 sm:p-8 sm:pt-11',
                plan.isFeatured
                  ? 'border-2 border-[#1D72FE] ring-2 ring-[#1D72FE]/15 shadow-xl bg-white relative z-10'
                  : 'border-border bg-white relative z-10 shadow-sm hover:shadow-md'
              )}
            >
              {/* Most Popular / Department Choice Floating Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
                  <span className="inline-flex items-center justify-center gap-1.5 px-4 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-[#1D72FE] text-white shadow-md ring-4 ring-white">
                    <Sparkles className="size-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div
                    className={cn(
                      'text-xs font-mono uppercase tracking-wider font-semibold',
                      plan.isFeatured ? 'text-[#1D72FE]' : 'text-muted-foreground'
                    )}
                  >
                    {plan.name}
                  </div>
                  {plan.seats && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-blue-50 text-[#1D72FE] border border-blue-200/80">
                      <Users className="size-3" />
                      {plan.seats}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-lg font-semibold text-foreground">$</span>
                  <span className="text-5xl lg:text-6xl font-medium tracking-tighter text-foreground font-heading">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground self-end mb-1">
                    {plan.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground mb-6 min-h-[36px]">
                  {plan.description}
                </p>

                <Separator className="mb-6" />

                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between gap-3 text-xs sm:text-sm font-medium text-foreground"
                    >
                      <span>{feature}</span>
                      <Check className="size-4 shrink-0 text-primary" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status Indicator (Coming Soon) */}
              <div className="mt-8 pt-4 border-t border-border">
                <div
                  className={cn(
                    'w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold flex items-center justify-center gap-2 border transition-all',
                    plan.isFeatured
                      ? 'bg-blue-50/90 text-blue-700 border-blue-200/80 shadow-sm'
                      : 'bg-muted/40 text-muted-foreground border-border/80'
                  )}
                >
                  <Clock className={cn('size-3.5', plan.isFeatured ? 'text-[#1D72FE]' : 'text-slate-400')} />
                  <span>Not Available Yet · Coming Soon</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
