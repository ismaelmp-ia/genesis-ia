const WHATSAPP_LINK = "https://wa.me/346819118256";

const Footer = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="container mx-auto text-center">
      <a href="#" className="text-xl font-bold gradient-text">GÉNESIS</a>
      <p className="text-muted-foreground text-sm mt-2 mb-6">
        Más clientes. Menos esfuerzo. Con inteligencia artificial.
      </p>
      <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
        <a href="mailto:ismaelm.p@icloud.com" className="hover:text-foreground transition-colors">
          ismaelm.p@icloud.com
        </a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          WhatsApp
        </a>
      </div>
      <p className="text-muted-foreground text-xs">© 2025 GÉNESIS. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
