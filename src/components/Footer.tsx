import { Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-12 border-t-4 border-foreground">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 stroke-[3px] fill-secondary text-secondary" />
            <span className="font-black text-lg uppercase tracking-tight text-card">Portfolio</span>
          </div>
          <p className="font-bold text-sm text-card/70 uppercase tracking-wide">
            © 2026 — Built with love and thick borders
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
