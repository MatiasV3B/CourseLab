import React from "react";
import {
  RiCheckLine,
  RiCloseLine,
  RiArrowRightLine,
  RiShieldCheckLine,
} from "@remixicon/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ComparisonBlockProps {
  brandName?: string;
  badgeLabel?: string;
  headline?: string;
  subheadline?: string;
  brandPoints?: string[];
  othersPoints?: string[];
}

const defaultCourseLabPoints = [
  "Preloaded official College Board AP & IB syllabus frameworks",
  "NotebookLM-grounded AI Tutor with exact page citations & 0% hallucinations",
  "Anti-cheating exam generator (A/B/C versions) with scoring rubrics",
  "8-minute AI-generated audio summaries for daily school commutes",
  "Active interactive notebook with live diagramming and concept maps",
  "Unites students and teachers in a single connected classroom",
  "Seamless Google Classroom & Google Drive 1-click roster synchronization",
  "Strict FERPA & COPPA compliance, student work never trains public AI",
];

const defaultOthersPoints = [
  "Starts completely blank; requires uploading entire textbooks manually",
  "Generic consumer AI chatbots hallucinate equations, dates, and false citations",
  "Isolated flashcard decks without cohesive curricular hierarchy",
  "No audio summaries or synthesized podcast reviews",
  "Separate tools for teachers and students cause disconnected classrooms",
  "Lacks printable anti-cheating exam generators or versioning",
  "Expensive per-seat licensing with complex district procurement",
  "Student notes and queries used to train public commercial LLMs",
];

function CheckRow({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground">
        <RiCheckLine className="size-3" aria-hidden />
      </span>
      <span className="text-sm font-medium text-foreground">{text}</span>
    </li>
  );
}

function CrossRow({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-sm bg-muted text-muted-foreground">
        <RiCloseLine className="size-3" aria-hidden />
      </span>
      <span className="text-sm text-muted-foreground">{text}</span>
    </li>
  );
}

export default function ComparisonBlock({
  brandName = "CourseLab",
  badgeLabel = "Why CourseLab",
  headline = "Built differently, on purpose",
  subheadline = "We obsessed over the academic details others skip. Here is what that means for AP & IB scholars every single day.",
  brandPoints = defaultCourseLabPoints,
  othersPoints = defaultOthersPoints,
}: ComparisonBlockProps) {
  return (
    <section id="why-courselab" className="flex w-full items-center justify-center bg-background px-4 sm:px-6 py-20 text-foreground border-t border-border">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-3 px-3 py-1 font-mono text-xs text-primary border-primary/30 bg-primary/5">
            <RiShieldCheckLine className="mr-1.5 size-3.5" data-icon="inline-start" />
            {badgeLabel}
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground font-heading">
            {headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            {subheadline}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 items-stretch">
          {/* Brand Card */}
          <Card className="border-primary/40 ring-1 ring-primary/20 shadow-xl bg-white relative z-10 flex flex-col justify-between">
            <div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold text-foreground font-heading">{brandName}</CardTitle>
                  <Badge variant="default" className="bg-primary text-primary-foreground font-semibold">Recommended</Badge>
                </div>
                <CardDescription className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Everything your classroom needs, without starting from blank pages.
                </CardDescription>
              </CardHeader>

              <Separator />

              <CardContent className="pt-5">
                <ul className="flex flex-col gap-3.5">
                  {brandPoints.map((point) => (
                    <CheckRow key={point} text={point} />
                  ))}
                </ul>
              </CardContent>
            </div>

            <CardFooter className="border-t border-border pt-4">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 shadow-md"
              >
                <a href="#waitlist" className="inline-flex items-center justify-center gap-2">
                  Join the Waitlist
                  <RiArrowRightLine className="size-4" data-icon="inline-end" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Others Card */}
          <Card className="bg-white border-slate-200 shadow-sm relative z-10 flex flex-col justify-between">
            <div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-muted-foreground font-heading">
                    The others
                  </CardTitle>
                  <span className="text-[11px] font-mono text-muted-foreground">Legacy Tools</span>
                </div>
                <CardDescription className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Common friction points students and teachers encounter with generic study apps.
                </CardDescription>
              </CardHeader>

              <Separator />

              <CardContent className="pt-5">
                <ul className="flex flex-col gap-3.5">
                  {othersPoints.map((point) => (
                    <CrossRow key={point} text={point} />
                  ))}
                </ul>
              </CardContent>
            </div>

            <CardFooter className="border-t border-border pt-4">
              <Button
                variant="secondary"
                asChild
                className="w-full font-medium py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground">
                  See How CourseLab Works
                  <RiArrowRightLine className="size-4" data-icon="inline-end" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
