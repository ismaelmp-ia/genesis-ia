import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const FORMSPARK_URL = "https://submit-form.com/W59rk0Uuv";

const contactSchema = z.object({
  full_name: z.string().trim().min(1, "El nombre es obligatorio").max(200),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(1, "El teléfono es obligatorio").max(30),
  message: z.string().trim().min(1, "El mensaje es obligatorio").max(1000),
});

const inputClasses =
  "w-full rounded-md bg-background border border-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background";

const CtaSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(FORMSPARK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("Error al enviar");
      toast({ title: "¡Mensaje enviado!", description: "Nos pondremos en contacto pronto." });
      (e.target as HTMLFormElement).reset();
    } catch {
      toast({ title: "Error", description: "No se pudo enviar. Intentá de nuevo.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-12 md:p-16 text-center"
          style={{
            border: "1px solid rgba(37, 99, 235, 0.3)",
            boxShadow: "0 0 60px rgba(37, 99, 235, 0.15)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            ¿Listo para <span className="gradient-text">automatizar tu negocio</span>?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto text-muted-foreground">
            Completá el formulario y te contactamos en menos de 24 horas.
          </p>

          <form onSubmit={handleSubmit} className="text-left space-y-4 max-w-lg mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input name="first_name" placeholder="Nombre" className={inputClasses} />
                {errors.first_name && <p className="text-destructive text-xs mt-1">{errors.first_name}</p>}
              </div>
              <div>
                <input name="last_name" placeholder="Apellido" className={inputClasses} />
                {errors.last_name && <p className="text-destructive text-xs mt-1">{errors.last_name}</p>}
              </div>
            </div>
            <div>
              <input name="email" type="email" placeholder="Email" className={inputClasses} />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input name="phone" type="tel" placeholder="Teléfono" className={inputClasses} />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <textarea name="message" placeholder="Mensaje" rows={4} className={inputClasses} style={{ minHeight: 80 }} />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <div className="text-center pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wide text-sm px-10 rounded-md gap-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all"
              >
                <Send className="w-4 h-4" />
                {loading ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
