export interface Service {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  description: string;
  features: string[];
  process: string[];
  forWhom: string[];
}

export const services: Service[] = [
  {
    slug: "anahtar-teslim-insaat",
    name: "Anahtar Teslim İnşaat",
    icon: "Key",
    shortDescription:
      "Projelendirmeden teslimata kadar tüm süreçleri yönetiyoruz.",
    description:
      "Nevo İnşaat olarak anahtar teslim inşaat hizmetimizle, projenizin ilk tasarımından son rötuşlara kadar tüm süreçleri profesyonel ekibimizle yönetiyoruz. Tek muhatap kolaylığı ile zamandan ve maliyetten tasarruf edin.",
    features: [
      "Proje tasarımı ve mimari çözümler",
      "Ruhsat ve izin süreçleri",
      "Kaba inşaat",
      "İnce inşaat",
      "Mekanik ve elektrik tesisat",
      "İç mekan tasarımı ve uygulama",
      "Peyzaj düzenlemesi",
      "Teslim ve garanti",
    ],
    process: [
      "Arsa analizi ve fizibilite",
      "Mimari proje hazırlama",
      "Ruhsat ve izin süreçleri",
      "Temel ve kaba inşaat",
      "İnce inşaat uygulamaları",
      "Kontrol ve teslim",
    ],
    forWhom: [
      "Arsa sahipleri",
      "Yatırımcılar",
      "Konut yaptırmak isteyen bireyler",
      "Kurumsal firmalar",
    ],
  },
  {
    slug: "konut-projeleri",
    name: "Konut Projeleri",
    icon: "Building2",
    shortDescription:
      "Modern ve güvenli yaşam alanları inşa ediyoruz.",
    description:
      "Ailelerin güvenle yaşayabileceği, modern tasarımlı ve depreme dayanıklı konut projeleri geliştiriyoruz. Her projemizde kalite, konfor ve estetik bir arada sunulur.",
    features: [
      "Depreme dayanıklı betonarme yapı",
      "Modern mimari tasarım",
      "Sosyal donatı alanları",
      "Kapalı otopark",
      "Güvenlik sistemleri",
      "Enerji verimli yapı",
      "Yeşil alan düzenlemesi",
      "Çocuk oyun alanları",
    ],
    process: [
      "Arsa değerlendirmesi",
      "Proje geliştirme",
      "İnşaat süreci",
      "İç mekan tamamlama",
      "Altyapı ve çevre düzeni",
      "Teslim",
    ],
    forWhom: [
      "Konut arayan aileler",
      "Gayrimenkul yatırımcıları",
      "Müteahhitlik hizmeti arayanlar",
    ],
  },
  {
    slug: "villa-insaati",
    name: "Villa İnşaatı",
    icon: "Home",
    shortDescription:
      "Hayalinizdeki villayı anahtar teslim inşa ediyoruz.",
    description:
      "Kişiye özel tasarım, geniş yaşam alanları ve doğayla iç içe bir yaşam... Nevo İnşaat villa projelerinde lüks ve konforu bir araya getirerek hayalinizdeki evi gerçeğe dönüştürüyor.",
    features: [
      "Kişiye özel mimari tasarım",
      "Akıllı ev sistemleri",
      "Özel yüzme havuzu",
      "Yerden ısıtma",
      "Geniş bahçe ve peyzaj",
      "Premium malzeme kullanımı",
      "Güvenlik altyapısı",
      "Enerji verimli çözümler",
    ],
    process: [
      "İhtiyaç analizi",
      "Mimari proje tasarımı",
      "Malzeme seçimi",
      "Yapım süreci",
      "İç tasarım uygulama",
      "Peyzaj ve çevre düzeni",
      "Teslim",
    ],
    forWhom: [
      "Villa yaptırmak isteyenler",
      "Doğayla iç içe yaşam arayanlar",
      "Lüks konut yatırımcıları",
    ],
  },
  {
    slug: "ticari-yapi-insaati",
    name: "Ticari Yapı İnşaatı",
    icon: "Store",
    shortDescription:
      "İş merkezleri, mağazalar ve ticari alanlar inşa ediyoruz.",
    description:
      "İş dünyasının ihtiyaçlarına uygun, fonksiyonel ve modern ticari yapılar inşa ediyoruz. A sınıfı ofis binaları, alışveriş merkezleri ve ticaret merkezleri ile iş hayatınıza değer katıyoruz.",
    features: [
      "Modern cephe tasarımı",
      "Fonksiyonel iç mekan planlaması",
      "Akıllı bina teknolojisi",
      "Enerji verimli sistemler",
      "Geniş otopark alanı",
      "Erişilebilirlik standartları",
    ],
    process: [
      "İhtiyaç analizi ve planlama",
      "Mimari ve mühendislik projeleri",
      "Ruhsat süreçleri",
      "İnşaat uygulaması",
      "Mekanik ve elektrik tesisatı",
      "Teslim",
    ],
    forWhom: [
      "İşletme sahipleri",
      "Ticari yatırımcılar",
      "Kurumsal firmalar",
    ],
  },
  {
    slug: "taahhut-hizmetleri",
    name: "Taahhüt Hizmetleri",
    icon: "Handshake",
    shortDescription:
      "Profesyonel taahhüt hizmetleriyle projelerinizi tamamlıyoruz.",
    description:
      "Kamu ve özel sektör projelerinde taahhüt hizmetleri sunuyoruz. Yüksek kalite standartları, zamanında teslim ve profesyonel ekip yönetimiyle projelerinizin güvenilir çözüm ortağıyız.",
    features: [
      "Kamu ve özel sektör projeleri",
      "İş programı yönetimi",
      "Kalite kontrol süreçleri",
      "İş güvenliği standartları",
      "Tedarik zinciri yönetimi",
      "Profesyonel ekip koordinasyonu",
    ],
    process: [
      "İhale değerlendirmesi",
      "Fizibilite ve planlama",
      "Sözleşme ve başlangıç",
      "Uygulama ve takip",
      "Kalite kontrol",
      "Teslim ve kapanış",
    ],
    forWhom: [
      "Kamu kurumları",
      "Özel sektör firmaları",
      "Yatırım şirketleri",
    ],
  },
  {
    slug: "proje-gelistirme",
    name: "Proje Geliştirme",
    icon: "Compass",
    shortDescription:
      "Arsanızı değerli projelere dönüştürüyoruz.",
    description:
      "Arsa analizi, fizibilite çalışması ve proje geliştirme hizmetleriyle yatırımınızın maksimum getiri sağlamasına yardımcı oluyoruz. Doğru projeyi, doğru lokasyonda, doğru zamanda geliştiriyoruz.",
    features: [
      "Arsa analizi",
      "Fizibilite çalışması",
      "Proje modelleme",
      "Yatırım danışmanlığı",
      "Risk analizi",
      "İmar durumu değerlendirmesi",
    ],
    process: [
      "Arsa ve bölge analizi",
      "İmar durumu inceleme",
      "Fizibilite raporu",
      "Proje konsepti oluşturma",
      "Yatırım modelleme",
      "Uygulama planı",
    ],
    forWhom: [
      "Arsa sahipleri",
      "Gayrimenkul geliştiriciler",
      "Yatırımcılar",
    ],
  },
  {
    slug: "ozel-tasarim-evler",
    name: "Özel Tasarım Toplu & Tekli Evler",
    icon: "Layout",
    shortDescription:
      "Arsanıza ve yaşam stilinize uygun özel tasarımlı tekil veya toplu konutlar inşa ediyoruz.",
    description:
      "Size veya projenize özel olarak tasarlanmış butik konut konseptleri, kooperatif odaklı toplu konseptler veya bireysel tasarımlı müstakil evlerin inşasında tam destek sağlıyoruz. En modern mimari çizimler ve premium malzeme güvencesiyle uzun yıllar değerini koruyacak kalıcı eserler üretiyoruz.",
    features: [
      "Butik toplu konut siteleri",
      "Kişiye özel tekli taş ev veya betonarme ev",
      "Yerinde keşif ve harita planlama",
      "Geleceğe dönük zeki yatırımlar",
      "Yüksek enerji tasarruflu yapı",
      "Yeşil peyzaj ve sosyal alanlı projeler",
    ],
    process: [
      "Arazi ve harita alımı",
      "Tasarım konseptleri oluşturma",
      "Maliyet ve keşif planlaması",
      "Yapı ruhsat onayı",
      "İnşaat süreci ve kontrollü ilerleme",
      "Anahtar teslim",
    ],
    forWhom: [
      "Butik site yaptırmak isteyenler",
      "Müstakil yaşama geçmek isteyenler",
      "Arazi üzerinde değer yaratacak yatırımcılar",
    ],
  },
  {
    slug: "prefabrik-evler",
    name: "Prefabrik ve Özel Tasarım Evler",
    icon: "Warehouse",
    shortDescription:
      "Modern, hızlı kurulan ve yüksek dayanıklı yapılı prefabrik ve çelik ev çözümleri.",
    description:
      "Kısa sürede güvenle yerleşebileceğiniz, yalıtımı güçlü, yenilikçi çelik konstrüksiyon ve lüks çelik/prefabrik tasarımlı ev modelleri sunuyoruz. Uzun ömürlü ve uygun maliyetli yapı teknolojisini, Nevo İnşaat kalitesiyle harmanlayarak topraklarınızı değerlendiriyoruz.",
    features: [
      "Depreme son derce dayanıklı çelik destekli yapı",
      "Isı, su ve ses yalıtımında üst düzey konfor",
      "3-4 kat daha hızlı kurulum garantisi",
      "Maliyeti düşük ancak lüks görünümlü cepheler",
      "Taşınabilir veya sabit lüks sistemler",
      "1. Sınıf T.S.E onaylı üretim",
    ],
    process: [
      "Mekan ve model seçimi",
      "Zemin betonu ve altyapı",
      "Fabrika ortamında milimetrik üretim",
      "Arazide montaj ve cephe kaplama",
      "İnce işçilik (elektrik, su, boya)",
      "Kullanıma hazır teslim",
    ],
    forWhom: [
      "Hızlı ev isteyenler",
      "Tarla/Bağ sahipleri",
      "Bütçe dostu ama kaliteli ve modern ev arayanlar",
    ],
  },
];
