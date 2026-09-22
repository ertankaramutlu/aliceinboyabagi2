export const site = {
  name: "Alice in Boyabağı",
  tagline:
    "İzmir Karaburun’da, Boyabağı Koyu’na birkaç adım. Kamp, çadır, evler, plaj ve bar — Ege’nin içinde sakin bir kaçış.",
  description:
    "Alice in Boyabağı; İzmir Karaburun, Boyabağı Koyu’nda çadır, evler, plaj ve barıyla Ege’nin içinde sakin bir kaçış.",
  locale: "tr",
  locationLabel: "Boyabağı Koyu, Karaburun",
  address: "Boyabağı, konum bilgisi yakında güncellenecek.",
  hours: "Sezona göre değişir. WhatsApp üzerinden sorun.",
  instagram: "https://www.instagram.com/aliceinboyabagi/",
  mapsUrl: "https://maps.google.com/?q=Boyaba%C4%9F%C4%B1%20Koyu%20Karaburun%20%C4%B0zmir",
  whatsapp: {
    number: "90XXXXXXXXXX",
    defaultMessage:
      "Merhaba, Alice in Boyabağı konaklama için bilgi almak istiyorum.",
  },
} as const;

export const nav = [
  { href: "#anasayfa", label: "Anasayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#konaklama", label: "Konaklama" },
  { href: "#galeri", label: "Galeri" },
  { href: "#blog", label: "Blog" },
  { href: "#etkinlik", label: "Etkinlik" },
  { href: "#sss", label: "SSS" },
  { href: "#iletisim", label: "İletişim" },
] as const;

export const tentStays = [
  {
    id: "kendi-cadirin",
    title: "Kendi çadırın",
    image: "/Konaklama-KendiCadır.webp",
    text: "Misafir kendi çadırını kurar. Koy ve ortak alan birkaç adım ötede.",
    features: [
      { id: "elektrik", label: "Elektrik" },
      { id: "dus", label: "Ortak duş" },
      { id: "wc", label: "Ortak WC" },
      { id: "wifi", label: "Wi-Fi" },
    ],
  },
  {
    id: "isletme-cadiri",
    title: "İşletme çadırı",
    image: "/Konaklama-IsletmeCadır.webp",
    text: "İşletmenin kurulu çadırı. Çadırını yanında getirmeden kal.",
    features: [
      { id: "kurulu-cadir", label: "Kurulu çadır" },
      { id: "elektrik", label: "Elektrik" },
      { id: "dus", label: "Ortak duş" },
      { id: "wc", label: "Ortak WC" },
      { id: "kettle", label: "Kettle" },
      { id: "wifi", label: "Wi-Fi" },
    ],
  },
] as const;

export const houseStays = [
  {
    id: "begonvil-ev",
    title: "Begonvil Ev",
    image: "/Konaklama-BegonvilEv.webp",
    text: "Begonvil gölgesinde, koya yakın duran bir ev.",
    features: [
      { id: "elektrik", label: "Elektrik" },
      { id: "klima", label: "Klima" },
      { id: "wifi", label: "Wi-Fi" },
      { id: "dus", label: "Duş" },
      { id: "wc", label: "WC" },
      { id: "balkon", label: "Balkon" },
    ],
  },
  {
    id: "tas-ev",
    title: "Taş Ev",
    image: "/Konaklama-TasEv.webp",
    text: "Taş duvar, Ege ışığı. Koya yakın duran bir ev.",
    features: [
      { id: "elektrik", label: "Elektrik" },
      { id: "klima", label: "Klima" },
      { id: "kettle", label: "Kettle" },
      { id: "buzdolabi", label: "Buzdolabı" },
      { id: "wifi", label: "Wi-Fi" },
      { id: "dus", label: "Duş" },
      { id: "wc", label: "WC" },
      { id: "sac-kurutma", label: "Saç kurutma" },
      { id: "balkon", label: "Balkon" },
    ],
  },
  {
    id: "sakiz-ev",
    title: "Sakız Ev",
    image: "/Konaklama-SakizEv.webp",
    text: "Sakız ağaçlarının dilinden; sakin, küçük bir ev.",
    features: [
      { id: "elektrik", label: "Elektrik" },
      { id: "klima", label: "Klima" },
      { id: "wifi", label: "Wi-Fi" },
      { id: "dus", label: "Duş" },
      { id: "wc", label: "WC" },
      { id: "kettle", label: "Kettle" },
    ],
  },
  {
    id: "ihlamur-ev",
    title: "Ihlamur Ev",
    image: "/Konaklama-IhlamurEv.webp",
    text: "Ihlamur gölgesinde, koya yakın duran bir ev.",
    features: [
      { id: "elektrik", label: "Elektrik" },
      { id: "klima", label: "Klima" },
      { id: "wifi", label: "Wi-Fi" },
      { id: "dus", label: "Duş" },
      { id: "wc", label: "WC" },
      { id: "balkon", label: "Balkon" },
      { id: "kettle", label: "Kettle" },
    ],
  },
  {
    id: "defne-ev",
    title: "Defne Ev",
    image: "/Konaklama-DefneEv.webp",
    text: "Defne gölgesinde, koya yakın duran bir ev.",
    features: [
      { id: "elektrik", label: "Elektrik" },
      { id: "klima", label: "Klima" },
      { id: "wifi", label: "Wi-Fi" },
      { id: "dus", label: "Duş" },
      { id: "wc", label: "WC" },
      { id: "balkon", label: "Balkon" },
      { id: "kettle", label: "Kettle" },
    ],
  },
] as const;

