import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 pt-20">
      <div className="max-w-7xl mx-auto w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-4 font-display"
        >
          Soy
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
        >
          <span className="gradient-text">Diseñador Web</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mi nombre es <span className="text-foreground font-semibold">Juan Díaz</span>,{" "}
            <span className="text-foreground font-medium">Programador y Analista de Datos</span>.
            Soy desarrollador de aplicaciones atractivas y enfocadas en un diseño único y enfocado en{" "}
            <span className="text-foreground font-semibold">cumplir las necesidades del cliente</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#trabajos"
            className="glass-card px-8 py-3 rounded-full font-medium hover-glow transition-all duration-300 hover:bg-primary/20"
          >
            Trabajos
          </a>
          <a
            href="#experiencia"
            className="glass-card px-8 py-3 rounded-full font-medium hover-glow transition-all duration-300 hover:bg-primary/20"
          >
            Experiencia
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
