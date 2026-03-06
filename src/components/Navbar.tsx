import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import genesisLogo from "@/assets/genesis-logo.png";

const PHONE_LINK = "tel:+34681918256";

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
        scrolled ? "navbar-blur border-b" : "bg-transparent"
      }`}
      style={{ borderColor: scrolled ? "rgba(37, 99, 235, 0.15)" : "transparent" }}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#">
          <img src={genesisLogo} alt="Génesis" className="h-12" />
        </a>
        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wide text-xs gap-2">
          <a href={PHONE_LINK}>
            <Phone className="w-4 h-4" />
            Llamanos
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
