import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { label: "Vấn đề", href: "#problem" },
  { label: "Giải pháp", href: "#solution" },
  { label: "Tính năng", href: "#features" },
  { label: "Công nghệ", href: "#tech" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container section-padding flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-foreground">
          <Shield className="w-6 h-6 text-primary" />
          <span>FakeNews Detection
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="gradient-bg text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold transition-transform duration-200 active:scale-[0.97]"
          >
            Dùng thử
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border section-padding pb-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="block gradient-bg text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold text-center"
          >
            Dùng thử
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
