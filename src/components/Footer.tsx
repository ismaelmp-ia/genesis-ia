import { Phone } from "lucide-react";
import genesisLogo from "@/assets/genesis-logo.png";

const Footer = () => (
  <footer className="py-12 px-4" style={{ borderTop: "1px solid rgba(37, 99, 235, 0.2)" }}>
    <div className="container mx-auto text-center">
      <img src={genesisLogo} alt="Génesis" className="h-10 mx-auto mb-4" />
      <p className="text-sm mb-6" style={{ color: "#94a3b8" }}>
        Inteligencia artificial para negocios que quieren crecer.
      </p>
      <a
        href="tel:+34681918256"
        className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition-opacity mb-8"
        style={{ color: "#94a3b8" }}
      >
        <Phone className="w-4 h-4" />
        +34 681 918 256
      </a>
      <p className="text-xs" style={{ color: "#94a3b8" }}>
        © 2025 Génesis IA. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
