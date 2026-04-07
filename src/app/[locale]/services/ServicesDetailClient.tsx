"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { Locale } from "@/i18n";
import { usePathname } from "next/navigation";

export default function ServicesDetailClient({
  locale,
}: {
  locale: Locale;
}) {
  const t = useTranslations("services");
  const pathname = usePathname();

  // On extrait le slug depuis le chemin (ex: /fr/services/transport-vsl)
  const segments = pathname.split("/").filter(Boolean);
  const slug = segments[segments.length - 1] === "services" ? "" : segments[segments.length - 1];
  
  const service = SERVICES.find((s) => s.slug === slug);
  const prefix = locale === "ar" ? "" : `/${locale}`;

  // Si on est sur /services sans slug
  if (!slug) {
    return (
      <div className="bg-[#f8f8f8] section-padding min-h-[70vh]">
        <div className="container-page">
          <div className="bg-white rounded-[24px] p-8 md:p-12 card-shadow text-center">
            <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#222222] tracking-tight mb-8">
              {t("title")}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-start">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`${prefix}/services/${s.slug}`}
                  className="bg-[#f8f8f8] rounded-[16px] p-6 hover:card-shadow transition-shadow group border border-transparent hover:border-gray-200"
                >
                  <h3 className="text-[18px] font-bold text-[#222222] mb-2 group-hover:text-urgent transition-colors">
                    {locale === "fr" ? s.nameFr : locale === "en" ? s.nameEn : locale === "ma" ? s.nameMa : s.nameAr}
                  </h3>
                  <div className="text-urgent font-medium text-[14px]">En savoir plus &rarr;</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Si le service n'est pas trouvé
  if (!service) {
    return (
      <div className="bg-[#f8f8f8] section-padding min-h-screen">
        <div className="container-page">
          <div className="bg-white rounded-[24px] p-12 card-shadow text-center">
            <h1 className="text-[32px] font-bold text-dark mb-4">Service introuvable</h1>
            <Link href={`${prefix}/services`} className="text-urgent font-semibold">
              Retour aux services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Use servicePages namespace for detail content
  const st = useTranslations("servicePages");
  const serviceKey = service.slug;

  return (
    <div className="bg-[#f8f8f8] section-padding min-h-screen">
      <div className="container-page">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link href={`${prefix}/services`} className="text-[#6a6a6a] hover:text-dark font-medium transition-colors inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Tous les services
          </Link>
        </div>

        {/* Core Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[24px] p-8 md:p-12 card-shadow mb-8 border border-gray-100">
              <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#222222] tracking-tight mb-4">
                {st(`${serviceKey}.detailTitle`)}
              </h1>
              <p className="text-[18px] text-[#6a6a6a] leading-relaxed mb-8">
                {st(`${serviceKey}.detailText`)}
              </p>
              
              <h3 className="text-[22px] font-bold text-dark mb-6">Inclus dans ce service :</h3>
              <ul className="space-y-4">
                {(st.raw(`${serviceKey}.features`) as string[]).map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-6 h-6 rounded-full bg-medical/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-medical" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#222222] font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-[#1D3557] rounded-[24px] p-8 text-white sticky top-[100px] card-shadow">
              <h3 className="text-[20px] font-bold mb-4">Besoin de ce service ?</h3>
              <p className="text-white/80 mb-8 text-[15px] leading-relaxed">
                Notre équipe est disponible 24h/24 et 7j/7 pour intervenir rapidement à Casablanca et ses environs.
              </p>

              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="w-full btn-urgent text-center justify-center flex mb-3"
              >
                Appeler le {SITE_CONFIG.phone}
              </a>
              
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-6 rounded-[8px] flex items-center justify-center gap-2 transition-all card-shadow-hover active:scale-95"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
