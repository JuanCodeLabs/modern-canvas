import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Music, Shield, Cpu, Settings } from "lucide-react";

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
              Mi nombre es <span className="text-foreground font-semibold">Juan Díaz</span>, 
              soy <span className="text-foreground font-semibold">programador y analista de sistemas</span> con experiencia 
              en el ámbito del <span className="text-foreground font-medium">software, hardware, redes y automatización</span>. 
              Me desenvuelvo tanto en entornos de desarrollo como en terreno, abordando desde la lógica 
              de un sistema hasta la infraestructura física que lo sostiene.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Trabajo con <span className="text-foreground font-semibold">bases de datos</span> y 
              <span className="text-foreground font-semibold"> sistemas de gestión</span>, administro 
              <span className="text-foreground"> servidores</span> e integro 
              <span className="text-foreground"> redes</span> tanto a nivel lógico como físico. 
              En el área de <span className="text-foreground font-semibold">corrientes débiles</span>, 
              realizo trabajo de campo en <span className="text-foreground">cableado estructurado</span>, 
              instalación y configuración de dispositivos de red, y manejo de equipos especializados 
              como <span className="text-foreground font-semibold">PLC, medidores y otros instrumentos</span> 
              en redes de automatización industrial.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Poseo basta experiencia en <span className="text-foreground font-semibold">sistemas BMS </span> 
              —gestión de edificios inteligentes—, donde programo, configuro e integro distintos tipos de dispositivos 
              en plataformas de control centralizado. 
            </p>  
            <p className="text-muted-foreground leading-relaxed">
              Mi enfoque general de trabajo se basa en la <span className="text-foreground">documentación precisa</span>, 
              <span className="text-foreground">estándares de calidad</span> y <span className="text-foreground font-semibold">mejores prácticas</span> 
              en cada proyecto. Valoro la <span className="text-foreground">organización</span>, 
              <span className="text-foreground">planificación</span> y <span className="text-foreground font-semibold">ejecución metódica</span> 
              para garantizar soluciones robustas y escalables que cumplan con los más altos estándares 
              técnicos y profesionales.
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
              <Cpu className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-display font-bold text-lg mb-2">Desarrollo</h4>
              <p className="text-muted-foreground text-sm">Software, Análisis de Datos, Automatización</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300">
              <Settings className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-display font-bold text-lg mb-2">Infraestructura</h4>
              <p className="text-muted-foreground text-sm">Redes, Servidores, Integración</p>
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
