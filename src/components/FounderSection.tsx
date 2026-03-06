import { motion } from "framer-motion";
import fotoIsmael from "@/assets/foto-ismael.jpg";

const pills = [
  "8+ años emprendiendo",
  "IA · Automatización · Marketing",
  "Resultados medibles",
];

const FounderSection = () => (
  <section className="py-24 px-4">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <img
            src={fotoIsmael}
            alt="Ismael — Fundador de Génesis"
            className="max-w-[380px] w-full rounded-xl object-cover"
            style={{
              border: "2px solid rgba(37, 99, 235, 0.3)",
              boxShadow: "0 0 50px rgba(37, 99, 235, 0.2)",
            }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="text-xs font-bold uppercase mb-3"
            style={{ color: "#2563eb", letterSpacing: "0.15em" }}
          >
            FUNDADOR
          </p>
          <h2 className="text-4xl md:text-5xl font-[800] mb-2" style={{ color: "#f8fafc" }}>
            Ismael Muñoz
          </h2>
          <p className="text-lg mb-6" style={{ color: "#94a3b8" }}>
            Especialista en IA &amp; Marketing Digital
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "#94a3b8" }}>
            Llevo 8 años emprendiendo en el mundo digital. Comencé en marketing y ventas online en 2018, y en el último año me especialicé en inteligencia artificial, automatizaciones, desarrollo web y herramientas audiovisuales. Fundé Génesis para ayudar a empresas a crecer con sistemas inteligentes que trabajan las 24 horas.
          </p>

          <div className="flex flex-wrap gap-2">
            {pills.map((pill) => (
              <span
                key={pill}
                className="text-xs rounded-full px-3 py-1"
                style={{
                  background: "rgba(37, 99, 235, 0.1)",
                  border: "1px solid rgba(37, 99, 235, 0.3)",
                  color: "#94a3b8",
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FounderSection;
