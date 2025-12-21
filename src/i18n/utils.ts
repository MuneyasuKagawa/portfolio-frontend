import en from "./en.json";
import ja from "./ja.json";

const translations = { en, ja } as const;

export type Locale = keyof typeof translations;

type NestedKeyOf<T, Prefix extends string = ""> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? NestedKeyOf<T[K], `${Prefix}${K}.`>
        : `${Prefix}${K}`;
    }[keyof T & string]
  : never;

export type TranslationKey = NestedKeyOf<typeof en>;

export function useTranslation(locale: Locale) {
  const t = (key: TranslationKey): string => {
    const keys = key.split(".");
    let value: unknown = translations[locale];

    for (const k of keys) {
      if (typeof value === "object" && value !== null) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return { t };
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, locale] = url.pathname.split("/");
  return locale === "ja" ? "ja" : "en";
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return locale === "ja" ? `/ja${cleanPath}` : cleanPath;
}

export const locales: Locale[] = ["en", "ja"];
export const defaultLocale: Locale = "en";
