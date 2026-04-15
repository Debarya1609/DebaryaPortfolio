import { ArrowDown, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16 flex items-center overflow-hidden bg-grid">
      <div className="container max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left content - 3 cols */}
          <div className="lg:col-span-3 relative z-10">
            <div className="inline-block border-4 border-foreground bg-primary px-4 py-1 shadow-neo-sm rotate-[-2deg] mb-6">
              <span className="font-black text-sm uppercase tracking-widest">Available for work</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter mb-2">
              <span className="block">I BUILD</span>
              <span className="block text-stroke">DIGITAL</span>
              <span className="block">
                <span className="inline-block bg-secondary border-4 border-foreground px-3 rotate-1 shadow-neo">
                  THINGS
                </span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-bold mt-8 max-w-lg leading-snug">
              Designer & developer crafting bold, memorable digital experiences that refuse to blend in.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Right decorative area - 2 cols */}
          <div className="lg:col-span-2 relative hidden lg:block">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary border-4 border-foreground shadow-neo-lg rotate-6" />
            <div className="absolute top-20 right-20 w-48 h-48 bg-secondary border-4 border-foreground shadow-neo -rotate-3" />
            <div className="absolute top-40 right-40 w-32 h-32 bg-muted border-4 border-foreground shadow-neo-sm rotate-12" />
            <Star className="absolute top-10 right-72 h-16 w-16 stroke-[3px] animate-spin-slow fill-secondary" />
            <Zap className="absolute bottom-10 right-10 h-12 w-12 stroke-[3px] fill-primary" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-bold text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-6 w-6 stroke-[3px] animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
