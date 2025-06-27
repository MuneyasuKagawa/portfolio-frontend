import { useAtom } from "jotai";
import { languageAtom } from "./atoms";
import enTranslations from "../locales/en.json";
import jaTranslations from "../locales/ja.json";

const translations = {
  en: enTranslations,
  ja: jaTranslations,
};

export function useTranslation() {
  const [language] = useAtom(languageAtom);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations[language];

    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }

    return typeof value === "string" ? value : key;
  };

  return { t, language };
}
