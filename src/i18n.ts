import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["ma", "ar", "fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ma";

export const localeNames: Record<Locale, string> = {
  ma: "الدارجة",
  ar: "العربية",
  fr: "Français",
  en: "English",
};

export const rtlLocales: Locale[] = ["ma", "ar"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
