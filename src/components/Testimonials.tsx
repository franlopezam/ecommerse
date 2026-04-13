import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "La calidad de los materiales es incomparable. Cada detalle habla de excelencia artesanal.",
    author: "Sofía M.",
    role: "Directora Creativa",
  },
  {
    text: "No son solo productos, son declaraciones. ÈLARA entiende lo que significa el lujo contemporáneo.",
    author: "Carlos R.",
    role: "Arquitecto",
  },
  {
    text: "Después de tres años, mis piezas ÈLARA lucen mejor que el primer día. Inversión inteligente.",
    author: "Valentina G.",
    role: "Editora de Moda",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.35em] uppercase text-accent mb-3">Testimonios</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Lo que dicen
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-border p-10 hover:border-accent transition-colors duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-foreground/80 leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">{t.author}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
