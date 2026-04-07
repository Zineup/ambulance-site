export const SITE_CONFIG = {
  name: "OK Ambulance",
  nameAr: "أوكي إسعاف",
  phone: "+212-696-629854",
  phoneClean: "+212696629854",
  whatsapp: "+212696629854",
  email: "contact@casaambulance.ma",
  url: "https://casaambulance.ma",
  address: {
    street: "Boulevard Mohamed V",
    city: "Casablanca",
    country: "Morocco",
    zip: "20000",
  },
  social: {
    facebook: "https://facebook.com/okambulancecasa",
    instagram: "https://instagram.com/okambulancecasa",
  },
};


export const SERVICES = [
  {
    slug: "transport-vsl",
    icon: "transport",
    nameAr: "النقل الصحي VSL",
    nameMa: "النقل الصحي VSL",
    nameFr: "Transport Sanitaire VSL",
    nameEn: "Medical Transport VSL",
  },
  {
    slug: "urgence-reanimation",
    icon: "emergency",
    nameAr: "إسعاف الطوارئ والإنعاش",
    nameMa: "إسعاف الطوارئ والإنعاش",
    nameFr: "Urgence et Réanimation",
    nameEn: "Emergency & Resuscitation",
  },
  {
    slug: "transport-dialyse",
    icon: "dialysis",
    nameAr: "نقل مرضى غسيل الكلى",
    nameMa: "نقل مرضى الديالـيز",
    nameFr: "Transport Dialyse",
    nameEn: "Dialysis Transport",
  },
  {
    slug: "rapatriement-sanitaire",
    icon: "rapatriement",
    nameAr: "الترحيل الصحي",
    nameMa: "الترحيل الصحي",
    nameFr: "Rapatriement Sanitaire",
    nameEn: "Medical Repatriation",
  },
  {
    slug: "transport-pmr",
    icon: "pmr",
    nameAr: "نقل ذوي الاحتياجات الخاصة",
    nameMa: "نقل ذوي الاحتياجات الخاصة",
    nameFr: "Transport PMR",
    nameEn: "Reduced Mobility Transport",
  },
] as const;

export type Service = (typeof SERVICES)[number];

export const QUARTIERS_CASABLANCA = [
  {
    slug: "maarif",
    nameAr: "المعاريف",
    nameMa: "المعاريف",
    nameFr: "Maarif",
    nameEn: "Maarif",
    landmark: { ar: "قرب مركز المعاريف التجاري", ma: "حدا مول المعاريف", fr: "Près du centre commercial Maarif", en: "Near Maarif Shopping Center" },
  },
  {
    slug: "bouskoura",
    nameAr: "بوسكورة",
    nameMa: "بوسكورة",
    nameFr: "Bouskoura",
    nameEn: "Bouskoura",
    landmark: { ar: "قرب غابة بوسكورة", ma: "حدا الغابة ديال بوسكورة", fr: "Près de la forêt de Bouskoura", en: "Near Bouskoura Forest" },
  },
  {
    slug: "mohammedia",
    nameAr: "المحمدية",
    nameMa: "المحمدية",
    nameFr: "Mohammedia",
    nameEn: "Mohammedia",
    landmark: { ar: "منطقة المحمدية الصناعية والساحلية", ma: "المحمدية - المنطقة الصناعية", fr: "Zone industrielle et côtière de Mohammedia", en: "Mohammedia industrial and coastal zone" },
  },
  {
    slug: "ain-diab",
    nameAr: "عين الذئاب",
    nameMa: "عين الذياب",
    nameFr: "Ain Diab",
    nameEn: "Ain Diab",
    landmark: { ar: "على طول كورنيش الدار البيضاء", ma: "على الكورنيش ديال كازا", fr: "Le long de la Corniche de Casablanca", en: "Along the Casablanca Corniche" },
  },
  {
    slug: "sidi-maarouf",
    nameAr: "سيدي معروف",
    nameMa: "سيدي معروف",
    nameFr: "Sidi Maarouf",
    nameEn: "Sidi Maarouf",
    landmark: { ar: "حي الأعمال سيدي معروف - قرب مارينا", ma: "سيدي معروف - حدا المارينا", fr: "Quartier d'affaires Sidi Maarouf - Près de Marina", en: "Sidi Maarouf business district - Near Marina" },
  },
  {
    slug: "anfa",
    nameAr: "أنفا",
    nameMa: "أنفا",
    nameFr: "Anfa",
    nameEn: "Anfa",
    landmark: { ar: "حي أنفا الراقي - قرب مسجد الحسن الثاني", ma: "أنفا - حدا جامع الحسن التاني", fr: "Quartier Anfa - Près de la Mosquée Hassan II", en: "Anfa district - Near Hassan II Mosque" },
  },
  {
    slug: "hay-hassani",
    nameAr: "الحي الحسني",
    nameMa: "الحي الحسني",
    nameFr: "Hay Hassani",
    nameEn: "Hay Hassani",
    landmark: { ar: "الحي الحسني - قرب مطار محمد الخامس", ma: "الحي الحسني - حدا لايروبور", fr: "Hay Hassani - Près de l'aéroport Mohammed V", en: "Hay Hassani - Near Mohammed V Airport" },
  },
  {
    slug: "ain-chock",
    nameAr: "عين الشق",
    nameMa: "عين الشق",
    nameFr: "Ain Chock",
    nameEn: "Ain Chock",
    landmark: { ar: "عين الشق - قرب المستشفى الجامعي ابن رشد", ma: "عين الشق - حدا المستشفى الجامعي", fr: "Ain Chock - Près du CHU Ibn Rochd", en: "Ain Chock - Near Ibn Rochd University Hospital" },
  },
] as const;

export type Quartier = (typeof QUARTIERS_CASABLANCA)[number];

export const CITIES = [
  {
    slug: "casablanca",
    nameAr: "الدار البيضاء",
    nameFr: "Casablanca",
    nameEn: "Casablanca",
    nameMa: "كازا",
    lat: 33.5731,
    lng: -7.5898,
    neighborhoods: [
      "المعاريف",
      "عين الشق",
      "أنفا",
      "سيدي بنور",
      "الحي المحمدي",
      "مرس السلطان",
    ],
  },
  {
    slug: "rabat",
    nameAr: "الرباط",
    nameFr: "Rabat",
    nameEn: "Rabat",
    nameMa: "الرباط",
    lat: 34.0209,
    lng: -6.8416,
    neighborhoods: ["أكدال", "حسان", "السويسي", "يعقوب المنصور", "المدينة القديمة"],
  },
  {
    slug: "marrakech",
    nameAr: "مراكش",
    nameFr: "Marrakech",
    nameEn: "Marrakech",
    nameMa: "مراكش",
    lat: 31.6295,
    lng: -7.9811,
    neighborhoods: ["جليز", "المدينة", "حي المسيرة", "النخيل", "المنارة"],
  },
  {
    slug: "fes",
    nameAr: "فاس",
    nameFr: "Fès",
    nameEn: "Fes",
    nameMa: "فاس",
    lat: 34.0331,
    lng: -5.0003,
    neighborhoods: ["فاس الجديد", "المدينة القديمة", "عين شقف", "سايس", "مرجان"],
  },
  {
    slug: "tanger",
    nameAr: "طنجة",
    nameFr: "Tanger",
    nameEn: "Tangier",
    nameMa: "طنجة",
    lat: 35.7595,
    lng: -5.834,
    neighborhoods: ["المدينة القديمة", "مرشان", "بني مكادة", "السواني", "حي البرانص"],
  },
] as const;

export type City = (typeof CITIES)[number];
