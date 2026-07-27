import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="relative p-2 rounded-full glass-card hover-glow transition-all duration-300 font-bold text-sm w-10 h-10 flex items-center justify-center"
      aria-label="Toggle language"
    >
      {language === "es" ? "ES" : "EN"}
    </motion.button>
  );
}
