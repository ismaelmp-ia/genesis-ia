import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const PHONE_LINK = "tel:+34681918256";

const CtaSection = () => (
  <section className="py-24 px-4">
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#f8fafc" }}>
          ¿Listo para <span className="gradient-text">automatizar tu negocio</span>?
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "#94a3b8" }}>
          Agendá una llamada gratuita de 30 minutos y te mostramos exactamente qué podemos hacer por vos.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide text-sm px-10 rounded-md gap-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all">
          <a href={PHONE_LINK}>
            <Phone className="w-4 h-4" />
            Agendar llamada gratis
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
