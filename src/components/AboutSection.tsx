import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Music, Shield } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <User className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Acerca
              </h2>
              <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
                de mí
              </h2>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              Hola, mi nombre es <span className="text-foreground font-semibold">Juan Díaz</span>, 
              tengo 30 años y soy de Chile y actualmente vivo en la ciudad de Valparaíso. 
              Me encanta la programación y el diseño web desde que tenía 15 años. Mis metas actuales 
              son lograr trabajar en un lugar el cual se adapte a mis tiempos y pueda desempeñar mis habilidades.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Estudié <span className="text-foreground font-semibold">Programación y Análisis de Datos</span> en 
              el instituto AIEP, donde desarrollé habilidades técnicas y una fuerte 
              <span className="text-foreground"> atención al detalle</span>. 
              Actualmente cursando <span className="text-foreground font-semibold">Ingeniería Civil en Informática </span>
              en la <a className="text-foreground font-semibold underline" href="https://www.unab.cl/" target="_blank" rel="noopener noreferrer">Universidad Andres Bello</a>,
              buscando siempre la excelencia y el crecimiento profesional constante.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Mi enfoque laboral se basa en la <span className="text-foreground">documentación</span>, 
              <span className="text-foreground">organización</span> y gran capacidad para 
              <span className="text-foreground font-semibold"> adaptarme a nuevos desafíos</span>. 
              Valoro el trabajo en equipo y la comunicación efectiva como pilares fundamentales 
              para el éxito de cualquier proyecto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-display font-bold text-lg mb-2">Ubicación</h4>
              <p className="text-muted-foreground text-sm">Valparaíso, Chile</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300">
              <GraduationCap className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-display font-bold text-lg mb-2">Educación</h4>
              <p className="text-muted-foreground text-sm">AIEP - Programación y Análisis de Datos</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-display font-bold text-lg mb-2">Habilidades Blandas</h4>
              <p className="text-muted-foreground text-sm">Ética profesional, Responsabilidad, Atención al detalle, Compromiso con la calidad</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300 bg-gradient-to-br from-primary/20 to-accent/20">
              <span className="text-4xl font-display font-bold gradient-text">5+</span>
              <h4 className="font-display font-bold text-lg mt-2">Años</h4>
              <p className="text-muted-foreground text-sm">de experiencia</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
