import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Rebrand",
    description: "Complete visual identity and storefront redesign for a streetwear brand.",
    tags: ["React", "Design", "Branding"],
    color: "bg-primary",
    rotation: "rotate-1",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics platform with real-time data visualization and team management.",
    tags: ["TypeScript", "D3.js", "UI/UX"],
    color: "bg-muted",
    rotation: "-rotate-1",
  },
  {
    title: "Portfolio Generator",
    description: "A tool that creates stunning portfolios from a simple JSON config file.",
    tags: ["Node.js", "CLI", "Open Source"],
    color: "bg-secondary",
    rotation: "rotate-2",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 md:py-32 bg-grid">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <Star className="h-10 w-10 stroke-[3px] fill-foreground" />
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card border-4 border-foreground shadow-neo transition-all duration-200 hover:-translate-y-2 hover:shadow-neo-lg group"
            >
              <div className={`${project.color} border-b-4 border-foreground p-6 relative overflow-hidden`}>
                <div className="absolute -top-4 -right-4 opacity-10">
                  <Star className="h-24 w-24 stroke-[2px]" />
                </div>
                <h3 className="font-black text-2xl uppercase tracking-tight relative z-10">
                  {project.title}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <p className="font-bold text-base leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-foreground px-3 py-1 font-black text-xs uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="group-hover:border-foreground group-hover:bg-primary group-hover:shadow-neo-sm mt-2 w-full">
                  View Project <ArrowRight className="h-4 w-4 stroke-[3px]" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
