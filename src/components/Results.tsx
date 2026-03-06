import { motion } from "framer-motion";

const stats = [
  { icon: "⏱️", value: "-70% tiempo", label: "en atención al cliente" },
  { icon: "📈", value: "3x más leads", label: "calificados por mes" },
  { icon: "💰", value: "ROI positivo", label: "desde el primer mes" },
];

const Results = () => (
  <section className="py-24 px-4">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        <span className="gradient-text">Resultados reales</span>
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card glass-card-hover rounded-xl p-10 text-center transition-all duration-400"
          >
            <div className="text-4xl mb-4">{s.icon}</div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{s.value}</div>
            <p className="text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Results;
