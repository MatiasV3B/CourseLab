import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  school: string;
  comment: string;
  badge: string;
}

const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    name: "Sophia Martinez",
    role: "AP Biology Student",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    school: "Westwood High School, TX",
    badge: "Scored 5 on AP Exam",
    comment: "CourseLab changed how I study for AP Bio. Instead of spending 3 hours summarizing 80 pages of Campbell Biology, the preloaded units and CED-grounded AI tutor let me test my understanding with actual College Board scoring rubrics. I went from a 3 on my first mock to a 5 on the actual exam!"
  },
  {
    id: 2,
    name: "Dr. David Chen",
    role: "AP US History (APUSH) Teacher",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    school: "Montgomery County Public Schools, MD",
    badge: "14 Years AP Teaching",
    comment: "The anti-cheating exam generator alone saves me 6 hours every single Sunday. Generating 3 randomized A/B/C stimulus-based multiple choice versions with College Board-aligned answer keys used to take an entire weekend. My students are genuinely more prepared and engaged."
  },
  {
    id: 3,
    name: "Maya Patel",
    role: "AP Calculus BC & Physics Student",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    school: "Stevenson High School, IL",
    badge: "National AP Scholar",
    comment: "The 8-minute audio summaries are a lifesaver during my bus commute. Being able to listen to a verified breakdown of Taylor series or electromagnetic induction right before walking into class locked in my conceptual foundation completely."
  },
  {
    id: 4,
    name: "Marcus Washington",
    role: "AP Chemistry & Environmental Science",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    school: "Oak Creek High School, WI",
    badge: "Department Chair",
    comment: "Most AI tools hallucinate equations or cite random unvetted blogs. CourseLab's strict grounding in the official College Board Course and Exam Description gives our department complete peace of mind. Plus, it strictly complies with district FERPA and COPPA protocols."
  },
  {
    id: 5,
    name: "Chloe Nguyen",
    role: "AP Psychology Student",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    school: "Torrey Pines High School, CA",
    badge: "AP Scholar with Distinction",
    comment: "The preloaded unit vocabulary notebooks and interactive psychological concept maps are unreal. I never had to waste time building blank Notion templates from scratch. CourseLab had every essential knowledge point ready on day one."
  },
  {
    id: 6,
    name: "Robert Miller",
    role: "High School AP Coordinator",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
    rating: 5,
    school: "Cherry Creek School District, CO",
    badge: "District Administrator",
    comment: "We piloted CourseLab across our junior and senior cohorts. Our overall AP qualifying pass rate increased by 22% compared to last year. The seamless classroom roster sync makes onboarding instant for both students and faculty."
  }
];

export const ReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive calculation for visible items per slide
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, REVIEWS_DATA.length - itemsPerView);

  // Auto scroll every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch Swipe Gesture Handlers for Mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
  };

  return (
    <section id="reviews" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#1D72FE] uppercase font-semibold">
            Community Endorsements
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Loved by AP Scholars &amp; Educators.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
            Real feedback from verified beta students and high school teachers preparing for May exams.
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-3 mt-6 md:mt-0">
          <button
            onClick={handlePrev}
            aria-label="Previous Review"
            className="w-11 h-11 rounded-xl bg-white border border-slate-200 hover:border-[#1D72FE] text-slate-700 flex items-center justify-center transition-all active:scale-95 shadow-sm hover:text-[#1D72FE]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Review"
            className="w-11 h-11 rounded-xl bg-white border border-slate-200 hover:border-[#1D72FE] text-slate-700 flex items-center justify-center transition-all active:scale-95 shadow-sm hover:text-[#1D72FE]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Container with Smooth Sliding Track & Mobile Touch Swipe */}
      <div
        className="relative overflow-hidden -mx-2 px-2 py-4 select-none touch-pan-y"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] gap-6"
          style={{
            transform: `translateX(calc(-${currentIndex} * (100% + 24px) / ${itemsPerView}))`,
          }}
        >
          {REVIEWS_DATA.map((review, idx) => {
            const isVisible = idx >= currentIndex && idx < currentIndex + itemsPerView;
            return (
              <div
                key={review.id}
                style={{
                  width: `calc(${100 / itemsPerView}% - ${(24 * (itemsPerView - 1)) / itemsPerView}px)`,
                }}
                className={cn(
                  "shrink-0 rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 transition-all duration-500 flex flex-col justify-between relative z-10 group",
                  isVisible ? "opacity-100 scale-100 shadow-md shadow-slate-200/50" : "opacity-40 scale-[0.98] shadow-xs"
                )}
              >
                <div>
                  {/* Rating Stars & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-[#1D72FE] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 font-semibold">
                      {review.badge}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                {/* Reviewer Bio */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100 group-hover:ring-[#1D72FE]/40 transition-all flex-shrink-0"
                  />
                  <div className="flex flex-col overflow-hidden">
                    <span className="font-heading font-bold text-slate-900 text-sm truncate">
                      {review.name}
                    </span>
                    <span className="text-xs text-[#1D72FE] font-medium truncate">
                      {review.role}
                    </span>
                    <span className="text-[11px] text-slate-500 truncate">
                      {review.school}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === currentIndex ? "w-8 bg-[#1D72FE]" : "w-2 bg-slate-300 hover:bg-slate-400"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
