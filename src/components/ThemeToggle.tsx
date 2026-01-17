import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("system");
    else setTheme("dark");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={cycleTheme}
      className="relative p-2 rounded-full glass-card hover-glow transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" && <Moon className="w-5 h-5 text-primary" />}
      {theme === "light" && <Sun className="w-5 h-5 text-primary" />}
      {theme === "system" && <Monitor className="w-5 h-5 text-primary" />}
    </motion.button>
  );
}
