import { ArrowRight, Star, FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Music Academy Website",
    description:
      "A polished web presence for a music academy focused on clear information, trust, and a welcoming first impression.",
    tags: ["Frontend", "Responsive UI", "Web Design"],
    color: "bg-primary",
    rotation: "rotate-1",
    label: "Live Build",
    tone: "Warm, inviting, clear",
    href: "/case-studies/am-academy-music",
  },
  {
    title: "Esports Tournament Platform",
    description:
      "A tournament hosting website built for competitive gaming workflows, event visibility, and smoother participant experience.",
    tags: ["Full Stack", "Community", "Platform"],
    color: "bg-muted",
    rotation: "-rotate-1",
    label: "Competitive Flow",
    tone: "Fast, structured, energetic",
    href: null,
  },
  {
    title: "Rook Lite Extension",
    description:
      "An in-progress Google extension exploring lightweight utility, better browsing flow, and practical day-to-day usefulness.",
    tags: ["Chrome Extension", "JavaScript", "In Progress"],
    color: "bg-secondary",
    rotation: "rotate-2",
    label: "Currently Building",
    tone: "Lean, useful, evolving",
    href: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-20 md:py-32 bg-grid">
      <div className="absolute left-[3%] top-24 hidden h-20 w-20 rotate-12 border-4 border-foreground bg-primary shadow-neo-sm lg:block" />
      <div className="absolute right-[8%] bottom-16 hidden h-24 w-24 -rotate-6 border-4 border-foreground bg-muted shadow-neo md:block" />

      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-3 border-4 border-foreground bg-card px-4 py-2 shadow-neo-sm rotate-[-2deg]">
              <FolderKanban className="h-5 w-5 stroke-[3px]" />
              <span className="font-black text-xs sm:text-sm uppercase tracking-[0.24em]">
                Selected Work
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Star className="h-10 w-10 stroke-[3px] fill-foreground" />
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter">
                Projects
              </h2>
            </div>
          </div>

          <div className="max-w-xl border-4 border-foreground bg-card px-5 py-4 shadow-neo-sm rotate-[1deg]">
            <p className="font-bold text-sm sm:text-base leading-relaxed uppercase tracking-wide">
              A mix of product thinking, frontend polish, and full stack execution across web builds
              that aim to feel clear, useful, and memorable.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <article
              key={project.title}
              data-cursor-trail="off"
              className={`group relative flex h-full flex-col border-4 border-foreground bg-card shadow-neo transition-all duration-200 hover:-translate-y-2 hover:translate-x-1 hover:shadow-neo-lg ${project.rotation}`}
            >
              <div className={`${project.color} relative overflow-hidden border-b-4 border-foreground p-6`}>
                <div className="absolute -right-5 -top-5 opacity-15">
                  <Star className="h-24 w-24 stroke-[2px]" />
                </div>
                <div className="relative z-10 mb-6 inline-block border-4 border-foreground bg-card px-3 py-1 shadow-neo-sm rotate-[-3deg]">
                  <span className="font-black text-[10px] sm:text-xs uppercase tracking-[0.22em]">
                    0{index + 1} • {project.label}
                  </span>
                </div>
                <h3 className="relative z-10 max-w-[11ch] font-black text-2xl uppercase leading-tight tracking-tight sm:text-3xl">
                  {project.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-5 flex items-center justify-between gap-3 border-4 border-foreground bg-background px-4 py-3 shadow-neo-sm">
                  <span className="font-black text-[10px] uppercase tracking-[0.24em]">Project Tone</span>
                  <span className="text-right font-bold text-xs sm:text-sm">{project.tone}</span>
                </div>

                <p className="font-bold text-base leading-relaxed">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`border-2 border-foreground px-3 py-1 font-black text-xs uppercase tracking-widest ${
                        tagIndex === 0 ? "bg-secondary" : "bg-card"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  {project.href ? (
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full group-hover:border-foreground group-hover:bg-primary group-hover:shadow-neo-sm"
                    >
                      <Link to={project.href}>
                        View Case Study <ArrowRight className="h-4 w-4 stroke-[3px]" />
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      className="w-full group-hover:border-foreground group-hover:bg-primary group-hover:shadow-neo-sm"
                    >
                      Case Study Soon <ArrowRight className="h-4 w-4 stroke-[3px]" />
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
