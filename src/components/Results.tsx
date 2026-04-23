import { motion } from "framer-motion";
import { Clock, TrendingUp, BadgeDollarSign } from "lucide-react";

const stats = [
  { icon: Clock, value: "-70%", unit: "tiempo", label: "en atención al cliente" },
  { icon: TrendingUp, value: "3x", unit: "más leads", label: "calificados por mes" },
  { icon: BadgeDollarSign, value: "2.4x", unit: "ROI promedio", label: "en los primeros 30 días" },
];

const Results = () => (
  <section id="resultados" className="py-24 px-4">
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
            className="glass-card glass-card-hover rounded-xl p-10 text-center transition-all duration-300 relative"
          >
            <s.icon className="w-8 h-8 mx-auto mb-4" style={{ color: "#2563eb" }} />
            <div className="text-5xl md:text-6xl font-[900] gradient-text mb-1">{s.value}</div>
            <div className="text-lg font-semibold mb-1" style={{ color: "#f8fafc" }}>{s.unit}</div>
            <p style={{ color: "#94a3b8" }}>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Results;
