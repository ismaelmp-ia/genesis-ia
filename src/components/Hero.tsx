import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/346819118256";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center dot-pattern overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl mx-auto"
        >
          Implementamos IA en tu negocio para que{" "}
          <span className="gradient-text">vendas más, trabajes menos.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Somos una agencia especializada en inteligencia artificial y marketing digital.
          Automatizamos tus procesos de captación y ventas para que tu empresa escale sin contratar más personal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Quiero saber más
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-muted font-semibold text-base px-8">
            <a href="#servicios">Ver servicios</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
