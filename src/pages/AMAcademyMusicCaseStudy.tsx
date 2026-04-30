import { useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Handshake,
  Lightbulb,
  Music2,
  PenTool,
  Quote,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const siteUrl = "https://amacademymusic.com";

const overviewCards = [
  {
    label: "Project Type",
    value: "Music academy website",
  },
  {
    label: "Scope",
    value: "Planning, UI/UX, frontend, backend, ongoing delivery",
  },
  {
    label: "Primary Goal",
    value: "Create a clear, trustworthy online presence",
  },
];

const directionCards = [
  {
    title: "The Ask",
    body: "The client wanted one proper online place for class schedules, student-facing updates, guardian reviews, photos, notices, and academy information.",
  },
  {
    title: "The Direction",
    body: "I broke that into a website plan that starts with trust and discovery first, then grows into useful academy tools over time.",
  },
];

const milestoneGoals = [
  "Purpose of the website",
  "How users achieve it",
  "What the academy can update",
];

const MilestoneWaveImage = () => {
  return (
    <div className="milestone-image-frame relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden">
      <img
        src="/milestone.png"
        alt="Milestone goals visual"
        className="block h-full w-full object-contain"
        loading="lazy"
      />
      <div className="milestone-image-sheen absolute inset-0" aria-hidden="true" />
    </div>
  );
};

const phaseSteps = [
  {
    phase: "Phase 1",
    icon: Lightbulb,
    title: "Goals, Research & Parameters",
    body: "Set the scope, understood the academy's needs, studied similar websites, and decided what the first version had to communicate clearly.",
    status: "Completed",
  },
  {
    phase: "Phase 2",
    icon: PenTool,
    title: "Design, Writing & Stack Choice",
    body: "Shaped the page structure, planned the content voice, chose the visual styling, and selected the coding stack for a maintainable build.",
    status: "Current phase",
  },
  {
    phase: "Phase 3",
    icon: Handshake,
    title: "Review, Delivery & Learnings",
    body: "Move through client review rounds, confirm the timeline, build the full website, and keep scope, budget, and final delivery aligned.",
    status: "Next",
  },
];

const approachCards = [
  {
    name: "Figma",
    bg: "bg-primary",
  },
  {
    name: "React",
    bg: "bg-secondary",
  },
  {
    name: "Guided practice",
    bg: "bg-card",
  },
  {
    name: "Trust & discovery",
    bg: "bg-primary",
  },
  {
    name: "Tailwind",
    bg: "bg-muted",
  },
  {
    name: "Vercel",
    bg: "bg-card",
  },
];

const easeOutBack = (value: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(value - 1, 3) + c1 * Math.pow(value - 1, 2);
};

const PhysicsOrbitStage = () => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const hourglassRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;
    const start = performance.now();

    const placeCards = (timestamp: number) => {
      const elapsed = (timestamp - start) / 1000;
      const mobile = window.innerWidth < 768;
      const radiusX = mobile ? 145 : 370;
      const radiusY = mobile ? 42 : 76;
      const depthRange = mobile ? 165 : 360;
      const spinSpeed = 0.5;

      approachCards.forEach((_, index) => {
        const element = cardRefs.current[index];
        if (!element) {
          return;
        }

        const entryDelay = index * 0.14;
        const rawEntry = reducedMotion ? 1 : Math.min(Math.max((elapsed - entryDelay) / 1.15, 0), 1);
        const entry = easeOutBack(rawEntry);
        const angle = (reducedMotion ? 0.9 : elapsed * spinSpeed) + index * ((Math.PI * 2) / approachCards.length);
        const orbitX = Math.sin(angle);
        const orbitZ = Math.cos(angle);
        const x = orbitX * radiusX * entry;
        const y = Math.sin(angle * 2) * radiusY * entry;
        const depth = (orbitZ + 1) / 2;
        const scale = (0.68 + depth * 0.36) * (0.86 + rawEntry * 0.14);
        const tilt = orbitX * 7;
        const cardTurn = orbitX * -14;
        const shadow = Math.round(4 + depth * 12);
        const blur = (1 - depth) * 0.8;

        element.style.opacity = `${rawEntry}`;
        element.style.zIndex = orbitZ > -0.15 ? `${35 + Math.round(depth * 20)}` : `${8 + Math.round(depth * 8)}`;
        element.style.filter = `brightness(${0.88 + depth * 0.14}) blur(${blur}px)`;
        element.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale}) rotate(${tilt}deg) rotateY(${cardTurn}deg)`;
        element.style.boxShadow = `${shadow}px ${shadow}px 0 #000`;
      });

      if (hourglassRef.current) {
        const lift = reducedMotion ? 0 : Math.sin(elapsed * 1.35) * 8;
        const rotate = reducedMotion ? 0 : Math.sin(elapsed * 0.9) * 0.8;
        hourglassRef.current.style.transform = `translate3d(0, ${lift}px, 0) rotate(${rotate}deg)`;
      }

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(placeCards);
      }
    };

    animationFrame = window.requestAnimationFrame(placeCards);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative mx-auto min-h-[620px] max-w-6xl overflow-hidden [perspective:1200px] md:min-h-[720px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/25 blur-3xl" />

      {approachCards.map((card, index) => (
        <div
          key={card.name}
          ref={(element) => {
            cardRefs.current[index] = element;
          }}
          className={`absolute left-1/2 top-1/2 flex h-[64px] w-[160px] items-center justify-center border-4 border-foreground ${card.bg} px-3 text-center opacity-0 [backface-visibility:hidden] [transform-style:preserve-3d] will-change-transform md:h-[74px] md:w-[190px]`}
        >
          <p className="text-xs font-black uppercase leading-tight md:text-sm">{card.name}</p>
        </div>
      ))}

      <div className="absolute left-1/2 top-1/2 z-30 flex h-[430px] w-[520px] -translate-x-1/2 -translate-y-1/2 items-center justify-center md:h-[620px] md:w-[760px]">
        <div ref={hourglassRef} className="h-full w-full will-change-transform">
          <img
            src="/hourglass_idea.png"
            alt="Hourglass idea centerpiece"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const ProgressMilestones = () => {
  // Refs for GSAP animations
  const mobileTimelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);

  // GSAP scroll-triggered animations
  useGSAP(() => {
    if (!mobileTimelineRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    // Animate vertical line draw
    gsap.from(lineRef.current, {
      height: 0,
      duration: 1,
      scrollTrigger: {
        trigger: mobileTimelineRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate each step
    stepRefs.current.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, { dependencies: [] });

  return (
    <div className="mt-12" data-cursor-trail="off">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-4 inline-flex rotate-[-2deg] border-4 border-foreground bg-secondary px-4 py-2 shadow-neo-sm">
            <span className="text-xs font-black uppercase tracking-[0.24em]">Line of Progress</span>
          </div>
          <h3 className="text-4xl font-black uppercase leading-none sm:text-5xl">The line of work</h3>
        </div>
        <p className="max-w-md text-sm font-black uppercase leading-relaxed tracking-wide">
          Three milestone checkpoints, with the pointer showing the current project position.
        </p>
      </div>

      <div className="relative mb-10 hidden min-h-[170px] md:block">
        <div className="relative mx-auto mt-10 h-24 max-w-5xl">
          <div className="nb-progress large default absolute left-[7%] right-[7%] top-1/2 m-0 -translate-y-1/2">
            <div className="nb-progress-bar bg-secondary" style={{ width: "50%" }} />
          </div>
        </div>
        {phaseSteps.map((phase, index) => {
          const Icon = phase.icon;
          const isCurrent = index === 1;
          const position = index === 0 ? "left-[8%]" : index === 1 ? "left-1/2" : "left-[92%]";
          return (
            <div key={phase.phase} className={`absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center ${position}`}>
              <div className={`relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-foreground shadow-neo ${isCurrent ? "bg-secondary scale-125" : index === 0 ? "bg-primary" : "bg-muted"}`}>
                {isCurrent ? (
                  <img src="/Pointer.png" alt="Current progress pointer" className="progress-pointer-bounce h-12 w-12 object-contain" />
                ) : (
                  <Icon className="h-7 w-7 stroke-[3px]" />
                )}
              </div>
              <div className={`mt-7 border-4 border-foreground bg-background px-4 py-2 shadow-neo-sm ${isCurrent ? "bg-secondary" : ""}`}>
                <p className="whitespace-nowrap text-xs font-black uppercase tracking-[0.22em]">
                  {isCurrent ? "Current phase" : phase.phase}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile timeline with GSAP animations */}
      <div ref={mobileTimelineRef} className="relative mb-10 py-6 md:hidden">
        <div className="absolute left-[48px] top-12 bottom-12 w-4 -translate-x-1/2 border-4 border-foreground bg-muted shadow-neo-sm">
          <div ref={lineRef} className="w-full bg-secondary border-b-4 border-foreground h-1/2" />
        </div>

        <div className="relative z-10 flex flex-col gap-12 px-4">
          {phaseSteps.map((phase, index) => {
            const Icon = phase.icon;
            const isCurrent = index === 1;
            return (
              <div key={phase.phase} ref={el => (stepRefs.current[index] = el)} className="flex items-center gap-6">
                <div className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-foreground shadow-neo z-10 ${isCurrent ? "bg-secondary scale-110" : index === 0 ? "bg-primary" : "bg-muted"}`}>
                  {isCurrent ? (
                    <img src="/Pointer.png" alt="Current progress pointer" className="progress-pointer-bounce h-10 w-10 object-contain" />
                  ) : (
                    <Icon className="h-6 w-6 stroke-[3px]" />
                  )}
                </div>
                <div className={`nb-card default relative flex-1 px-4 py-3 after:absolute after:left-[-13px] after:top-5 after:h-0 after:w-0 after:border-y-[8px] after:border-y-transparent after:border-r-[12px] ${isCurrent ? "bg-secondary after:border-r-secondary" : "bg-background after:border-r-background"}`}>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em]">
                    {isCurrent ? "Current phase" : phase.phase}
                  </p>
                  <p className="mt-1 text-sm font-black uppercase leading-tight">{phase.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {phaseSteps.map((phase, index) => {
          const Icon = phase.icon;
          const isCurrent = index === 1;
          return (
            <article key={phase.phase} className={`nb-card default !max-w-none p-5 ${isCurrent ? "bg-primary" : "bg-card"}`}>
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className={`flex h-12 w-12 items-center justify-center border-4 border-foreground shadow-neo-sm ${isCurrent ? "bg-card" : "bg-secondary"}`}>
                  <Icon className="h-6 w-6 stroke-[3px]" />
                </div>
                <span className="border-2 border-foreground bg-background px-3 py-1 text-xs font-black uppercase tracking-widest">{phase.status}</span>
              </div>
              <p className="mb-2 text-sm font-black uppercase tracking-[0.2em]">{phase.phase}</p>
              <h4 className="mb-3 text-2xl font-black uppercase leading-none">{phase.title}</h4>
              <p className="font-bold leading-relaxed">{phase.body}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

const AMAcademyMusicCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        <section className="relative overflow-hidden border-b-4 border-foreground bg-grid py-16 md:py-24">
          <div className="absolute left-[5%] top-28 hidden h-20 w-20 rotate-12 border-4 border-foreground bg-secondary shadow-neo-sm lg:block" />
          <div className="absolute right-[8%] bottom-10 hidden h-24 w-24 -rotate-6 border-4 border-foreground bg-muted shadow-neo md:block" />

          <div className="container relative z-10 mx-auto max-w-7xl px-4">
            <Button asChild variant="outline" size="sm" className="mb-8">
              <Link to="/#projects">
                <ArrowLeft className="h-4 w-4 stroke-[3px]" />
                Back to Projects
              </Link>
            </Button>

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <div className="mb-5 inline-flex rotate-[-2deg] items-center gap-3 border-4 border-foreground bg-card px-4 py-2 shadow-neo-sm">
                  <Music2 className="h-5 w-5 stroke-[3px]" />
                  <span className="text-xs font-black uppercase tracking-[0.24em] sm:text-sm">
                    Case Study
                  </span>
                </div>

                <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-7xl md:text-8xl">
                  AM Academy Music
                </h1>
              </div>

              <div
                className="rotate-[1deg] border-4 border-foreground bg-primary p-5 shadow-neo"
                data-cursor-trail="off"
              >
                <p className="text-base font-black uppercase leading-relaxed sm:text-lg">
                  A full website build for a music academy that needed a sharper digital identity,
                  clearer information flow, and a homepage that helps visitors move from curiosity to
                  contact.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {overviewCards.map((card, index) => (
                <div
                  key={card.label}
                  className={`border-4 border-foreground bg-card p-5 shadow-neo-sm ${
                    index === 1 ? "md:translate-y-4" : ""
                  }`}
                  data-cursor-trail="off"
                >
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.24em]">{card.label}</p>
                  <p className="text-lg font-black leading-tight">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b-4 border-foreground py-16 md:py-20">
          <div className="container mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div
                className="sticky top-24 border-4 border-foreground bg-secondary p-6 shadow-neo"
                data-cursor-trail="off"
              >
                <p className="mb-3 text-xs font-black uppercase tracking-[0.24em]">About AM Academy</p>
                <h2 className="text-3xl font-black uppercase leading-none sm:text-4xl">
                  Music learning, made easier to discover.
                </h2>
              </div>
            </div>

            <div
              className="border-4 border-foreground bg-card p-6 shadow-neo-sm md:p-8"
              data-cursor-trail="off"
            >
              <p className="text-lg font-bold leading-relaxed md:text-xl">
                AM Academy Music is a music academy built for students who want structured,
                approachable learning. The academy focuses on helping learners build confidence,
                understand fundamentals, and grow through guided practice. Its audience includes
                beginners, young learners, parents, and music enthusiasts looking for a reliable place
                to start or continue their musical journey. The website needed to reflect that same
                balance: warm, professional, easy to navigate, and clear from the first screen. My goal
                was to turn the academy's offering into a focused digital experience that builds trust
                quickly.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24" data-cursor-trail="off">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-4 inline-flex items-center gap-3 border-4 border-foreground bg-card px-4 py-2 shadow-neo-sm">
                  <ExternalLink className="h-5 w-5 stroke-[3px]" />
                  <span className="text-xs font-black uppercase tracking-[0.24em] sm:text-sm">
                    Live Preview + Screenshots
                  </span>
                </div>
                <h2 className="text-4xl font-black uppercase leading-none sm:text-6xl">
                  Homepage Preview
                </h2>
              </div>

              <Button asChild variant="secondary">
                <a href={siteUrl} target="_blank" rel="noreferrer">
                  Open Live Site <ArrowUpRight className="h-4 w-4 stroke-[3px]" />
                </a>
              </Button>
            </div>

            <div className="grid gap-8">
              <div className="hidden border-4 border-foreground bg-card p-3 shadow-neo md:block">
                <div className="mb-3 flex items-center justify-between gap-3 border-4 border-foreground bg-background px-4 py-2">
                  <span className="text-xs font-black uppercase tracking-[0.24em]">Desktop / Tablet</span>
                  <span className="text-right text-xs font-black uppercase tracking-[0.18em]">
                    amacademymusic.com
                  </span>
                </div>
                <div className="aspect-[16/10] overflow-hidden border-4 border-foreground bg-background">
                  <iframe
                    src={siteUrl}
                    title="AM Academy Music homepage desktop preview"
                    className="h-full w-full"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="border-4 border-foreground bg-card p-3 shadow-neo md:hidden">
                <div className="mb-3 flex items-center justify-between gap-3 border-4 border-foreground bg-background px-4 py-2">
                  <span className="text-xs font-black uppercase tracking-[0.24em]">Mobile</span>
                  <span className="text-right text-xs font-black uppercase tracking-[0.18em]">Home</span>
                </div>
                <div className="mx-auto aspect-[9/16] max-h-[680px] overflow-hidden border-4 border-foreground bg-background">
                  <iframe
                    src={siteUrl}
                    title="AM Academy Music homepage mobile preview"
                    className="h-full w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t-4 border-foreground bg-grid py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex rotate-[-2deg] items-center gap-3 border-4 border-foreground bg-secondary px-4 py-2 shadow-neo-sm">
                <Sparkles className="h-5 w-5 stroke-[3px]" />
                <span className="text-xs font-black uppercase tracking-[0.24em] sm:text-sm">
                  Full Breakdown
                </span>
              </div>
              <h2 className="text-4xl font-black uppercase leading-none sm:text-6xl">
                From client need to working direction
              </h2>
            </div>

            <div className="relative mb-14" data-cursor-trail="off">
              <div className="grid gap-6 lg:grid-cols-2">
                {directionCards.map((card, index) => (
                  <article
                    key={card.title}
                    className={`border-4 border-foreground bg-card p-5 shadow-neo-sm ${
                      index === 0 ? "lg:rotate-[-1deg]" : "lg:rotate-[1deg]"
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center border-4 border-foreground bg-secondary shadow-neo-sm">
                        {index === 0 ? (
                          <Quote className="h-5 w-5 stroke-[3px]" />
                        ) : (
                          <Target className="h-5 w-5 stroke-[3px]" />
                        )}
                      </div>
                      <h4 className="text-2xl font-black uppercase leading-none">{card.title}</h4>
                    </div>
                    <p className="text-base font-bold leading-relaxed md:text-lg">{card.body}</p>
                  </article>
                ))}
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div className="relative border-4 border-foreground bg-primary p-6 shadow-neo">
                  <div className="absolute -left-5 -top-5 flex h-16 w-16 items-center justify-center border-4 border-foreground bg-secondary shadow-neo-sm">
                    <Sparkles className="h-8 w-8 stroke-[3px]" />
                  </div>
                  <p className="mb-4 pl-10 text-xs font-black uppercase tracking-[0.24em]">
                    Milestone
                  </p>
                  <h4 className="mb-5 text-3xl font-black uppercase leading-none">
                    Purpose, path, and proof.
                  </h4>
                  <div className="space-y-3">
                    {milestoneGoals.map((goal) => (
                      <div
                        key={goal}
                        className="border-4 border-foreground bg-card px-4 py-3 font-black uppercase shadow-neo-sm"
                      >
                        {goal}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <MilestoneWaveImage />
                </div>
              </div>

              <div className="relative z-10 mt-16 py-10" data-cursor-trail="off">
                <div className="mb-10 text-center">
                  <div className="inline-flex rotate-[-2deg] items-center gap-3 border-4 border-foreground bg-primary px-4 py-2 shadow-neo-sm">
                    <Sparkles className="h-5 w-5 stroke-[3px]" />
                    <span className="text-xs font-black uppercase tracking-[0.24em] sm:text-sm">
                      Our Approach & Stack
                    </span>
                  </div>
                </div>

                <PhysicsOrbitStage />
                <ProgressMilestones />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AMAcademyMusicCaseStudy;
