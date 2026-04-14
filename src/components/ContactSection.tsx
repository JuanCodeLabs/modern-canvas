import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, Download, FileText, ExternalLink, Phone, MapPin, LucideIcon } from "lucide-react";
import { useSocialLinks } from "@/contexts/SocialLinksContext";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Configuración de enlaces - fácil de agregar nuevos
const CONTACT_LINKS = [
  {
    id: 'cv',
    title: 'Revisar CV',
    description: 'Obtén mi currículum en formato PDF',
    url: 'https://drive.google.com/file/d/1DmRSLpJgqelB7Rh8LU4usi9BHXmvSFwd/view?usp=sharing',
    icon: Download,
    subtitle: 'Curriculum',
    subtitleIcon: FileText,
    target: '_blank'
  },
  {
    id: 'email',
    title: 'Enviar correo',
    description: 'Contáctame directamente por email',
    url: 'mailto:jdiazpalma1@gmail.com?subject=Contacto%20desde%20el%20portfolio',
    icon: Mail,
    subtitle: 'jdiazpalma1@gmail.com',
    subtitleIcon: ExternalLink,
    target: '_self'
  }
];

const EMAIL_ADDRESS = 'jdiazpalma1@gmail.com';

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { linkedin , github } = useSocialLinks();
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleEmailClick = () => {
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=Contacto%20desde%20el%20portfolio`;
  };

  // Componente reutilizable para tarjetas de enlace
  const LinkCard = ({ link }: { link: typeof CONTACT_LINKS[0] }) => {
    const Icon = link.icon;
    const SubtitleIcon = link.subtitleIcon;
    
    return (
      <a
        href={link.url}
        target={link.target}
        rel={link.target === '_blank' ? 'noopener noreferrer' : ''}
        className="group p-6 rounded-2xl glass-card border border-border/20 hover:border-primary/30 transition-all duration-300 hover-glow text-left block"
      >
        <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h4 className="font-medium text-lg mb-2">{link.title}</h4>
        <p className="text-muted-foreground text-sm">{link.description}</p>
        <div className="mt-4 flex items-center text-primary text-sm font-medium">
          <SubtitleIcon className="w-4 h-4 mr-2" />
          {link.subtitle}
        </div>
      </a>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 overflow-auto"
          style={{ 
            backdropFilter: "blur(20px)", 
            backgroundColor: "hsl(var(--background) / 0.8)",
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto glow"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl">Contáctame</h3>
                    <p className="text-muted-foreground">Estoy disponible para trabajar</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full glass-card hover-glow"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CONTACT_LINKS.map((link) => (
                  <LinkCard key={link.id} link={link} />
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/20">
                <p className="text-muted-foreground text-sm text-center">
                  O contáctame a través de mis redes sociales
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-card hover-glow"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-card hover-glow"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ContactSection() {
  const { email } = useSocialLinks();
  return (
    <section id="contacto" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estoy disponible para nuevos proyectos y oportunidades. 
            No dudes en contactarme.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.a
            href={email}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-2xl text-center hover-glow transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-display font-bold mb-2">Email</h4>
            <p className="text-muted-foreground text-sm">jdiazpalma1@gmail.com</p>
          </motion.a>
{/* 
          <motion.a
            href="tel:+56912345678"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-2xl text-center hover-glow transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-display font-bold mb-2">Teléfono</h4>
            <p className="text-muted-foreground text-sm">+56 9 1234 5678</p>
          </motion.a> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 rounded-2xl text-center hover-glow transition-all duration-300"
          >
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-display font-bold mb-2">Ubicación</h4>
            <p className="text-muted-foreground text-sm">Valparaíso, Chile</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