export const pillars = [
  {
    title: "Çadır – Kamp alanı",
    text: "İster kendi çadırınızı getirip zeytin ağaçlarının altına kurun, ister hazır ve konforlu işletme çadırlarımızda konaklayın. Ortak duş, WC ve elektrik imkanlarıyla doğanın tadını konfordan ödün vermeden çıkarın.",
    image: "/pillar-cadir.webp",
    alt: "Çadır – Kamp alanı",
  },
  {
    title: "Taş ve ahşap evler",
    text: "Karaburun’un dokusuna uygun taş ve ahşaptan inşa edilen özel evlerimizde doğallık ile konforu bir arada sunuyoruz. Sıcak yaz günlerinde serinlemeniz için klima, kendinize özel banyo ve akşamları yıldızları izleyebileceğiniz keyifli balkonlar sizi bekliyor.",
    image: "/pillar-evler.webp",
    alt: "Taş ve ahşap evler",
  },
  {
    title: "Boyabağı plajı ve çevre koylar",
    text: "Tesisimiz, Karaburun'un en özel noktalarından biri olan Boyabağ Plajı'nın hemen yanı başında yer alıyor. Akvaryumu andıran berrak denizin keyfini çıkarabilir, yürüyüş mesafesindeki el değmemiş bakir koyları keşfedebilirsiniz.",
    image: "/pillar-plaj.webp",
    alt: "Boyabağı plajı ve çevre koylar",
  },
  {
    title: "Sahil bar",
    text: "Denizin ve güneşin tadını çıkarırken gün boyu serinletici içecekler, taze atıştırmalıklar ve akşamüstü tatlı müzikler sahil barımızda size eşlik ediyor. Gün batımında dostlarla yapılan sohbetlerin adresi.",
    image: "/pillar-bar.webp",
    alt: "Sahil bar",
  },
] as const;

export const gallery = [
  { src: "/gallery-1.png", alt: "Çam altında çadırlar ve şemsiye" },
  { src: "/gallery-2.webp", alt: "Boyabağı Koyu’nda konaklama" },
  { src: "/gallery-3.webp", alt: "Alice in Boyabağı atmosfer" },
  { src: "/gallery-4.webp", alt: "Doğa ve konaklama detayı" },
  { src: "/gallery-5.webp", alt: "Çadır detayı" },
  { src: "/gallery-6.webp", alt: "Açık hava alanı" },
  { src: "/gallery-7.webp", alt: "Boyabağı Koyu manzarası" },
  { src: "/gallery-8.webp", alt: "Koy ve doğa" },
  { src: "/gallery-10.webp", alt: "Ege ve yeşil" },
  { src: "/gallery-11.webp", alt: "Konaklama alanı" },
  { src: "/gallery-12.webp", alt: "Kamp günlüğü" },
  { src: "/gallery-13.webp", alt: "Açık hava" },
  { src: "/gallery-14.webp", alt: "Boyabağı detay" },
  { src: "/gallery-15.webp", alt: "Doğada bir an" },
  { src: "/gallery-16.webp", alt: "Alice in Boyabağı" },
] as const;

export const faqs = [
  {
    q: "Rezervasyon nasıl yapılır?",
    a: "Rezervasyonlar WhatsApp üzerinden. Tarih ve kişi sayını yazman yeterli; müsaitliği oradan netleştiriyoruz.",
  },
  {
    q: "Kendi çadırımla gelebilir miyim?",
    a: "Evet. Kendi çadırını kurabilirsin. İstersen işletmenin kurulu çadırı da var. Evler ayrı.",
  },
  {
    q: "Plaj ve bar konaklamadan bağımsız kullanılabilir mi?",
    a: "Sezona ve doluluğa göre değişebilir. Güncel bilgi için WhatsApp’tan yaz.",
  },
  {
    q: "Evcil hayvan kabul ediyor musunuz?",
    a: "Politika henüz netleştiriliyor. Gelmeden önce mutlaka sorun.",
  },
] as const;

export function whatsappUrl(message = site.whatsapp.defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
