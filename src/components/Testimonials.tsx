import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "JR",
    name: "Juan R.",
    role: "E-commerce · Buenos Aires",
    quote: "Triplicamos los leads calificados en 3 semanas. El agente de WhatsApp atiende solo las 24 horas.",
  },
  {
    initials: "ML",
    name: "María L.",
    role: "Inmobiliaria · Córdoba",
    quote: "Antes perdíamos leads por no responder rápido. Ahora el sistema agenda citas solo y el equipo solo cierra.",
  },
  {
    initials: "CR",
    name: "Carlos R.",
    role: "Salud & Bienestar · Madrid",
    quote: "Recuperamos la inversión en el primer mes. Los flujos automáticos liberaron 20 horas semanales del equipo.",
  },
];

const Testimonials = () => (
  <section className="py-20 px-4">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
        style={{ color: "#f8fafc" }}
      >
        Lo que dicen quienes{" "}
        <span className="gradient-text">ya implementaron</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card glass-card-hover rounded-xl p-8 transition-all duration-300"
          >
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#94a3b8" }}
            >
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: "rgba(37, 99, 235, 0.15)", color: "#60a5fa" }}
              >
                {t.initials}
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: "#f8fafc" }}>
                  {t.name}
                </div>
                <div className="text-xs" style={{ color: "#64748b" }}>
                  {t.role}
                </div>
              </div>
            </div>
            <div className="mt-3 text-sm" style={{ color: "#f59e0b" }}>★★★★★</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
