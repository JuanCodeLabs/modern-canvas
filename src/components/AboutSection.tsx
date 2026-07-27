import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Music, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/translations";

export function AboutSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  return (
    <section id="sobre-mi" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <User className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                {t.about.title}
              </h2>
              <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
                {t.about.subtitle}
              </h2>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t.about.intro} <span className="text-foreground font-semibold">Juan Díaz</span>,{" "}
              {t.about.intro2}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t.about.education} <span className="text-foreground font-semibold">{t.about.degree}</span> {t.about.institution}
              <span className="text-foreground"> {t.about.skill}</span>.
              {t.about.current} <span className="text-foreground font-semibold">{t.about.currentDegree}</span>
              {t.about.university}
              {t.about.pursuit}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t.about.approach} <span className="text-foreground">{t.about.documentation}</span>,{" "}
              <span className="text-foreground">{t.about.organization}</span> {t.about.adaptability}
              <span className="text-foreground font-semibold"> {t.about.adapt}</span>.
              {t.about.values}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-display font-bold text-lg mb-2">{t.about.location}</h4>
              <p className="text-muted-foreground text-sm">{t.about.locationValue}</p>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300">
              <GraduationCap className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-display font-bold text-lg mb-2">{t.about.educationCard}</h4>
              <p className="text-muted-foreground text-sm">{t.about.educationValue}</p>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-display font-bold text-lg mb-2">{t.about.softSkills}</h4>
              <p className="text-muted-foreground text-sm">{t.about.softSkillsValue}</p>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-glow transition-all duration-300 bg-gradient-to-br from-primary/20 to-accent/20">
              <span className="text-4xl font-display font-bold gradient-text">5+</span>
              <h4 className="font-display font-bold text-lg mt-2">{t.about.years}</h4>
              <p className="text-muted-foreground text-sm">{t.about.yearsValue}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
