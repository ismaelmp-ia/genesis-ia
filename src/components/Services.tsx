import { motion } from "framer-motion";
import { Bot, Zap, Megaphone, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Agentes de IA",
    desc: "Chatbots inteligentes que atienden, califican y cierran clientes 24/7 en WhatsApp, web y redes sociales.",
  },
  {
    icon: Zap,
    title: "Automatizaciones",
    desc: "Conectamos tus herramientas y creamos flujos automáticos que trabajan mientras vos dormís.",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    desc: "Campañas de Meta Ads y Google Ads optimizadas con IA para captar leads de calidad.",
  },
  {
    icon: BarChart3,
    title: "Sistemas de Ventas",
    desc: "CRM, seguimiento automático y pipelines diseñados para cerrar más en menos tiempo.",
  },
];

const Services = () => (
  <section id="servicios" className="py-24 px-4">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        <span className="gradient-text">Lo que hacemos</span>
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card glass-card-hover rounded-xl p-8 transition-all duration-300"
          >
            <s.icon className="w-10 h-10 mb-4" style={{ color: "#2563eb" }} />
            <h3 className="text-lg font-semibold mb-3" style={{ color: "#f8fafc" }}>{s.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
