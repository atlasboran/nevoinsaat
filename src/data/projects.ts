export interface Project {
  slug: string;
  name: string;
  location: string;
  category: string;
  status: "devam-ediyor" | "tamamlandi";
  description: string;
  shortDescription: string;
  coverImage: string;
  gallery: string[];
  area: string;
  units: string;
  year: string;
  features: string[];
}

export const projects: Project[] = [
  {
    slug: "kirikkale-yahsihan-konutlari",
    name: "Yahşihan Yaşam Evleri",
    location: "Yahşihan, Kırıkkale",
    category: "Konut Projesi",
    status: "tamamlandi",
    description:
      "Kırıkkale Yahşihan'da yükselen, modern yaşam standartlarını yeniden tanımladığımız konut projemiz. Estetik mimarisi ve üstün malzeme kalitesiyle hem şehrin silüetine renk katıyor hem de sakinlerine huzurlu bir yaşam vadediyor.",
    shortDescription:
      "Kırıkkale Yahşihan'da konumlanan estetik ve konforlu yeni yaşam alanı.",
    coverImage: "/images/projects/kirikkale/yahsihan.jpeg",
    gallery: [
      "/images/projects/kirikkale/yahsihan.jpeg",
      "/images/projects/kirikkale/yahsihan1.jpeg",
      "/images/projects/kirikkale/yahsihan2.jpeg",
    ],
    area: "Belirtilmedi",
    units: "Çoklu Konut",
    year: "Tamamlandı",
    features: [
      "Modern mimari tasarım",
      "Kaliteli yapı vizyonu",
      "Merkezi konum avantajı",
      "Geniş peyzaj ve sosyal alanlar",
    ],
  },
  {
    slug: "prefabrik-evler",
    name: "Prefabrik ve Özel Tasarım Evler",
    location: "Çeşitli Lokasyonlar",
    category: "Özel Projeler",
    status: "devam-ediyor",
    description:
      "Devam eden ve tamamlanan prefabrik benzeri ve özel tasarım ev projelerimiz. Hızlı kurulum, yüksek yalıtım ve çevreye duyarlı modern mimari ile dikkat çeken özel konut çözümleri.",
    shortDescription:
      "Prefabrik ve modern mimari tasarımlı özel ev projeleri.",
    coverImage: "/images/projects/prefabrik-evler/Devam eden ve tamamlanan proje 1.jpg",
    gallery: [
      "/images/projects/prefabrik-evler/Devam eden ve tamamlanan proje 1.jpg",
      "/images/projects/prefabrik-evler/Devam eden ve tamamlanan proje 2.jpg",
      "/images/projects/prefabrik-evler/Devam eden ve tamamlanan proje 3.jpg",
      "/images/projects/prefabrik-evler/Devam eden ve tamamlanan proje 4.jpg",
      "/images/projects/prefabrik-evler/Devam eden ve tamamlanan proje 5.jpg",
      "/images/projects/prefabrik-evler/Devam eden ve tamamlanan proje 6.jpg",
      "/images/projects/prefabrik-evler/Devam eden ve tamamlanan proje 7.jpg",
      "/images/projects/prefabrik-evler/Devam eden ve tamamlanan proje 8.jpg",
    ],
    area: "Çeşitli",
    units: "Özel Tasarım Konutlar",
    year: "Devam Ediyor / Tamamlandı",
    features: [
      "Hızlı ve pratik kurulum",
      "Modern prefabrik mimarisi",
      "Yüksek yalıtım değerleri",
      "Kişiye özel tasarım",
    ],
  },
  {
    slug: "toplu-tekli-evler",
    name: "Özel Tasarım Toplu & Tekli Evler",
    location: "Çeşitli Lokasyonlar",
    category: "Özel Projeler",
    status: "devam-ediyor",
    description:
      "Müşterilerimizin özel taleplerine göre tasarlanan ve inşa edilen, devam eden ve tamamlanan karışık toplu ve tekli ev projelerimiz. Prefabrik görünümlü modern tasarımlar ve özel yapılarla farklı yaşam alanı çözümleri sunuyoruz.",
    shortDescription:
      "Özel tasarımlı toplu ve tekli konut projeleri.",
    coverImage: "/images/projects/toplu-tekli/Toplu tekli evler 1.jpg",
    gallery: [
      "/images/projects/toplu-tekli/Toplu tekli evler 1.jpg",
      "/images/projects/toplu-tekli/Toplu tekli evler 2.jpg",
      "/images/projects/toplu-tekli/Toplu tekli evler 3.jpg",
      "/images/projects/toplu-tekli/Toplu tekli evler 4.jpg",
      "/images/projects/toplu-tekli/Toplu tekli evler 5.jpg",
      "/images/projects/toplu-tekli/Toplu tekli evler 6.jpg",
      "/images/projects/toplu-tekli/Toplu tekli evler 7.jpg",
      "/images/projects/toplu-tekli/Toplu tekli evler 8.jpg",
    ],
    area: "Çeşitli",
    units: "Çoklu ve Tekli Özel Yapılar",
    year: "Devam Ediyor / Tamamlananlar",
    features: [
      "Özel tasarım mimari",
      "Kişiselleştirilebilir alanlar",
      "Modern iç ve dış tasarım",
      "Farklı estetik yapılar",
    ],
  },
];

