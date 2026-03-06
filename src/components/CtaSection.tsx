import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/346819118256";

const CtaSection = () => (
  <section className="py-24 px-4">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card gradient-border rounded-2xl p-12 md:p-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Listo para <span className="gradient-text">automatizar tu negocio</span>?
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Agendá una llamada gratuita de 30 minutos y te mostramos exactamente qué podemos hacer por vos.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-10">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            Agendar llamada gratis →
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
