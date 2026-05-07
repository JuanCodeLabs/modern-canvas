import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, Download, FileText, ExternalLink, Phone, MapPin } from "lucide-react";
import { useSocialLinks } from "@/contexts/SocialLinksContext";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Replace with your actual CV file path or URL
const CV_PDF_URL = '/cv.pdf';
const EMAIL_ADDRESS = 'jdiazpalma1@gmail.com';

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { linkedin , github } = useSocialLinks();
  const { t } = useLanguage();
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
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(t.contact.emailSubject)}`;
  };

  const handleDownloadCV = () => {
    window.open('/CV_Juan_Diaz.pdf', '_blank');
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
                    <h3 className="font-display font-bold text-2xl md:text-3xl">{t.contact.title}</h3>
                    <p className="text-muted-foreground">{t.contact.subtitle}</p>
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
                {/* Download CV Card */}
                <button
                  onClick={handleDownloadCV}
                  className="group p-6 rounded-2xl glass-card border border-border/20 hover:border-primary/30 transition-all duration-300 hover-glow text-left"
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium text-lg mb-2">{t.contact.downloadCV}</h4>
                  <p className="text-muted-foreground text-sm">{t.contact.cvDescription}</p>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium">
                    <FileText className="w-4 h-4 mr-2" />
                    CV_Juan_Diaz.pdf
                  </div>
                </button>

                {/* Email Me Card */}
                <button
                  onClick={handleEmailClick}
                  className="group p-6 rounded-2xl glass-card border border-border/20 hover:border-primary/30 transition-all duration-300 hover-glow text-left"
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium text-lg mb-2">{t.contact.sendEmail}</h4>
                  <p className="text-muted-foreground text-sm">{t.contact.emailDescription}</p>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {EMAIL_ADDRESS}
                  </div>
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-border/20">
                <p className="text-muted-foreground text-sm text-center">
                  {t.contact.orContact}
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
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t.contact.sectionTitle}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.contact.sectionDescription}
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
            <h4 className="font-display font-bold mb-2">{t.contact.email}</h4>
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
            <h4 className="font-display font-bold mb-2">{t.contact.location}</h4>
            <p className="text-muted-foreground text-sm">Valparaíso, Chile</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
