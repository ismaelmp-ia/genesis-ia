import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/346819118256";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="text-2xl font-bold gradient-text tracking-tight">
          GÉNESIS
        </a>
        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            Agendar llamada gratuita
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
