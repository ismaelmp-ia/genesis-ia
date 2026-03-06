import { motion } from "framer-motion";

const VideoSection = () => (
  <section className="py-24 px-4">
    <div className="container mx-auto max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#2563eb" }}>
          EN ACCIÓN
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#f8fafc" }}>
          Tecnología real, resultados reales
        </h2>
        <p className="text-lg mb-10" style={{ color: "#94a3b8" }}>
          Descubrí cómo Génesis transforma negocios con inteligencia artificial
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="rounded-xl overflow-hidden"
        style={{
          border: "1px solid rgba(37, 99, 235, 0.3)",
          boxShadow: "0 0 40px rgba(37, 99, 235, 0.3)",
        }}
      >
        <video
          controls
          preload="metadata"
          poster="/videos/genesis-poster.jpg"
          className="w-full aspect-video bg-black"
          src="/videos/genesis-intro.mp4"
        />
      </motion.div>
    </div>
  </section>
);

export default VideoSection;
