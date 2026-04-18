import { Star, Code, Palette, Rocket, Sparkles } from "lucide-react";

const skills = [
  {
    icon: Code,
    label: "Development",
    description: "Frontend and backend builds with modern JavaScript tools",
    accent: "bg-primary",
    tilt: "-rotate-1",
  },
  {
    icon: Palette,
    label: "UI/UX Design",
    description: "Clean interfaces, user-focused flows, and practical design thinking",
    accent: "bg-card",
    tilt: "rotate-1",
  },
  {
    icon: Rocket,
    label: "Problem Solving",
    description: "Turning ideas into products that feel fast, useful, and polished",
    accent: "bg-muted",
    tilt: "-rotate-1",
  },
];

const highlights = ["Full Stack Developer", "Freelance Friendly", "UI/UX Mindset"];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-32 bg-secondary border-y-4 border-foreground"
    >
      <div className="absolute left-[-1rem] top-16 hidden h-24 w-24 rotate-[-10deg] border-4 border-foreground bg-primary shadow-neo md:block" />
      <div className="absolute right-[8%] top-24 hidden h-16 w-16 rotate-[12deg] border-4 border-foreground bg-card shadow-neo-sm lg:block" />
      <div className="absolute bottom-16 left-[12%] hidden h-20 w-20 rotate-[8deg] border-4 border-foreground bg-muted shadow-neo-sm lg:block" />

      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <Star className="h-10 w-10 stroke-[3px] fill-foreground" />
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          <div className="relative">
            <div className="absolute -top-5 right-4 z-20 inline-flex items-center gap-2 border-4 border-foreground bg-card px-4 py-2 shadow-neo-sm rotate-[-4deg]">
              <Sparkles className="h-4 w-4 stroke-[3px]" />
              <span className="font-black text-xs sm:text-sm uppercase tracking-widest">
                Human-first builder
              </span>
            </div>

            <div className="relative border-4 border-foreground bg-card p-6 sm:p-8 shadow-neo-lg">
              <div className="mb-6 flex flex-wrap gap-3">
                {highlights.map((item, index) => (
                  <span
                    key={item}
                    className={`border-4 border-foreground px-3 py-1 font-black text-xs sm:text-sm uppercase tracking-widest shadow-neo-sm ${
                      index === 0 ? "bg-primary" : index === 1 ? "bg-background" : "bg-muted"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="space-y-6">
                <p className="text-xl md:text-2xl font-black leading-snug">
                  I'm Debarya Banerjee, a full stack developer who believes the web should feel{" "}
                  <span className="inline-block bg-primary border-4 border-foreground px-2 rotate-1 shadow-neo-sm">
                    useful
                  </span>
                  ,{" "}
                  <span className="inline-block bg-muted border-4 border-foreground px-2 -rotate-1 shadow-neo-sm">
                    bold
                  </span>
                  , and genuinely human.
                </p>

                <p className="text-base md:text-lg font-bold leading-relaxed max-w-2xl">
                  I work across the full stack, from building responsive interfaces to shaping backend
                  functionality, and I enjoy creating products that balance performance, clarity, and
                  personality.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="border-4 border-foreground bg-secondary p-4 shadow-neo-sm rotate-[-1deg]">
                    <p className="font-black text-xs uppercase tracking-[0.2em] mb-2">What I focus on</p>
                    <p className="font-bold text-sm sm:text-base">
                      Interfaces that feel sharp, products that work smoothly, and builds that stay practical.
                    </p>
                  </div>
                  <div className="border-4 border-foreground bg-background p-4 shadow-neo-sm rotate-[1deg]">
                    <p className="font-black text-xs uppercase tracking-[0.2em] mb-2">How I work</p>
                    <p className="font-bold text-sm sm:text-base">
                      I like clarity, fast iteration, strong UI thinking, and code that keeps growing teams unblocked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5" data-cursor-trail="off">
            {skills.map(({ icon: Icon, label, description, accent, tilt }) => (
              <div
                key={label}
                className={`group relative flex items-center gap-4 border-4 border-foreground p-4 sm:p-5 shadow-neo transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-neo-lg ${accent} ${tilt}`}
              >
                <div className="absolute right-4 top-3 font-black text-[10px] uppercase tracking-[0.25em] opacity-40">
                  Skill
                </div>
                <div className="border-4 border-foreground bg-primary p-3 shadow-neo-sm">
                  <Icon className="h-6 w-6 stroke-[3px]" />
                </div>
                <div className="pr-10">
                  <h3 className="font-black text-lg uppercase tracking-tight">{label}</h3>
                  <p className="font-bold text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
