import { ArrowDown, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax factors
  const parallax1 = scrollY * 0.15;
  const parallax2 = scrollY * 0.1;
  const parallax3 = scrollY * 0.2;
  const rotateScroll = scrollY * 0.05;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-16 flex items-center overflow-hidden bg-dots"
    >
      <div className="container max-w-7xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left content - 3 cols */}
          <div className="lg:col-span-3 relative z-10">
            <div
              className="inline-block border-4 border-foreground bg-primary px-4 py-1 shadow-neo-sm mb-6"
              style={{ transform: `rotate(-2deg) translateY(${-parallax1 * 0.3}px)` }}
            >
              <span className="font-black text-sm uppercase tracking-widest">
                Available for work
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter mb-2">
              <span
                className="block"
                style={{ transform: `translateX(${-parallax1 * 0.2}px)` }}
              >
                I BUILD
              </span>
              <span
                className="block text-stroke"
                style={{ transform: `translateX(${parallax1 * 0.15}px)` }}
              >
                DIGITAL
              </span>
              <span className="block">
                <span
                  className="inline-block bg-secondary border-4 border-foreground px-3 shadow-neo"
                  style={{ transform: `rotate(${1 + rotateScroll * 0.3}deg)` }}
                >
                  THINGS
                </span>
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl font-bold mt-8 max-w-lg leading-snug"
              style={{ transform: `translateY(${parallax2 * 0.5}px)` }}
            >
              Designer & developer crafting bold, memorable digital experiences
              that refuse to blend in.
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

          {/* Right — image placeholder, always visible */}
          <div className="lg:col-span-2 relative flex items-center justify-center min-h-[280px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-[480px]">
            {/* Main image placeholder */}
            <div
              className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] bg-primary border-4 border-foreground shadow-neo-lg z-10"
              style={{
                transform: `rotate(${6 + rotateScroll * 0.4}deg) translateY(${-parallax1}px)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-black text-lg sm:text-xl md:text-2xl uppercase tracking-widest text-foreground/30 text-center px-4">
                  Your Photo
                </span>
              </div>
            </div>

            {/* Secondary placeholder */}
            <div
              className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[280px] lg:h-[280px] bg-secondary border-4 border-foreground shadow-neo z-20 top-[10%] right-[5%] sm:right-[10%]"
              style={{
                transform: `rotate(${-3 + rotateScroll * -0.3}deg) translateY(${-parallax2}px)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-black text-sm sm:text-base md:text-lg uppercase tracking-widest text-foreground/20 text-center px-4">
                  Your Work
                </span>
              </div>
            </div>

            {/* Tertiary accent block */}
            <div
              className="absolute w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] bg-muted border-4 border-foreground shadow-neo-sm z-30 bottom-[5%] left-[5%] sm:left-[10%]"
              style={{
                transform: `rotate(${12 + rotateScroll * 0.6}deg) translateY(${-parallax3}px)`,
              }}
            />

            {/* Decorative elements */}
            <Star
              className="absolute top-0 left-0 sm:left-[5%] h-10 w-10 sm:h-14 sm:w-14 stroke-[3px] animate-spin-slow fill-secondary z-40"
              style={{ transform: `translateY(${-parallax2 * 0.8}px)` }}
            />
            <Zap
              className="absolute bottom-[10%] right-0 h-8 w-8 sm:h-10 sm:w-10 stroke-[3px] fill-primary z-40"
              style={{ transform: `translateY(${-parallax3 * 0.5}px) rotate(${rotateScroll}deg)` }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <span className="font-bold text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-6 w-6 stroke-[3px] animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
