import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["ar", "ma", "fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

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
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
