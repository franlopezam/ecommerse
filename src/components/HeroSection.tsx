import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-product.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <p className="font-display text-xs tracking-[0.35em] uppercase text-accent mb-6">
              Colección Primavera 2026
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight text-foreground mb-8">
              El arte de
              <br />
              <span className="text-gradient-gold">lo esencial</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
              Piezas atemporales diseñadas para quienes entienden que el lujo verdadero está en los detalles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="px-10 py-6">
                Explorar colección
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="editorial" size="lg" className="px-10 py-6">
                Nuestro atelier
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] max-h-[75vh] overflow-hidden">
              <img
                src={heroImage}
                alt="Colección de lujo ÈLARA - Bolso de cuero premium"
                className="w-full h-full object-cover"
                width={1280}
                height={1600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-10 -left-4 lg:-left-8 bg-foreground text-primary-foreground px-6 py-4"
            >
              <p className="font-display text-xs tracking-widest uppercase">Hecho a mano</p>
              <p className="font-display text-2xl font-bold">Italia</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
