import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Operador Informático",
    company: "IBAR",
    period: "2021 - Presente",
    description: "Responsable de monitorear, gestionar, controlar, realizar integraciones, dar soporte y mantenimiento a dispositivos integrados en sistema BMS en área de Control Centralizado.",
  },
  {
    title: "Programador de Sistemas",
    company: "CHILE",
    period: "2018 - 2021",
    description: "Responsable de realizar integración, programación de funcionamiento y diseño UX/UI de distintos dispositivos en corrientes débiles integradas en plataforma workstation Building Operator de Schneider.",
  },
  {
    title: "Desarrollador Full Stack",
    company: "Freelance",
    period: "2017 - 2018",
    description: "Desarrollo de aplicaciones web y móviles para diversos clientes, implementando soluciones personalizadas con tecnologías modernas.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Experiencia
              </h2>
              <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
                profesional
              </h2>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary glow transform -translate-x-1/2" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                  <div className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-1">{exp.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{exp.company}</p>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
