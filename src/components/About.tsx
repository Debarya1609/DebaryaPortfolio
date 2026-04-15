import { Star, Code, Palette, Rocket } from "lucide-react";

const skills = [
  { icon: Code, label: "Development", description: "React, TypeScript, Node.js, and more" },
  { icon: Palette, label: "Design", description: "UI/UX, branding, and visual identity" },
  { icon: Rocket, label: "Strategy", description: "Product thinking and creative direction" },
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
              I'm a designer and developer who believes the web should be{" "}
              <span className="inline-block bg-primary border-4 border-foreground px-2 rotate-1 shadow-neo-sm">
                loud
              </span>
              ,{" "}
              <span className="inline-block bg-muted border-4 border-foreground px-2 -rotate-1 shadow-neo-sm">
                bold
              </span>
              , and impossible to ignore.
            </p>
            <p className="text-lg md:text-xl font-bold leading-relaxed">
              With 5+ years of experience building digital products, I bring a unique blend of technical skill and creative vision to every project.
            </p>
          </div>

          <div className="space-y-6">
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
