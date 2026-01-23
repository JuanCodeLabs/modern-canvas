import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Briefcase } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Noe Botes",
    description: "Plataforma de navegación y gestión de embarcaciones.",
    fullDescription: "Sistema completo de gestión para servicios de navegación marítima. Incluye reservas en tiempo real, gestión de flotas, y panel de administración con analíticas avanzadas.",
    image: "https://c.pxhere.com/photos/f5/6d/zachranari_inflatable_boat_ocean_swanage_bay-710973.jpg!d",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    liveUrl: "https://noebotes.vercel.app/",
  },
  {
    id: 2,
    title: "Tracelite",
    description: "Panel de control para visualización de equipos y generación de reportes.",
    fullDescription: "Dashboard interactivo con gráficos en tiempo real, KPIs personalizables y reportes automatizados. Integración con múltiples fuentes de datos.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["TypeScript", "Supabase", "Tailwind", "Chart.js", "React"],
    liveUrl: "https://tracelite.org/",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Tienda online con gestión de inventario.",
    fullDescription: "Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos, gestión de inventario y sistema de envíos integrado.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["Next.js", "Stripe", "Prisma", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="trabajos" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Trabajos
              </h2>
              <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
                realizados
              </h2>
            </div>
          </div>
          <p className="text-muted-foreground max-w-xl">
            Los trabajos que he realizado durante este tiempo son los siguientes.
            Presiona en cualquiera para más información.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-500 hover:scale-[1.02]">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-display font-bold text-xl text-foreground">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backdropFilter: "blur(20px)", background: "hsl(var(--background) / 0.8)" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto glow"
            >
              <div className="relative h-64">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full glass-card"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-3xl mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver proyecto
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full glass-card font-medium hover-glow transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
