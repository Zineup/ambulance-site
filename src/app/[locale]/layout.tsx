import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { locales, rtlLocales, type Locale } from "@/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Nunito, Noto_Sans_Arabic } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "@/app/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "google": "notranslate",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();

  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  const isRtl = rtlLocales.includes(locale as Locale);

  return (
    <html lang={locale === "ar" ? "ar" : locale === "ma" ? "ar-MA" : locale} dir={isRtl ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col ${nunito.variable} ${arabic.variable} font-sans`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header locale={locale as Locale} />
            <main className="flex-1">{children}</main>
            <Footer locale={locale as Locale} />
            <FloatingCTA />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