export const completedProjects: Project[] = [
  {
    slug: "hatay-projesi",
    name: "Hatay Konut Projesi",
    location: "Hatay",
    category: "Konut Projesi",
    status: "tamamlandi",
    description:
      "Hatay'da inşa edilen, yüksek güvenlikli ve modern konut projemiz. Bölge halkının yeni yaşam alanı olan projemiz tüm üstün donatılarıyla tamamlanmış ve teslim edilmiştir.",
    shortDescription:
      "Hatay'da inşa edilen deprem güvenli, modern konut projemiz.",
    coverImage: "/images/projects/hatay/Hatay inşaat 1.jpg",
    gallery: [
      "/images/projects/hatay/Hatay inşaat 1.jpg",
      "/images/projects/hatay/Hatay inşaat 2.jpg",
      "/images/projects/hatay/Hatay inşaat 3.jpg",
      "/images/projects/hatay/Hatay inşaat 4.jpg",
      "/images/projects/hatay/Hatay inşaat 5.jpg",
      "/images/projects/hatay/Hatay inşaat 6.jpg",
      "/images/projects/hatay/Hatay inşaat 7.jpg",
      "/images/projects/hatay/Hatay inşaat 8.jpg",
      "/images/projects/hatay/Hatay inşaat 9.jpg",
      "/images/projects/hatay/Hatay inşaat 10.jpg",
      "/images/projects/hatay/Hatay inşaat 11.jpg",
      "/images/projects/hatay/Hatay inşaat 12.jpg",
      "/images/projects/hatay/Hatay inşaat 13.jpg",
      "/images/projects/hatay/Hatay inşaat 14.jpg",
    ],
    area: "Belirtilmedi",
    units: "Çoklu Konut",
    year: "Tamamlandı",
    features: [
      "Depreme tam dayanıklılık",
      "Modern yaşam alanları",
      "Hızlı ve güvenli inşa süreci",
      "Geniş sosyal donatılar",
    ],
  },
  {
    slug: "pendik-hastanesi",
    name: "Pendik Hastanesi",
    location: "Pendik, İstanbul",
    category: "Sağlık Projesi (İş Ortaklığı)",
    status: "tamamlandi",
    description:
      "İş ortaklarımız ile birlikte tamamladığımız İstanbul Pendik 400 Yataklı Eğitim ve Araştırma Hastanesi projesi, yüksek mühendislik standartları taşıyan devasa bir sağlık kompleksidir. Bölgenin sağlık ihtiyaçlarına modern altyapısı ile cevap vermektedir.",
    shortDescription:
      "İş ortaklığı ile tamamlanan Pendik 400 Yataklı Eğitim ve Araştırma Hastanesi.",
    coverImage: "/images/projects/pendik-hastanesi/Pendik Hastanesi-1.jpeg",
    gallery: [
      "/images/projects/pendik-hastanesi/Pendik Hastanesi-1.jpeg",
      "/images/projects/pendik-hastanesi/Pendik Hastanesi-2.jpeg",
      "/images/projects/pendik-hastanesi/Pendik Hastanesi-3.jpeg",
      "/images/projects/pendik-hastanesi/Pendik Hastanesi-5.jpeg",
      "/images/projects/pendik-hastanesi/Pendik Hastanesi-6.jpeg",
      "/images/projects/pendik-hastanesi/Pendik Hastanesi-7.jpeg",
      "/images/projects/pendik-hastanesi/Pendik Hastanesi-8.jpeg",
      "/images/projects/pendik-hastanesi/Pendik Hastanesi-9.jpeg",
      "/images/projects/pendik-hastanesi/Pendik Hastanesi-10.jpeg",
    ],
    area: "Hastane",
    units: "400 Yataklı",
    year: "Tamamlandı",
    features: [
      "İş Ortaklığı Projesi",
      "Eğitim ve Araştırma Hastanesi",
      "Tam Teşekküllü Sağlık Kompleksi",
      "Yüksek standartlı yapı",
    ],
  },
  {
    slug: "osmaniye-projesi",
    name: "Osmaniye Projesi",
    location: "Osmaniye",
    category: "Konut Projesi",
    status: "tamamlandi",
    description:
      "Osmaniye'de tamamlanan yüksek standartlı projemiz, şık tasarımı ve kaliteli malzemeleriyle dikkat çekmektedir. Ferah iç mekanları ve modern yaşam standartlarıyla bölgeye değer katan bir yapıdır.",
    shortDescription:
      "Osmaniye'de kaliteli imalat ve modern tasarımla tamamlanan projemiz.",
    coverImage: "/images/projects/osmaniye/osmaniye (1).jpg",
    gallery: [
      "/images/projects/osmaniye/osmaniye (1).jpg",
      "/images/projects/osmaniye/osmaniye (2).jpg",
      "/images/projects/osmaniye/osmaniye (3).jpg",
      "/images/projects/osmaniye/osmaniye (4).jpg",
      "/images/projects/osmaniye/osmaniye (5).jpg",
      "/images/projects/osmaniye/osmaniye (6).jpg",
      "/images/projects/osmaniye/osmaniye (7).jpg",
      "/images/projects/osmaniye/osmaniye (8).jpg",
      "/images/projects/osmaniye/osmaniye (9).jpg",
      "/images/projects/osmaniye/osmaniye (10).jpg",
      "/images/projects/osmaniye/osmaniye (11).jpg",
      "/images/projects/osmaniye/osmaniye (12).jpg",
      "/images/projects/osmaniye/osmaniye (13).jpg",
      "/images/projects/osmaniye/osmaniye (14).jpg",
      "/images/projects/osmaniye/osmaniye (15).jpg",
      "/images/projects/osmaniye/osmaniye (16).jpg",
      "/images/projects/osmaniye/osmaniye (17).jpg",
      "/images/projects/osmaniye/osmaniye (18).jpg",
    ],
    area: "Çoklu Konut",
    units: "",
    year: "2024",
    features: [
      "Modern mimari",
      "Kaliteli malzeme ve işçilik",
      "Ferah iç mekanlar",
      "Geniş peyzaj ve çevre düzeni",
    ],
  },
];
