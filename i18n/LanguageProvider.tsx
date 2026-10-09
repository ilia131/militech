
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { translations, type Locale } from "./translations";

type LanguageContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: (typeof translations)[Locale];
  setLocale: (locale: Locale) => void;
  toggleLanguage: () => void;
};

const LanguageContext =
  createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("militech-locale");

      if (saved === "fa" || saved === "en") {
        setLocaleState(saved);
      }
    } catch {
      // The app still works if localStorage is unavailable.
    }
  }, []);

  const dir = locale === "fa" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;

    try {
      window.localStorage.setItem("militech-locale", locale);
    } catch {
      // Ignore storage restrictions.
    }
  }, [locale, dir]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLocaleState((current) => current === "en" ? "fa" : "en");
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        dir,
        t: translations[locale],
        setLocale,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}
