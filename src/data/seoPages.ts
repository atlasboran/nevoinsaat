export interface SeoPage {
  slug: string;
  city: string;
  district: string;
  service: string;
  title: string;
  description: string;
  h1: string;
  introText: string;
  serviceText: string;
  whyNevo: string;
  localExpertise: string;
  faqs: { question: string; answer: string }[];
}

export const seoPages: SeoPage[] = [
  {
    slug: "ankara-insaat-firmasi",
    city: "Ankara",
    district: "",
    service: "İnşaat Firması",
    title: "Ankara İnşaat Firması | Nevo İnşaat",
    description:
      "Ankara'da profesyonel inşaat, proje geliştirme ve anahtar teslim yapı hizmetleri sunan Nevo İnşaat ile kaliteli çözümler keşfedin.",
    h1: "Ankara İnşaat Firması",
    introText:
      "Ankara'da güvenilir, profesyonel ve kaliteli inşaat hizmetleri arıyorsanız, Nevo İnşaat sizin için en doğru adrestir. Yılların tecrübesi, güçlü mühendislik kadrosu ve tamamlanmış referans projeleriyle Ankara'nın önde gelen inşaat firmalarından biri olan Nevo İnşaat, her projede kalite ve güveni ön planda tutar.",
    serviceText:
      "Konut projelerinden ticari yapılara, villa inşaatından anahtar teslim çözümlere kadar geniş bir hizmet yelpazesi sunuyoruz. Her projemizde depreme dayanıklı yapı standartlarını, modern mimarı anlayışı ve enerji verimli çözümleri bir arada sunarak yaşam alanlarınızı geleceğe hazırlıyoruz.",
    whyNevo:
      "Nevo İnşaat, tamamlanan projeler, memnun müşteriler ve sürdürülebilir büyüme stratejisiyle sektörde güvenilir bir marka haline gelmiştir. Zamanında teslim, kaliteli işçilik ve şeffaf iletişim anlayışımızla projelerinizin güçlü çözüm ortağıyız.",
    localExpertise:
      "Ankara ve çevre ilçelerde geniş bir proje portföyüne sahip olan Nevo İnşaat, bölgenin imar yapısını, zemin koşullarını ve gayrimenkul dinamiklerini yakından tanır. Bu bölgesel uzmanlık, projelerinizin her aşamasında doğru kararların alınmasını sağlar.",
    faqs: [
      {
        question: "Ankara'da inşaat firması nasıl seçilir?",
        answer:
          "Güvenilir bir inşaat firması seçerken tamamlanmış projelere, referanslara, firma deneyimine ve kalite standartlarına dikkat etmelisiniz. Nevo İnşaat, tüm bu kriterlerde sektörde öne çıkmaktadır.",
      },
      {
        question: "Nevo İnşaat hangi bölgelerde hizmet veriyor?",
        answer:
          "Nevo İnşaat başta Ankara merkez ve çevre ilçeler olmak üzere, Kahramankazan, Pursaklar, Yenimahalle ve çevre bölgelerde aktif olarak hizmet vermektedir.",
      },
      {
        question: "Anahtar teslim inşaat hizmeti sunuyor musunuz?",
        answer:
          "Evet, projelerinizin tasarımından teslimatına kadar tüm süreçleri tek elden yönettiğimiz anahtar teslim inşaat hizmeti sunuyoruz.",
      },
    ],
  },
  {
    slug: "kahramankazan-insaat-firmasi",
    city: "Ankara",
    district: "Kahramankazan",
    service: "İnşaat Firması",
    title: "Kahramankazan İnşaat Firması | Nevo İnşaat",
    description:
      "Kahramankazan bölgesinde güvenilir, profesyonel ve modern inşaat çözümleri için Nevo İnşaat yanınızda.",
    h1: "Kahramankazan İnşaat Firması",
    introText:
      "Kahramankazan'da güvenilir bir inşaat firması mı arıyorsunuz? Nevo İnşaat, Kahramankazan'ın kalbinde konumlanan merkez ofisiyle bölgenin en deneyimli inşaat firmalarından biridir. Yerel uzmanlığımız ve güçlü referanslarımızla projelerinize değer katıyoruz.",
    serviceText:
      "Kahramankazan'da konut projeleri, villa inşaatı, ticari yapı ve anahtar teslim inşaat hizmetleri sunuyoruz. Bölgenin gelişen yapısına uygun, modern ve depreme dayanıklı yapılar inşa ediyoruz.",
    whyNevo:
      "Kahramankazan'da birçok başarılı projeye imza atan Nevo İnşaat, bölgedeki güçlü referansları ve kaliteli işçiliğiyle tanınmaktadır. Yerel bilgi birikimimiz ve profesyonel ekibimizle projeleriniz güvende.",
    localExpertise:
      "Merkez ofisimizin Kahramankazan'da bulunması, bölgeye olan hakimiyetimizin en büyük göstergesidir. İmar planlarını, zemin yapısını ve bölgenin gayrimenkul potansiyelini en iyi bilen firmalardan biriyiz.",
    faqs: [
      {
        question: "Kahramankazan'da inşaat yaptırmak mantıklı mı?",
        answer:
          "Kahramankazan, Ankara'nın en hızlı gelişen ilçelerinden biridir. Artan nüfus, gelişen altyapı ve yeni ulaşım projeleriyle bölgede inşaat yatırımı mantıklı bir tercihtir.",
      },
      {
        question: "Nevo İnşaat Kahramankazan'da hangi projeleri tamamladı?",
        answer:
          "Kazan Park Evleri, Saray Ticaret Merkezi ve Kazan Panorama Evleri gibi başarılı projelerimiz Kahramankazan'daki referanslarımızdan bazılarıdır.",
      },
      {
        question: "Kahramankazan'da arsa değerlendirmesi yapıyor musunuz?",
        answer:
          "Evet, Kahramankazan ve çevre bölgelerde arsa analizi, imar durumu inceleme ve fizibilite çalışması hizmetleri sunuyoruz.",
      },
    ],
  },
  {
    slug: "ankara-muteahhit-firmasi",
    city: "Ankara",
    district: "",
    service: "Müteahhit Firma",
    title: "Ankara Müteahhit Firması | Nevo İnşaat",
    description:
      "Ankara'da güvenilir müteahhitlik hizmetleri için Nevo İnşaat. Profesyonel ekip, zamanında teslim ve kaliteli işçilik.",
    h1: "Ankara Müteahhit Firması",
    introText:
      "Ankara'da güvenilir bir müteahhit firma arıyorsanız, Nevo İnşaat'ın profesyonel müteahhitlik hizmetleriyle tanışın. Yılların deneyimi, eksiksiz ekip kadrosu ve kaliteli malzeme kullanımıyla projelerinizi zamanında ve bütçeye uygun şekilde tamamlıyoruz.",
    serviceText:
      "Konut, ticari ve endüstriyel yapı projelerinde profesyonel müteahhitlik hizmetleri sunuyoruz. Projelendirme, ruhsat, inşaat ve teslim süreçlerinin tamamını titizlikle yönetiyoruz.",
    whyNevo:
      "Nevo İnşaat olarak müteahhitlik hizmetlerimizde şeffaflık, kalite ve güvenilirlik temel ilkelerimizdir. Tamamladığımız projeler ve memnun müşterilerimiz, sunduğumuz hizmetin kalitesinin en güçlü kanıtıdır.",
    localExpertise:
      "Ankara'nın farklı ilçelerinde hazırladığımız ve teslim ettiğimiz projelerle, şehrin imar yapısını ve bölgesel dinamiklerini yakından biliyoruz.",
    faqs: [
      {
        question: "Müteahhit firma seçerken nelere dikkat edilmeli?",
        answer:
          "Referanslar, tamamlanan projeler, malzeme kalitesi, sözleşme şeffaflığı ve zamanında teslim performansı en önemli kriterlerdir.",
      },
      {
        question: "Nevo İnşaat müteahhitlik garantisi veriyor mu?",
        answer:
          "Evet, tüm projelerimizde yapı garantisi sunuyor ve teslim sonrası destek sağlıyoruz.",
      },
    ],
  },
  {
    slug: "ankara-anahtar-teslim-insaat",
    city: "Ankara",
    district: "",
    service: "Anahtar Teslim İnşaat",
    title: "Ankara Anahtar Teslim İnşaat | Nevo İnşaat",
    description:
      "Ankara'da anahtar teslim inşaat hizmeti. Projeden teslimata kadar tek elden profesyonel çözümler.",
    h1: "Ankara Anahtar Teslim İnşaat",
    introText:
      "Projelerinizi baştan sona tek elden yönetmek mi istiyorsunuz? Nevo İnşaat'ın Ankara'daki anahtar teslim inşaat hizmetiyle, mimari tasarımdan inşaat sürecine, iç mekandan peyzaja kadar her aşama profesyonel ekibimiz tarafından yürütülür.",
    serviceText:
      "Anahtar teslim hizmetimiz kapsamında arsa analizi, proje geliştirme, ruhsat süreçleri, inşaat, iç tasarım ve teslim süreçlerinin tamamını üstleniyoruz.",
    whyNevo:
      "Tek muhatap avantajı, maliyet kontrolü ve profesyonel süreç yönetimiyle anahtar teslim projelerinizde güvenilir çözüm ortağınız oluyoruz.",
    localExpertise:
      "Ankara'da başarıyla tamamladığımız anahtar teslim projeler, bu alandaki uzmanlığımızın somut göstergesidir.",
    faqs: [
      {
        question: "Anahtar teslim inşaat ne kadar sürer?",
        answer:
          "Proje büyüklüğüne göre değişmekle birlikte, standart bir konut projesinde süreç genellikle 12-18 ay arasında tamamlanır.",
      },
      {
        question: "Anahtar teslim inşaatta maliyet nasıl belirlenir?",
        answer:
          "Projenin büyüklüğü, kullanılacak malzemeler, lokasyon ve istenilen özellikler doğrultusunda detaylı bir maliyet analizi hazırlanır.",
      },
    ],
  },
  {
    slug: "ankara-villa-insaati",
    city: "Ankara",
    district: "",
    service: "Villa İnşaatı",
    title: "Ankara Villa İnşaatı | Nevo İnşaat",
    description:
      "Ankara'da kişiye özel villa inşaatı. Lüks tasarım, kaliteli malzeme ve anahtar teslim çözümler.",
    h1: "Ankara Villa İnşaatı",
    introText:
      "Ankara'da hayalinizdeki villayı inşa etmek istiyorsanız, Nevo İnşaat'ın villa inşaat hizmetleriyle tanışın. Kişiye özel mimari tasarım, premium malzeme seçimi ve anahtar teslim uygulama ile lüks yaşam alanınızı gerçeğe dönüştürüyoruz.",
    serviceText:
      "Villa projelerimizde akıllı ev teknolojileri, yerden ısıtma, özel havuz, geniş bahçe ve peyzaj düzenlemesi gibi premium özellikler sunuyoruz.",
    whyNevo:
      "Villa inşaatı uzmanlığımızla, her detayı müşterilerimizin beklentilerine göre tasarlıyor ve uyguluyoruz. Kalite ve estetiği bir arada sunuyoruz.",
    localExpertise:
      "Ankara'nın doğa ile iç içe bölgelerinde gerçekleştirdiğimiz villa projeleriyle bölgeye hakimiyetimizi kanıtlıyoruz.",
    faqs: [
      {
        question: "Ankara'da villa yaptırmak ne kadara mal olur?",
        answer:
          "Villa maliyeti, arsa konumu, büyüklük, tasarım ve malzeme seçimine göre değişir. Detaylı bilgi için ücretsiz ön görüşme hizmeti sunuyoruz.",
      },
      {
        question: "Villa projelerinde özel tasarım yapılıyor mu?",
        answer:
          "Evet, her villa projemiz müşterilerimizin ihtiyaç ve beklentileriyle uyumlu, kişiye özel olarak tasarlanır.",
      },
    ],
  },
  {
    slug: "ankara-konut-projesi",
    city: "Ankara",
    district: "",
    service: "Konut Projesi",
    title: "Ankara Konut Projesi | Nevo İnşaat",
    description:
      "Ankara'da modern ve güvenli konut projeleri. Nevo İnşaat ile kaliteli yaşam alanları keşfedin.",
    h1: "Ankara Konut Projesi",
    introText:
      "Ankara'da modern, güvenli ve yaşam kalitesi yüksek konut projeleri arıyorsanız, Nevo İnşaat'ın portföyünü inceleyin. Depreme dayanıklı yapı standartları, sosyal donatılar ve merkezi konumlarıyla konut projelerimiz fark yaratıyor.",
    serviceText:
      "Konut projelerimizde sosyal yaşam alanları, kapalı otopark, güvenlik sistemleri, yeşil alanlar ve çocuk oyun alanları standart olarak sunulmaktadır.",
    whyNevo:
      "Her konut projemizde aile yaşamını odak noktası alarak, güvenli, modern ve konforlu yaşam alanları tasarlıyoruz.",
    localExpertise:
      "Ankara genelinde tamamladığımız konut projeleriyle bölgenin konut ihtiyaçlarını ve beklentilerini yakından biliyoruz.",
    faqs: [
      {
        question: "Nevo İnşaat konut projelerinde hangi özellikler var?",
        answer:
          "Depreme dayanıklı yapı, kapalı otopark, güvenlik, sosyal alanlar ve modern mimari standart projelerimizin ayrılmaz parçasıdır.",
      },
      {
        question: "Ankara'da yeni konut projeleriniz var mı?",
        answer:
          "Evet, Kahramankazan ve çevre bölgelerde devam eden aktif konut projelerimiz bulunmaktadır. Detaylar için projeler sayfamızı inceleyebilirsiniz.",
      },
    ],
  },
  {
    slug: "kahramankazan-muteahhit",
    city: "Ankara",
    district: "Kahramankazan",
    service: "Müteahhit",
    title: "Kahramankazan Müteahhit | Nevo İnşaat",
    description:
      "Kahramankazan'da güvenilir müteahhit arıyorsanız, Nevo İnşaat'ın profesyonel hizmetlerini keşfedin.",
    h1: "Kahramankazan Müteahhit",
    introText:
      "Kahramankazan'da güvenilir bir müteahhit firma mı arıyorsunuz? Nevo İnşaat, bölgedeki güçlü referansları ve kaliteli işçiliğiyle Kahramankazan'ın tercih edilen müteahhit firmasıdır.",
    serviceText:
      "Konut, villa, ticari yapı ve anahtar teslim inşaat alanlarında Kahramankazan'da profesyonel müteahhitlik hizmetleri sunuyoruz.",
    whyNevo:
      "Kahramankazan'daki merkez ofisimiz ve bölgede tamamladığımız projelerle, yerel bilgi ve deneyimi en üst düzeyde sunuyoruz.",
    localExpertise:
      "Kahramankazan'da doğup büyüyen bir firma olarak, bölgenin her köşesini tanıyor, en uygun çözümleri sunuyoruz.",
    faqs: [
      {
        question: "Kahramankazan'da müteahhit firma nasıl seçilir?",
        answer:
          "Bölgedeki referans projeler, firma deneyimi, malzeme kalitesi ve zamanında teslim geçmişi en önemli seçim kriterleridir.",
      },
    ],
  },
];
