import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

// El chat de Génesis vive en un shadow DOM abierto (`data-forja-widget`), así que
// desde aquí se puede pulsar su burbuja. Si por lo que sea aún no ha cargado,
// caemos al correo en vez de dejar el botón muerto.
const abrirChat = () => {
  const host = document.querySelector("[data-forja-widget]");
  const burbuja = host?.shadowRoot?.querySelector<HTMLButtonElement>(".burbuja");
  if (burbuja) {
    burbuja.click();
    return;
  }
  window.location.href = "mailto:ismaelm.p@icloud.com?subject=Quiero%20automatizar%20mi%20negocio";
};

const CtaSection = () => (
  <section id="contacto" className="py-24 px-4">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-2xl p-12 md:p-16 text-center"
        style={{
          border: "1px solid rgba(37, 99, 235, 0.3)",
          boxShadow: "0 0 60px rgba(37, 99, 235, 0.15)",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          ¿Listo para <span className="gradient-text">automatizar tu negocio</span>?
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto text-muted-foreground">
          Cuéntanos qué quieres resolver y te decimos cómo se automatiza. Contestamos al
          instante, a cualquier hora.
        </p>

        <Button
          size="lg"
          onClick={abrirChat}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide text-sm px-10 rounded-md gap-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          Hablar ahora
        </Button>

        <p className="text-xs mt-6 text-muted-foreground">
          O escríbenos a{" "}
          <a href="mailto:ismaelm.p@icloud.com" className="underline hover:text-foreground">
            ismaelm.p@icloud.com
          </a>
        </p>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
