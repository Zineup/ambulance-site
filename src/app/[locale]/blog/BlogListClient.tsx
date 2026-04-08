"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function BlogListClient() {
  const t = useTranslations("blog");
  
  // Mock data structure based on requirements
  const posts = [
    {
      id: "comment-appeler-ambulance-casablanca",
      image: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?q=80&w=800&auto=format&fit=crop",
      date: "12 Mars 2024",
      readTime: "5 min",
    },
    {
      id: "transport-medicalise-vs-ambulance-classique",
      image: "https://images.unsplash.com/photo-1538108149393-cefb6d0d9dd6?q=80&w=800&auto=format&fit=crop",
      date: "08 Fév 2024",
      readTime: "4 min",
    },
    {
      id: "premiers-gestes-secours-avant-ambulance",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
      date: "24 Jan 2024",
      readTime: "7 min",
    },
  ];

  return (
    <div className="bg-[#f8f8f8] section-padding min-h-screen">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-[32px] md:text-[48px] font-extrabold text-[#222222] tracking-tight mb-6">
            {t("title")}
          </h1>
          <p className="text-[#6a6a6a] text-[16px] md:text-[18px] leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="bg-white rounded-[20px] p-0 overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full bg-gray-200 overflow-hidden">
                <Image
                  src={post.image}
                  alt="Blog cover"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-[13px] text-[#6a6a6a] font-medium mb-4">
                  <span className="bg-[#f2f2f2] px-3 py-1 rounded-full text-[#1D3557]">{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-[20px] font-bold text-[#222222] mb-4 group-hover:text-[#E63946] transition-colors line-clamp-2 leading-tight tracking-tight">
                  {t(`${post.id}.title`)}
                </h2>
                <div className="mt-auto pt-4 flex items-center text-[#E63946] font-semibold text-[15px] group-hover:gap-2 transition-all">
                  {t("readMore")} <span className="text-[18px] ml-1">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
