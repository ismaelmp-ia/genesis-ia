import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import genesisLogo from "@/assets/genesis-logo.png";

const navLinks = [
  { label: "Servicios",   href: "#servicios" },
  { label: "Proceso",     href: "#proceso" },
  { label: "Resultados",  href: "#resultados" },
  { label: "FAQ",         href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-blur border-b" : "bg-transparent"
      }`}
      style={{ borderColor: scrolled ? "rgba(37, 99, 235, 0.15)" : "transparent" }}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#">
          <img src={genesisLogo} alt="Génesis" className="h-10" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "#94a3b8" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f8fafc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Button
          asChild
          size="sm"
          className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide text-xs"
        >
          <a href="#contacto">Contactar</a>
        </Button>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className="block w-5 h-0.5" style={{ background: "#94a3b8" }} />
          <span className="block w-5 h-0.5" style={{ background: "#94a3b8" }} />
          <span className="block w-5 h-0.5" style={{ background: "#94a3b8" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-1"
          style={{
            borderColor: "rgba(37, 99, 235, 0.15)",
            background: "rgba(6, 12, 24, 0.97)",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium border-b"
              style={{
                color: "#94a3b8",
                borderColor: "rgba(255,255,255,0.05)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)}>
            <Button className="w-full mt-3 bg-primary text-primary-foreground font-bold">
              Contactar ahora
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
