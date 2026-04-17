import { Star, Code, Palette, Rocket } from "lucide-react";

const skills = [
  { icon: Code, label: "Development", description: "Frontend and backend builds with modern JavaScript tools" },
  { icon: Palette, label: "UI/UX Design", description: "Clean interfaces, user-focused flows, and practical design thinking" },
  { icon: Rocket, label: "Problem Solving", description: "Turning ideas into products that feel fast, useful, and polished" },
];

const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-secondary border-y-4 border-foreground">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <Star className="h-10 w-10 stroke-[3px] fill-foreground" />
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg md:text-xl font-bold leading-relaxed">
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
            <p className="text-lg md:text-xl font-bold leading-relaxed">
              I work across the full stack, from building responsive interfaces to shaping backend functionality, and I enjoy creating products that balance performance, clarity, and personality.
            </p>
          </div>

          <div className="space-y-6" data-cursor-trail="off">
            {skills.map(({ icon: Icon, label, description }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-card border-4 border-foreground p-4 shadow-neo-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-neo"
              >
                <div className="border-4 border-foreground bg-primary p-3">
                  <Icon className="h-6 w-6 stroke-[3px]" />
                </div>
                <div>
                  <h3 className="font-black text-lg uppercase tracking-tight">{label}</h3>
                  <p className="font-bold text-sm">{description}</p>
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
