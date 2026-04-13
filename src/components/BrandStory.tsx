import { motion } from "framer-motion";

const stats = [
  { value: "2008", label: "Fundación" },
  { value: "100%", label: "Artesanal" },
  { value: "47", label: "Países" },
  { value: "∞", label: "Garantía" },
];

const BrandStory = () => {
  return (
    <section id="nosotros" className="py-32 px-6 lg:px-12 bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-display text-xs tracking-[0.35em] uppercase text-gold mb-6">Nuestra historia</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Donde la tradición
              <br />
              encuentra la visión
            </h2>
            <p className="font-body text-lg text-primary-foreground/70 leading-relaxed mb-6">
              Cada pieza ÈLARA nace en nuestro atelier de Florencia, donde artesanos con décadas de experiencia
              transforman los materiales más nobles en objetos que trascienden tendencias.
            </p>
            <p className="font-body text-primary-foreground/50 leading-relaxed">
              No seguimos temporadas. Creamos legados. Nuestro compromiso es con la permanencia,
              la calidad sin compromisos y el diseño que habla por sí mismo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-px bg-primary-foreground/10"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-foreground p-10 text-center">
                <p className="font-display text-4xl sm:text-5xl font-bold text-gold mb-2">{stat.value}</p>
                <p className="font-display text-xs tracking-[0.25em] uppercase text-primary-foreground/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
