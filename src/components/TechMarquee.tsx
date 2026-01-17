import { motion } from "framer-motion";

const technologies = [
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "C#", icon: "C#" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "🔀" },
  { name: "Figma", icon: "🎨" },
  { name: "SQL", icon: "🗃️" },
  { name: "MongoDB", icon: "🍃" },
];

export function TechMarquee() {
  return (
    <section id="conocimientos" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-2">💻</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            Lenguajes y
          </h2>
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
            tecnologías aplicadas
          </h2>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex overflow-hidden">
          <div className="marquee flex gap-8 py-4">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-3 glass-card px-6 py-3 rounded-full whitespace-nowrap hover-glow transition-all duration-300"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
