import { Star, Send, MessageSquareMore, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Debarya1609" },
  { label: "Instagram", href: "https://www.instagram.com/frankenstein_pi/" },
  { label: "Email", href: "mailto:debaryab@gmail.com" },
];

const contactNotes = [
  "Freelance Projects",
  "Creative Collaborations",
  "Product Build Conversations",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 md:py-32 bg-muted border-y-4 border-foreground"
    >
      <div className="absolute left-[5%] top-24 hidden h-20 w-20 rotate-[-8deg] border-4 border-foreground bg-primary shadow-neo-sm md:block" />
      <div className="absolute right-[6%] bottom-16 hidden h-24 w-24 rotate-[10deg] border-4 border-foreground bg-card shadow-neo lg:block" />

      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-3 border-4 border-foreground bg-card px-4 py-2 shadow-neo-sm rotate-[-2deg]">
              <MessageSquareMore className="h-5 w-5 stroke-[3px]" />
              <span className="font-black text-xs sm:text-sm uppercase tracking-[0.24em]">
                Open To Work
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Star className="h-10 w-10 stroke-[3px] fill-foreground" />
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter">
                Let's Talk
              </h2>
            </div>
          </div>

          <div className="max-w-xl border-4 border-foreground bg-secondary px-5 py-4 shadow-neo-sm rotate-[1deg]">
            <p className="font-bold text-sm sm:text-base leading-relaxed uppercase tracking-wide">
              If you're building something useful, interesting, or a little unconventional, I'm always
              open to hearing about it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div className="relative space-y-6 pt-4 sm:pt-6">
            <div className="absolute right-2 top-0 hidden rotate-[6deg] border-4 border-foreground bg-primary px-4 py-2 shadow-neo-sm sm:inline-flex sm:items-center sm:gap-2">
              <Sparkles className="h-4 w-4 stroke-[3px]" />
              <span className="font-black text-xs uppercase tracking-[0.22em]">Fast Reply Energy</span>
            </div>

            <div className="border-4 border-foreground bg-card p-6 sm:p-8 shadow-neo-lg">
              <p className="max-w-[22ch] text-lg md:text-xl font-bold leading-relaxed sm:max-w-none">
                Got a project, freelance idea, or collaboration in mind? Let's build something{" "}
                <span className="inline-block bg-primary border-4 border-foreground px-2 rotate-1 shadow-neo-sm">
                  memorable
                </span>
                . You can reach me directly at{" "}
                <a
                  href="mailto:debaryab@gmail.com"
                  className="break-all underline decoration-4 underline-offset-4 sm:break-normal"
                >
                  debaryab@gmail.com
                </a>
                .
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {contactNotes.map((item, index) => (
                  <div
                    key={item}
                    className={`flex min-h-[104px] items-center border-4 border-foreground px-4 py-5 shadow-neo-sm ${
                      index === 0 ? "bg-background rotate-[-1deg]" : index === 1 ? "bg-secondary rotate-[1deg]" : "bg-primary rotate-[-1deg]"
                    }`}
                  >
                    <p className="font-black text-[11px] uppercase tracking-[0.09em] leading-6 sm:text-xs">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`border-4 border-foreground px-4 py-2 font-black text-sm uppercase tracking-[0.12em] shadow-neo-sm transition-all duration-100 hover:-translate-y-1 hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
                    index === 0 ? "bg-card" : index === 1 ? "bg-secondary" : "bg-primary"
                  }`}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div
            className="relative border-4 border-foreground bg-card p-6 md:p-8 shadow-neo-lg"
            data-cursor-trail="off"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-4 border-foreground bg-background px-4 py-3 shadow-neo-sm">
              <span className="font-black text-xs uppercase tracking-[0.24em]">Start A Conversation</span>
              <span className="font-bold text-sm">Drop a message anytime</span>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Star className="mb-4 h-16 w-16 fill-secondary stroke-[3px] animate-spin-slow" />
                <h3 className="font-black text-2xl uppercase">Message Sent!</h3>
                <p className="mt-2 font-bold">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div>
                  <label className="mb-2 block font-black text-sm uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border-4 border-foreground bg-card p-4 font-bold text-lg placeholder:text-foreground/40 focus:bg-secondary focus:shadow-neo-sm focus:outline-none transition-all duration-100"
                    placeholder="Your good name"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-black text-sm uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full border-4 border-foreground bg-card p-4 font-bold text-lg placeholder:text-foreground/40 focus:bg-secondary focus:shadow-neo-sm focus:outline-none transition-all duration-100"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-black text-sm uppercase tracking-widest">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full resize-none border-4 border-foreground bg-card p-4 font-bold text-lg placeholder:text-foreground/40 focus:bg-secondary focus:shadow-neo-sm focus:outline-none transition-all duration-100"
                    placeholder="Tell me what you're building, and how I can help..."
                  />
                </div>
                <Button size="lg" className="w-full">
                  Send Message <Send className="h-4 w-4 stroke-[3px]" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
