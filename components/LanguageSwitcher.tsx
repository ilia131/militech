
"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/i18n/useLanguage";

export default function LanguageSwitcher() {
  const { locale, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={t.nav.switchLanguage}
      title={t.nav.switchLanguage}
    >
      <Languages size={16} aria-hidden="true" />
      <span>{locale === "en" ? "فارسی" : "English"}</span>
    </button>
  );
}
