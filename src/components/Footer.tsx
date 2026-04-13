import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold tracking-widest uppercase mb-4">ÈLARA</h3>
            <p className="font-body text-sm text-primary-foreground/50 leading-relaxed">
              Lujo artesanal desde Florencia para el mundo.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-[0.25em] uppercase text-primary-foreground/40 mb-6">Tienda</h4>
            <ul className="space-y-3">
              {["Colección", "Novedades", "Best Sellers", "Sale"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-[0.25em] uppercase text-primary-foreground/40 mb-6">Marca</h4>
            <ul className="space-y-3">
              {["Nosotros", "Atelier", "Sostenibilidad", "Prensa"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs tracking-[0.25em] uppercase text-primary-foreground/40 mb-6">Ayuda</h4>
            <ul className="space-y-3">
              {["Envíos", "Devoluciones", "Guía de tallas", "Contacto"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 ÈLARA. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
