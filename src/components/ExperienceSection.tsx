import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Operador de Control Centralizado",
    company: "Biomédica Ingeniería - Hospital Gustavo Fricke",
    period: "2025 - presente",
    description: "Gestión completa del sistema BMS hospitalario con plataforma EBO Schneider Electric. Supervisión integrada de HVAC, iluminación KNX, CCTV, control de accesos, FAS y medición de energía. Desarrollo de alarmas predictivas para detección de fallas mecánicas en VDF mediante análisis de baja frecuencia. Administración de servidor Linux (Ubuntu Server) con stack Apache2, MariaDB y SQL Server. Desarrollo de aplicaciones web con PHP y Python para automatización de procesos operativos.",
    technologies: ["EBO Schneider Electric", "Ubuntu Server", "Apache2", "MariaDB", "SQL Server", "PHP", "Python", "KNX", "BACnet", "Modbus"]
  },
  { 
    title: "Operador Informático BMS",
    company: "ISAR - Hospital Gustavo Fricke",
    period: "2021 - 2025",
    description: "Operación continua 24/7 de plataforma EBO Schneider Electric en entorno hospitalario crítico. Gestión de 600+ sensores y 37 controladores. Diseño e implementación de mejoras progresivas al sistema: nuevas alarmas, automatizaciones y lógicas de control. Construcción de sistema de registro de usuarios hospitalario con backend PHP. Automatización de tareas con Python y scripts Bash. Mantenimiento de servidores Linux en producción.",
    technologies: ["EBO Schneider Electric", "PHP", "Python", "Bash", "Ubuntu Server", "MySQL", "MariaDB", "KNX", "CCTV"]
  },
  {
    title: "Especialista Técnico en Automatización BMS / Junior Developer",
    company: "OHLA (Obrascon Huarte Lain)",
    period: "2019 - 2021",
    description: "Diseño e integración de interfaces gráficas HMI para sistemas BMS en JavaScript. Programación de variables, scripts y alarmas en plataforma EBO Schneider Electric. Configuración e integración de redes BACnet IP/MSTP, KNX y Modbus TCP/RTU. Commissioning y puesta en marcha de sistemas de automatización en edificios de nueva construcción. Elaboración de documentación técnica: planos, manuales de operación y protocolos.",
    technologies: ["JavaScript", "EBO Schneider Electric", "BACnet IP/MSTP", "KNX", "Modbus TCP/RTU", "AutoCAD", "HMI"]
  },
  {
    title: "Técnico en Automatización",
    company: "BAS",
    period: "2018 - 2021",
    description: "Instalación de sistemas eléctricos y electrónicos en edificios comerciales. Configuración e instalación de dispositivos de corrientes débiles en software BMS. Creación de interfaces de usuario para control y monitoreo de sistemas en plataforma Building Operator de Schneider. Desarrollo de habilidades iniciales en automatización industrial y programación de controladores.",
    technologies: ["Building Operator Schneider", "BMS", "Automatización Industrial", "Instalaciones Eléctricas", "UI/UX"]
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
                    <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                    {exp.technologies && (
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
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
