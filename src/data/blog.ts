export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ankara-insaat-firmasi-secerken-nelere-dikkat-edilmeli",
    title: "Ankara'da İnşaat Firması Seçerken Nelere Dikkat Edilmeli?",
    excerpt:
      "Güvenilir bir inşaat firması seçimi, yatırımınızın geleceğini belirleyen en kritik adımdır. İşte dikkat etmeniz gereken 8 önemli kriter.",
    content: "",
    coverImage: "/images/blog/ankara-insaat.png",
    date: "2026-03-15",
    category: "Rehber",
    readTime: "6 dk",
  },
  {
    slug: "anahtar-teslim-insaat-sureci-nasil-ilerler",
    title: "Anahtar Teslim İnşaat Süreci Nasıl İlerler?",
    excerpt:
      "Anahtar teslim inşaat hizmeti, projenizin başından sonuna kadar tek elden yönetilmesi demektir. Süreç adım adım nasıl işler?",
    content: "",
    coverImage: "/images/blog/anahtar-teslim.jpg",
    date: "2026-03-08",
    category: "Bilgilendirme",
    readTime: "5 dk",
  },
  {
    slug: "muteahhit-firma-ile-calismanin-avantajlari",
    title: "Müteahhit Firma ile Çalışmanın Avantajları",
    excerpt:
      "Profesyonel bir müteahhit firma ile çalışmak, süreç yönetiminden maliyet kontrolüne kadar birçok avantaj sunar.",
    content: "",
    coverImage: "/images/blog/muteahhit.jpg",
    date: "2026-02-28",
    category: "Bilgilendirme",
    readTime: "4 dk",
  },
  {
    slug: "ankara-villa-insaati-yaptirmak-mantikli-mi",
    title: "Ankara'da Villa İnşaatı Yaptırmak Mantıklı mı?",
    excerpt:
      "Ankara'nın gelişen bölgelerinde villa yatırımı giderek popülerleşiyor. Peki bu yatırım ne kadar mantıklı?",
    content: "",
    coverImage: "/images/blog/villa.jpg",
    date: "2026-02-20",
    category: "Yatırım",
    readTime: "7 dk",
  },
  {
    slug: "kahramankazan-konut-yatirimi",
    title: "Kahramankazan Bölgesinde Konut Yatırımı",
    excerpt:
      "Ankara'nın en hızlı gelişen ilçelerinden Kahramankazan'da konut yatırımı yapmanın avantajlarını inceliyoruz.",
    content: "",
    coverImage: "/images/blog/kahramankazan.jpg",
    date: "2026-02-12",
    category: "Yatırım",
    readTime: "6 dk",
  },
  {
    slug: "insaat-projelerinde-kaliteyi-belirleyen-unsurlar",
    title: "İnşaat Projelerinde Kaliteyi Belirleyen Unsurlar",
    excerpt:
      "Bir inşaat projesinin kalitesini belirleyen temel unsurlar nelerdir? Malzeme seçiminden işçiliğe kadar her detay önemli.",
    content: "",
    coverImage: "/images/blog/kalite.jpg",
    date: "2026-02-05",
    category: "Teknik",
    readTime: "5 dk",
  },
];
