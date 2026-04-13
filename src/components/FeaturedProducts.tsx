import { motion } from "framer-motion";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import { ArrowUpRight } from "lucide-react";

const products = [
  { name: "Sneakers Atelier", price: "€890", category: "Calzado", image: product1 },
  { name: "Chronograph Noir", price: "€2,450", category: "Relojería", image: product2 },
  { name: "Lentes Riviera", price: "€520", category: "Accesorios", image: product3 },
];

const FeaturedProducts = () => {
  return (
    <section id="colección" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4"
        >
          <div>
            <p className="font-display text-xs tracking-[0.35em] uppercase text-accent mb-3">Selección curada</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Piezas insignia
            </h2>
          </div>
          <a
            href="#"
            className="font-display text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
          >
            Ver todo
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, i) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-card mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={16} className="text-foreground" />
                </div>
              </div>
              <p className="font-display text-[10px] tracking-[0.3em] uppercase text-accent mb-2">{product.category}</p>
              <div className="flex justify-between items-baseline">
                <h3 className="font-display text-lg font-semibold text-foreground">{product.name}</h3>
                <span className="font-display text-sm text-muted-foreground">{product.price}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
