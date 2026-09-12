import React, { useState } from 'react';
import { OpenSourceBanner } from './components/OpenSourceBanner';
import { Navbar } from './components/Navbar';
import { HeroWaitlist } from './components/HeroWaitlist';
import { ProductShowcase } from './components/ProductShowcase';
import { HowItWorks } from './components/HowItWorks';
import ComparisonBlock from './components/ui/comparison-2';
import { IntegrationsHub } from './components/IntegrationsHub';
import { PricingSection } from './components/PricingSection';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import { CommunityDiscord } from './components/CommunityDiscord';
import { Footer } from './components/Footer';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { GitHubStarModal } from './components/GitHubStarModal';
import { InteractiveGrid } from './components/InteractiveGrid';

export default function App() {
  // Legal Modal State (Terms of Service & Privacy Policy)
  const [isLegalOpen, setIsLegalOpen] = useState<boolean>(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>('terms');

  // GitHub Star / Open Source Modal State
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState<boolean>(false);

  const handleOpenLegal = (doc: LegalDocType) => {
    setActiveLegalDoc(doc);
    setIsLegalOpen(true);
  };

  const handleOpenGitHubModal = () => {
    setIsGitHubModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-[#1D72FE] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Dynamic Interactive Checkered Grid (Squares enlarge under cursor) */}
      <InteractiveGrid />

      {/* Subtle Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-100/60 via-sky-100/25 to-transparent blur-3xl opacity-75" />
        <div className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] bg-blue-100/35 blur-[130px] rounded-full" />
        <div className="absolute top-[65%] left-[-10%] w-[600px] h-[600px] bg-sky-100/35 blur-[140px] rounded-full" />
      </div>

      {/* ANNOUNCEMENT: Open Source GitHub Star Banner */}
      <OpenSourceBanner onOpenModal={handleOpenGitHubModal} />

      {/* SECTION A: Sticky Glassmorphism Navbar */}
      <Navbar onOpenGitHubModal={handleOpenGitHubModal} />

      {/* Main Container */}
      <main className="relative z-10">
        {/* SECTION B: Hero Section & Official Tally Waitlist Intake Form */}
        <HeroWaitlist onOpenGitHubModal={handleOpenGitHubModal} />

        {/* SECTION C: Custom Showcase Frame (Mockup Container) */}
        <ProductShowcase />

        {/* SECTION D: How It Works in 4 Steps */}
        <HowItWorks />

        {/* SECTION E: Competitive Differentiation Block ("Why CourseLab") */}
        <ComparisonBlock />

        {/* SECTION F: 1-Click Integrations Hub (NotebookLM, Classroom, Drive) */}
        <IntegrationsHub />

        {/* SECTION G: Transparent Pricing Section */}
        <PricingSection />

        {/* REVIEWS SECTION: Testimonial Carousel with Student & Teacher Portraits */}
        <ReviewsCarousel />

        {/* SECTION H: Official Discord Community Banner */}
        <CommunityDiscord />
      </main>

      {/* SECTION I: Footer */}
      <Footer onOpenLegal={handleOpenLegal} onOpenGitHubModal={handleOpenGitHubModal} />

      {/* GITHUB OPEN SOURCE & STAR MODAL: How to get CourseLab and star on GitHub */}
      <GitHubStarModal
        isOpen={isGitHubModalOpen}
        onClose={() => setIsGitHubModalOpen(false)}
      />

      {/* LEGAL MODAL: Terms of Service & Privacy Policy (FERPA & COPPA) */}
      <LegalModal
        isOpen={isLegalOpen}
        activeDoc={activeLegalDoc}
        onClose={() => setIsLegalOpen(false)}
        onSelectDoc={(doc) => setActiveLegalDoc(doc)}
      />
    </div>
  );
}
