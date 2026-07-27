import { Github, Linkedin, Mail } from "lucide-react";
import { useSocialLinks } from '@/contexts/SocialLinksContext';
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/translations";

export function Footer() {
  const { github, linkedin, email } = useSocialLinks();
  const { language } = useLanguage();
  const t = useTranslation(language);
  return (
    <footer className="py-8 px-6 lg:px-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          {t.footer.copyright}
        </p>

        <div className="flex items-center gap-4">
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
          <a
            href={email}
            className="p-2 rounded-full glass-card hover-glow transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
