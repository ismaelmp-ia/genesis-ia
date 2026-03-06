import { motion } from "framer-motion";
import { DollarSign, RefreshCw, TrendingDown } from "lucide-react";

const pains = [
  {
    icon: DollarSign,
    title: "Perdés clientes por no responder a tiempo",
    desc: "Tu equipo no da abasto y los leads se enfrían antes de que puedas atenderlos.",
  },
  {
    icon: RefreshCw,
    title: "Tareas repetitivas que consumen horas de tu día",
    desc: "Seguimiento manual, respuestas básicas, reportes… todo te roba tiempo que podrías usar para cerrar ventas.",
  },
  {
    icon: TrendingDown,
    title: "Invertís en publicidad pero los resultados no escalan",
    desc: "Sin un sistema de automatización detrás, el tráfico que comprás no convierte.",
  },
];

const PainPoints = () => (
  <section className="py-24 px-4">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        <span className="gradient-text">¿Te identificás?</span>
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {pains.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card glass-card-hover rounded-xl p-8 transition-all duration-300"
          >
            <p.icon className="w-10 h-10 mb-4" style={{ color: "#2563eb" }} />
            <h3 className="text-lg font-semibold mb-3" style={{ color: "#f8fafc" }}>{p.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainPoints;
