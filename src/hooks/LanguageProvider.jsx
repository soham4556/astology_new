import { useCallback, useEffect, useMemo, useState } from "react";
import { LANGUAGES, TRANSLATIONS } from "../utils/constants";
import { LanguageContext } from "./languageContext";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("astro_language");
    if (savedLanguage && TRANSLATIONS[savedLanguage]) {
      return savedLanguage;
    }
    return "hi";
  });

  const setAppLanguage = useCallback((nextLanguage) => {
    const resolvedLanguage = TRANSLATIONS[nextLanguage] ? nextLanguage : "hi";
    localStorage.setItem("astro_language", resolvedLanguage);
    setLanguage(resolvedLanguage);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language || "hi";
    }
  }, [language]);

  const value = useMemo(() => {
    const dictionary = TRANSLATIONS[language] || TRANSLATIONS.hi;

    return {
      language,
      availableLanguages: LANGUAGES,
      setLanguage: setAppLanguage,
      t: (key, fallback = "") =>
        dictionary[key] || TRANSLATIONS.en[key] || fallback,
    };
  }, [language, setAppLanguage]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

