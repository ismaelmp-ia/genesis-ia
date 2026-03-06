import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Diagnóstico gratuito",
    desc: "Analizamos tu negocio, tus procesos actuales y detectamos dónde estás perdiendo dinero y tiempo.",
  },
  {
    num: "02",
    title: "Diseñamos tu sistema",
    desc: "Construimos la solución a medida: agentes de IA, automatizaciones y estrategia de marketing integrados.",
  },
  {
    num: "03",
    title: "Escalás sin límites",
    desc: "Tu negocio funciona en piloto automático. Más clientes, menos fricción, mejores resultados.",
  },
];

const HowItWorks = () => (
  <section className="py-24 px-4">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-20"
      >
        <span className="gradient-text">Cómo trabajamos</span>
      </motion.h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Connecting line */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

        <div className="space-y-16">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex gap-8 items-start relative"
            >
              <div className="flex-shrink-0 w-16 md:w-24 h-16 md:h-24 rounded-full glass-card flex items-center justify-center border border-primary/30 z-10">
                <span className="text-2xl md:text-3xl font-bold gradient-text">{s.num}</span>
              </div>
              <div className="pt-2 md:pt-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
