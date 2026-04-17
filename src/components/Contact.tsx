import { Star, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Debarya1609" },
  { label: "Instagram", href: "https://www.instagram.com/frankenstein_pi/" },
  { label: "Email", href: "mailto:debaryab@gmail.com" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-muted border-y-4 border-foreground">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <Star className="h-10 w-10 stroke-[3px] fill-foreground" />
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter">
            Let's Talk
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg md:text-xl font-bold leading-relaxed">
              Got a project, freelance idea, or collaboration in mind? Let's build something{" "}
              <span className="inline-block bg-primary border-4 border-foreground px-2 rotate-1 shadow-neo-sm">
                memorable
              </span>
              . You can reach me directly at <a href="mailto:debaryab@gmail.com" className="underline decoration-4 underline-offset-4">debaryab@gmail.com</a>.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="border-4 border-foreground bg-card px-4 py-2 font-black text-sm uppercase tracking-wide shadow-neo-sm transition-all duration-100 hover:-translate-y-1 hover:shadow-neo active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div
            className="bg-card border-4 border-foreground p-6 md:p-8 shadow-neo"
            data-cursor-trail="off"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Star className="h-16 w-16 stroke-[3px] fill-secondary mb-4 animate-spin-slow" />
                <h3 className="font-black text-2xl uppercase">Message Sent!</h3>
                <p className="font-bold mt-2">Thanks for reaching out. I'll get back to you soon.</p>
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
                  <label className="block font-black text-sm uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border-4 border-foreground bg-card p-4 font-bold text-lg placeholder:text-foreground/40 focus:bg-secondary focus:shadow-neo-sm focus:outline-none transition-all duration-100"
                    placeholder="Your good name"
                  />
                </div>
                <div>
                  <label className="block font-black text-sm uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full border-4 border-foreground bg-card p-4 font-bold text-lg placeholder:text-foreground/40 focus:bg-secondary focus:shadow-neo-sm focus:outline-none transition-all duration-100"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block font-black text-sm uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full border-4 border-foreground bg-card p-4 font-bold text-lg placeholder:text-foreground/40 focus:bg-secondary focus:shadow-neo-sm focus:outline-none transition-all duration-100 resize-none"
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
