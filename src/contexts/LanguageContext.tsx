import { createContext, useContext, useEffect, useState } from "react";

type Language = "es" | "en";

type LanguageProviderProps = {
  children: React.ReactNode;
  storageKey?: string;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const detectLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  // es, es-ES, es-AR, es-MX, etc. → español
  if (browserLang.startsWith('es')) {
    return 'es';
  }
  // Resto → inglés
  return 'en';
};

const initialState: LanguageProviderState = {
  language: "es",
  setLanguage: () => null,
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  storageKey = "portfolio-language",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem(storageKey) as Language | null;
    if (stored) return stored;
    return detectLanguage();
  });

  const value = {
    language,
    setLanguage: (lang: Language) => {
      localStorage.setItem(storageKey, lang);
      setLanguage(lang);
    },
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};
