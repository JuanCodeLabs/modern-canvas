import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © 2024 Juan Díaz. Casi todos los derechos reservados.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/JuanCodeLabs"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass-card hover-glow transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-diaz-5804aa203/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass-card hover-glow transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contacto@juandiaz.dev"
            className="p-2 rounded-full glass-card hover-glow transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
