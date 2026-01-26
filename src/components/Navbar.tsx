import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, MoreHorizontal, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useSocialLinks } from "@/contexts/SocialLinksContext";

interface NavbarProps {
  onContactClick: () => void;
}

const menuItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Trabajos", href: "#trabajos" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Conocimientos", href: "#conocimientos" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Contacto", href: "#contacto" },
];

export function Navbar({ onContactClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { linkedin, github } = useSocialLinks();

  // Handle ESC key press to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left - Available for work button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContactClick}
            className="glass-card px-4 py-2 rounded-full text-sm font-medium text-foreground hover-glow transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Disponible para trabajar
            </span>
          </motion.button>

          {/* Center - Navigation links */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-1 glass-card rounded-full px-2 py-1"
          >
            {["Trabajos", "Experiencia", "Contacto"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-primary/10"
              >
                {item}
              </button>
            ))}
          </motion.div>

          {/* Right - Social icons & menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <ThemeToggle />
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-card hover-glow transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-card hover-glow transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-full glass-card hover-glow transition-all duration-300"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Full screen menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-50 bg-background/95"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <div 
              className="h-full flex"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left side - Menu items */}
              <div className="flex-1 flex flex-col justify-center px-12 lg:px-24">
                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.href)}
                      className="block text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>
              </div>

              {/* Right side - Social icons */}
              <div className="w-24 md:w-32 flex flex-col items-center justify-center gap-6 border-l border-border/20">
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-3 rounded-full glass-card hover-glow"
                >
                  <X className="w-6 h-6" />
                </motion.button>
                <motion.a
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-card hover-glow"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-card hover-glow"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
