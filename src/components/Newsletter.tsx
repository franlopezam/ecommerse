import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="py-32 px-6 lg:px-12 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-display text-xs tracking-[0.35em] uppercase text-accent mb-4">Exclusivo</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Acceso anticipado a nuevas colecciones
          </h2>
          <p className="font-body text-muted-foreground mb-10 max-w-lg mx-auto">
            Únete a nuestro círculo privado y sé el primero en descubrir piezas únicas antes de su lanzamiento.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 bg-background border border-border px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
            <Button variant="hero" className="px-8 py-3.5 h-auto">
              Suscribirse
            </Button>
          </form>
          <p className="font-body text-xs text-muted-foreground mt-4">
            Sin spam. Solo lo esencial.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
