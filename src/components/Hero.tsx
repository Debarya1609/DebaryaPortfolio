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
                Debarya Banerjee • Freelance & Collabs
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter mb-2">
              <span
                className="block"
                style={{ transform: `translateX(${-parallax1 * 0.2}px)` }}
              >
                FULL STACK
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
                  EXPERIENCES
                </span>
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl font-bold mt-8 max-w-lg leading-snug"
              style={{ transform: `translateY(${parallax2 * 0.5}px)` }}
            >
              Full Stack Developer building bold, human-first web experiences
              with clean code, sharp UI, and a strong product instinct.
            </p>

            <div className="flex flex-wrap gap-4 mt-10" data-cursor-trail="off">
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Right — profile image collage, always visible */}
          <div className="lg:col-span-2 relative flex items-center justify-center min-h-[440px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[560px]">
            {/* Main profile image */}
            <div
              className="absolute left-[54%] top-[50%] z-20 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 overflow-hidden border-4 border-foreground bg-primary shadow-neo-lg sm:h-[290px] sm:w-[290px] md:h-[330px] md:w-[330px] lg:h-[350px] lg:w-[350px]"
              style={{
                transform: `translate(-50%, -50%) rotate(${4 + rotateScroll * 0.35}deg) translateY(${-parallax1}px)`,
              }}
            >
              <img
                src="/Debarya%202.jpg"
                alt="Debarya Banerjee portrait 2"
                className="h-full w-full object-cover object-[70%_24%]"
                loading="eager"
              />
            </div>

            {/* Secondary profile image */}
            <div
              className="absolute left-[8%] top-[10%] z-10 h-[185px] w-[185px] overflow-hidden border-4 border-foreground bg-secondary shadow-neo sm:left-[7%] sm:h-[235px] sm:w-[235px] md:left-[4%] md:h-[270px] md:w-[270px] lg:left-[2%] lg:h-[285px] lg:w-[285px]"
              style={{
                transform: `rotate(${-8 + rotateScroll * -0.28}deg) translateY(${-parallax2}px)`,
              }}
            >
              <img
                src="/Debarya%201.jpg"
                alt="Debarya Banerjee portrait 1"
                className="h-full w-full object-cover object-[50%_35%]"
                loading="eager"
              />
            </div>

            {/* Tertiary profile image */}
            <div
              className="absolute bottom-[8%] right-[4%] z-30 h-[165px] w-[165px] overflow-hidden border-4 border-foreground bg-muted shadow-neo sm:right-[6%] sm:h-[215px] sm:w-[215px] md:right-[3%] md:h-[245px] md:w-[245px] lg:right-[0%] lg:h-[255px] lg:w-[255px]"
              style={{
                transform: `rotate(${9 + rotateScroll * 0.42}deg) translateY(${-parallax3}px)`,
              }}
            >
              <img
                src="/Debarya%203.jpg"
                alt="Debarya Banerjee portrait 3"
                className="h-full w-full object-cover object-[55%_32%]"
                loading="eager"
              />
            </div>

            {/* Decorative elements */}
            <Star
              className="absolute left-0 top-0 z-40 h-10 w-10 fill-secondary stroke-[3px] sm:left-[5%] sm:h-14 sm:w-14"
              style={{ transform: `translateY(${-parallax2 * 0.8}px)` }}
            />
            <Zap
              className="absolute bottom-[10%] right-0 z-40 h-8 w-8 fill-primary stroke-[3px] sm:h-10 sm:w-10"
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
