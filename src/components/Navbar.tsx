import { Star, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-foreground">
      <div className="container max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2 border-4 border-foreground bg-secondary px-3 py-1 shadow-neo-sm font-black text-lg uppercase tracking-tight">
          <Star className="h-5 w-5 stroke-[3px] fill-foreground" />
          Debarya
        </a>

        <div className="hidden md:flex items-center gap-1">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="px-4 py-2 font-bold uppercase text-sm tracking-wide border-2 border-transparent transition-all duration-100 hover:border-foreground hover:bg-primary hover:shadow-neo-sm"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden border-4 border-foreground p-2 shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5 stroke-[3px]" /> : <Menu className="h-5 w-5 stroke-[3px]" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-4 border-foreground bg-background">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 font-bold uppercase text-lg border-b-4 border-foreground transition-all duration-100 hover:bg-primary"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
