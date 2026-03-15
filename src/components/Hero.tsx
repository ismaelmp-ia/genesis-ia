import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-pattern overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none" style={{ background: "rgba(37, 99, 235, 0.15)" }} />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-[130px] pointer-events-none" style={{ background: "rgba(14, 165, 233, 0.1)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none" style={{ background: "rgba(99, 102, 241, 0.08)" }} />

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest"
          style={{
            background: "rgba(37, 99, 235, 0.1)",
            border: "1px solid rgba(37, 99, 235, 0.3)",
            color: "#94a3b8",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Agencia de IA · 2025
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-[800] leading-[1.1] mb-6 max-w-5xl mx-auto"
          style={{ letterSpacing: "-0.02em", color: "#f8fafc" }}
        >
          Implementamos IA en tu negocio para que{" "}
          <span className="gradient-text">vendas más, trabajes menos.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#94a3b8" }}
        >
          Somos una agencia especializada en inteligencia artificial y marketing digital.
          Automatizamos tus procesos de captación y ventas para que tu empresa escale sin contratar más personal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide text-sm px-8 rounded-md gap-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all">
            <a href="#contacto">
              Contactar ahora
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-bold uppercase tracking-wide text-sm px-8 rounded-md gap-2" style={{ borderColor: "rgba(37, 99, 235, 0.3)", color: "#f8fafc" }}>
            <a href="#servicios">
              <ArrowDown className="w-4 h-4" />
              Ver servicios
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
