"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { SITE_CONFIG, SERVICES, QUARTIERS_CASABLANCA } from "@/lib/constants";
import { Locale } from "@/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations("footer");
  const prefix = locale === "ar" ? "" : `/${locale}`;

  return (
    <footer className="bg-dark text-white/90 pt-16 md:pt-24 pb-8 border-t border-white/10">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand & Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-6 opacity-100">
              <div className="w-10 h-10 bg-urgent rounded-[10px] flex items-center justify-center text-white font-bold text-sm leading-none">
                CA
              </div>
              <span className="text-[20px] font-extrabold text-white leading-tight tracking-tight">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-white/70 mb-8 leading-[1.6] text-[15px]">
              {t("description")}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[16px] font-bold text-white mb-6 uppercase tracking-wider">{t("services")}</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`${prefix}/services`}
                    className="text-white/70 hover:text-white transition-colors text-[15px] inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-medical/50"></span>
                    Ambulance {locale === "en" ? "Service" : locale === "fr" ? "Service" : "خدمة"} - {s.slug.replace("-", " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="text-[16px] font-bold text-white mb-6 uppercase tracking-wider">{t("zones")}</h3>
            <ul className="space-y-3">
              {QUARTIERS_CASABLANCA.slice(0, 5).map((z: any) => (
                <li key={z.slug}>
                  <Link
                    href={`${prefix}/villes/${z.slug}`}
                    className="text-white/70 hover:text-white transition-colors text-[15px] inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-urgent/50"></span>
                    Ambulance {locale === "en" ? z.nameEn : locale === "fr" ? z.nameFr : locale === "ma" ? z.nameMa : z.nameAr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[16px] font-bold text-white mb-6 uppercase tracking-wider">{t("contact")}</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${SITE_CONFIG.phoneClean}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-urgent transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-white/50 text-[13px] mb-0.5">{t("phone")}</span>
                    <span className="text-[16px] font-medium text-white block group-hover:text-urgent transition-colors" dir="ltr">{SITE_CONFIG.phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-medical transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-white/50 text-[13px] mb-0.5">{t("email")}</span>
                    <span className="text-[15px] font-medium text-white block group-hover:text-medical transition-colors">{SITE_CONFIG.email}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-[14px]">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. {t("rights")}
          </p>
          <div className="text-[14px] text-white/50">
            <span className="text-urgent">Casablanca & Morocco</span> Ambulance 24h/24 7j/7
          </div>
        </div>
      </div>
    </footer>
  );
}
