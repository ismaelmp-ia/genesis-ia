import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Necesito conocimientos técnicos para usar lo que implementan?",
    a: "No. Nosotros nos encargamos de todo. Vos solo usás los resultados.",
  },
  {
    q: "¿Cuánto tiempo tarda la implementación?",
    a: "Entre 7 y 15 días dependiendo de la complejidad. Siempre con acompañamiento nuestro.",
  },
  {
    q: "¿Funciona para cualquier tipo de negocio?",
    a: "Sí. Trabajamos con e-commerce, servicios, inmobiliarias, salud, educación y más.",
  },
  {
    q: "¿Qué pasa si no me funcionan los resultados?",
    a: "Trabajamos con garantía de satisfacción. Si no ves mejoras en 30 días, revisamos el sistema sin costo.",
  },
  {
    q: "¿Tienen planes o cobran por proyecto?",
    a: "Ambas opciones. Podemos trabajar por proyecto único o con una suscripción mensual de mantenimiento y optimización.",
  },
];

const Faq = () => (
  <section id="faq" className="py-24 px-4">
    <div className="container mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        <span className="gradient-text">Preguntas frecuentes</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card rounded-xl px-6 border-none"
            >
              <AccordionTrigger
                className="text-left font-medium hover:no-underline py-5"
                style={{ color: "#f8fafc" }}
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5" style={{ color: "#94a3b8" }}>
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default Faq;
