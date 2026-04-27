import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarCheck,
  ExternalLink,
  Handshake,
  Lightbulb,
  MapPin,
  Megaphone,
  Music2,
  PenTool,
  Quote,
  Sparkles,
  Target,
  X,
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
    title: "Review, Development & Delivery",
    body: "Move through client review rounds, confirm the timeline, build the full website, and keep the final scope aligned with the budget.",
    status: "In progress",
  },
  {
    phase: "Phase 4",
    icon: CalendarCheck,
    title: "Outcome & Learnings",
    body: "The project is still in process, with the strongest results so far being better timeline management, accuracy, client satisfaction, and a clearer project overview.",
    status: "Next",
  },
];

const approachCards = [
  { name: "Built for students", bg: "bg-primary" },
  { name: "Clear info flow", bg: "bg-secondary" },
  { name: "Warm & professional", bg: "bg-muted" },
  { name: "Guided practice", bg: "bg-card" },
  { name: "Trust & discovery", bg: "bg-primary" },
  { name: "Approachable learning", bg: "bg-secondary" },
];

const techCards = [
  { name: "Figma", bg: "bg-primary", x: -280, y: -220, originY: -200, rot: -8 },
  { name: "React", bg: "bg-secondary", x: 280, y: -220, originY: -200, rot: 12 },
  { name: "Tailwind", bg: "bg-muted", x: -280, y: 220, originY: 200, rot: -10 },
  { name: "Vercel", bg: "bg-card", x: 280, y: 220, originY: 200, rot: 8 },
];

const AMAcademyMusicCaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    const cards = gsap.utils.toArray(".approach-card") as HTMLElement[];
    const hourglass = ".hourglass-image";

    // Initial State Setup
    gsap.set(cards, {
      scale: 0,
      opacity: 0,
      rotateY: 90,
      rotateX: 45,
      z: -50,
      x: 0,
      y: (i, el) => parseFloat(el.dataset.originy || "0")
    });

    // 1. Initial Pause
    tl.to({}, { duration: 1 });

    // 2. Hourglass Shake
    tl.to(hourglass, {
      rotate: 8,
      yoyo: true,
      repeat: 5,
      duration: 0.08,
      ease: "power1.inOut"
    });
    tl.to(hourglass, { rotate: 0, duration: 0.08 });

    // 3. Cards Pop Out
    tl.to(cards, {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      rotateX: 0,
      x: (i, el) => parseFloat(el.dataset.x || "0"),
      y: (i, el) => parseFloat(el.dataset.y || "0"),
      rotationZ: (i, el) => parseFloat(el.dataset.rot || "0"),
      duration: 1.2,
      ease: "elastic.out(1, 0.6)",
      stagger: 0.05
    });

    // 4. Read Hold
    tl.to({}, { duration: 4 });

    // 5. Retract
    tl.to(cards, {
      scale: 0,
      opacity: 0,
      rotateY: 90,
      rotateX: 45,
      x: 0,
      y: (i, el) => parseFloat(el.dataset.originy || "0"),
      rotationZ: 0,
      duration: 0.8,
      ease: "back.in(1.2)",
      stagger: 0.05
    });

    // 6. Final Pause
    tl.to({}, { duration: 1.5 });

  }, { scope: containerRef });

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
                <style>
                  {`
                    @keyframes spin-carousel {
                      0% { transform: rotateX(-8deg) rotateZ(-4deg) rotateY(0deg); }
                      100% { transform: rotateX(-8deg) rotateZ(-4deg) rotateY(-360deg); }
                    }
                    .preserve-3d {
                      transform-style: preserve-3d;
                    }
                    .carousel-spin {
                      animation: spin-carousel 24s linear infinite;
                    }
                    .carousel-container:hover .carousel-spin {
                      animation-play-state: paused;
                    }
                  `}
                </style>

                <div className="mb-24 text-center">
                  <div className="inline-flex rotate-[-2deg] items-center gap-3 border-4 border-foreground bg-primary px-4 py-2 shadow-neo-sm">
                    <Sparkles className="h-5 w-5 stroke-[3px]" />
                    <span className="text-xs font-black uppercase tracking-[0.24em] sm:text-sm">
                      Our Approach & Stack
                    </span>
                  </div>
                </div>

                <div className="carousel-container relative mx-auto flex h-[600px] w-full items-center justify-center scale-[0.6] sm:scale-100 [perspective:1200px]">
                  <div ref={containerRef} className="relative h-full w-full preserve-3d flex items-center justify-center">
                    
                    {/* Rotating 3D Path (CSS Carousel) */}
                    <div className="absolute left-1/2 top-1/2 h-0 w-0 preserve-3d carousel-spin">
                      {approachCards.map((card, i) => {
                        const rot = i * 60;
                        return (
                          <div
                            key={card.name}
                            className={`absolute left-0 top-0 flex h-[50px] w-[180px] items-center justify-center border-2 border-foreground ${card.bg} shadow-neo`}
                            style={{
                              transform: `translate(-50%, -50%) rotateY(${rot}deg) translateZ(360px)`,
                            }}
                          >
                             <p className="text-sm font-black uppercase leading-none">{card.name}</p>
                          </div>
                        );
                      })}
                    </div>

                    {/* GSAP Popping Cards (Behind Hourglass due to GSAP z: -50) */}
                    <div className="absolute left-1/2 top-1/2 h-0 w-0 preserve-3d">
                      {techCards.map((card) => (
                        <div
                          key={card.name}
                          className={`approach-card absolute left-0 top-0 flex h-[80px] w-[180px] items-center justify-center border-2 border-foreground ${card.bg} p-2 text-center shadow-neo`}
                          data-x={card.x}
                          data-y={card.y}
                          data-rot={card.rot}
                          data-originy={card.originY}
                          style={{ marginLeft: "-90px", marginTop: "-40px" }}
                        >
                          <p className="text-sm font-black uppercase leading-tight">{card.name}</p>
                        </div>
                      ))}
                    </div>

                    {/* Hourglass Image Wrapper (Middle of 3D space) */}
                    <div 
                      className="absolute left-1/2 top-1/2 h-[600px] w-[800px]"
                      style={{ transform: "translate(-50%, -50%) translateZ(0px)" }}
                    >
                      <div className="hourglass-image h-full w-full">
                        <img 
                          src="/hourglass_idea.png" 
                          alt="Hourglass Centerpiece" 
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative overflow-hidden border-4 border-foreground bg-background p-5 shadow-neo md:p-8"
              data-cursor-trail="off"
            >
              <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="mb-4 inline-flex border-4 border-foreground bg-secondary px-4 py-2 shadow-neo-sm">
                    <span className="text-xs font-black uppercase tracking-[0.24em]">Timeline</span>
                  </div>
                  <h3 className="text-4xl font-black uppercase leading-none sm:text-6xl">
                    The line of work
                  </h3>
                </div>

                <div className="relative min-h-28 flex-1 md:max-w-lg">
                  <div className="absolute left-0 right-0 top-10 h-2 border-2 border-foreground bg-card" />
                  <div className="absolute left-2 top-4 h-14 w-14 rounded-full border-4 border-foreground bg-primary shadow-neo-sm" />
                  <div className="absolute left-1/2 top-0 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-4 border-foreground bg-secondary shadow-neo">
                    <MapPin className="h-9 w-9 stroke-[3px]" />
                  </div>
                  <div className="absolute right-2 top-4 h-14 w-14 rounded-full border-4 border-foreground bg-muted shadow-neo-sm" />
                  <p className="absolute left-1/2 top-24 -translate-x-1/2 whitespace-nowrap text-xs font-black uppercase tracking-[0.24em]">
                    Current phase
                  </p>
                </div>
              </div>

              <div className="relative space-y-8">
                <div className="absolute bottom-10 left-8 top-8 hidden w-2 border-2 border-foreground bg-card md:block" />
                {phaseSteps.map((phase, index) => {
                  const Icon = phase.icon;
                  const isCurrent = phase.status === "Current phase";

                  return (
                    <article
                      key={phase.phase}
                      className={`relative grid gap-5 border-4 border-foreground p-5 shadow-neo-sm md:grid-cols-[110px_1fr] md:p-6 ${
                        isCurrent ? "bg-primary" : "bg-card"
                      } ${index === 1 ? "md:ml-24" : index === 2 ? "md:mr-20" : ""}`}
                    >
                      <div className="flex items-center justify-between gap-4 md:block">
                        <div
                          className={`mb-3 flex h-14 w-14 items-center justify-center border-4 border-foreground shadow-neo-sm ${
                            isCurrent ? "bg-card" : "bg-secondary"
                          }`}
                        >
                          <Icon className="h-7 w-7 stroke-[3px]" />
                        </div>
                        <p className="text-2xl font-black uppercase leading-none">{phase.phase}</p>
                      </div>

                      <div>
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <h4 className="text-2xl font-black uppercase leading-none md:text-3xl">
                            {phase.title}
                          </h4>
                          <span className="border-2 border-foreground bg-background px-3 py-1 text-xs font-black uppercase tracking-widest">
                            {phase.status}
                          </span>
                        </div>
                        <p className="text-base font-bold leading-relaxed md:text-lg">{phase.body}</p>
                      </div>

                      {index === 2 && (
                        <div className="absolute -right-5 -top-5 hidden h-12 w-12 items-center justify-center border-4 border-foreground bg-muted shadow-neo-sm md:flex">
                          <X className="h-7 w-7 stroke-[3px]" />
                        </div>
                      )}
                      {index === 3 && (
                        <div className="absolute -left-5 -top-5 hidden h-12 w-12 items-center justify-center border-4 border-foreground bg-secondary shadow-neo-sm md:flex">
                          <Megaphone className="h-7 w-7 stroke-[3px]" />
                        </div>
                      )}
                    </article>
                  );
                })}
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
