import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, X, MessageSquare, Phone, MapPin } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ backdropFilter: "blur(20px)", background: "hsl(var(--background) / 0.8)" }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card rounded-3xl overflow-hidden max-w-lg w-full glow"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl">Contáctame</h3>
                    <p className="text-muted-foreground text-sm">Estoy disponible para trabajar</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full glass-card hover-glow"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-transparent"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-transparent"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-transparent resize-none h-32"
                    placeholder="Tu mensaje..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors glow"
                >
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ContactSection() {
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

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.a
            href="mailto:contacto@juandiaz.dev"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-2xl text-center hover-glow transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-display font-bold mb-2">Email</h4>
            <p className="text-muted-foreground text-sm">contacto@juandiaz.dev</p>
          </motion.a>

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
          </motion.a>

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
