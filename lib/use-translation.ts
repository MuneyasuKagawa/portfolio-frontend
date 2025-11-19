import { useAtom } from "jotai";
import enTranslations from "../locales/en.json";
import jaTranslations from "../locales/ja.json";
import { languageAtom } from "./atoms";

const translations = {
  en: enTranslations,
  ja: jaTranslations,
};

export function useTranslation() {
  const [language] = useAtom(languageAtom);

  const t = (key: string): string => {
    const keys = key.split(".");
    // Force English for now
    const currentLanguage = "en";
    let value: unknown = translations[currentLanguage];

    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }

    return typeof value === "string" ? value : key;
  };

  return { t, language };
}
