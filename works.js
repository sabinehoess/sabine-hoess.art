// ============================================================
//  Werke – hier neue Arbeiten eintragen.
//
//  Jedes Werk ist ein Block in geschweiften Klammern { ... },
//  die Blöcke sind durch Kommas getrennt. Reihenfolge hier =
//  Reihenfolge auf der Website (neueste oben ist eine gute Wahl).
//
//  Felder:
//    title   – Titel des Werks (Pflicht)
//    year    – Jahr
//    medium  – z. B. "Öl auf Leinwand"
//    size    – z. B. "80 × 100 cm"
//    price   – Zahl in Euro, z. B. 1200. Leer lassen (null) für
//              "Preis auf Anfrage". Wird derzeit nicht angezeigt
//              (auskommentiert in app.js, Stichwort "PREIS").
//    status  – "available" (verfügbar), "sold" (verkauft),
//              "reserved" (reserviert) oder "exhibited" (ausgestellt).
//              Derzeit wird nur "ausgestellt" angezeigt.
//    where   – nur bei "exhibited": wo das Werk gerade hängt
//    note    – optionaler kurzer Text zum Werk
//    images  – Liste der Bilder, erstes Bild = Hauptansicht.
//              Weitere Bilder (Detail, im Raum, Seitenansicht …)
//              kann man auf dem Handy durchwischen.
//              Bilddateien liegen im Ordner "images".
// ============================================================

const WORKS = [
  {
    title: "Morgen am Fluss",
    year: 2026,
    medium: "Öl auf Leinwand",
    size: "100 × 80 cm",
    price: 1800,
    status: "available",
    images: [
      { src: "images/01-a.jpg", alt: "Morgen am Fluss, Gesamtansicht" },
      { src: "images/01-b.jpg", alt: "Morgen am Fluss, Detail" },
      { src: "images/01-c.jpg", alt: "Morgen am Fluss, im Raum" }
    ]
  },
  {
    title: "Stilles Feld",
    year: 2026,
    medium: "Acryl auf Leinwand",
    size: "60 × 60 cm",
    price: 950,
    status: "exhibited",
    where: "Galerie am Markt, Darmstadt – bis 20. Dezember 2026",
    images: [
      { src: "images/02-a.jpg", alt: "Stilles Feld, Gesamtansicht" },
      { src: "images/02-b.jpg", alt: "Stilles Feld, Detail" }
    ]
  },
  {
    title: "Winterlicht",
    year: 2025,
    medium: "Öl auf Holz",
    size: "40 × 50 cm",
    price: null,
    status: "available",
    note: "Entstanden im Januar in der Rhön.",
    images: [
      { src: "images/03-a.jpg", alt: "Winterlicht, Gesamtansicht" },
      { src: "images/03-b.jpg", alt: "Winterlicht, Detail" }
    ]
  },
  {
    title: "Zwei Birnen",
    year: 2025,
    medium: "Öl auf Leinwand",
    size: "30 × 40 cm",
    price: 600,
    status: "sold",
    images: [
      { src: "images/04-a.jpg", alt: "Zwei Birnen, Gesamtansicht" }
    ]
  },
  {
    title: "Abendrot über der Bergstraße",
    year: 2025,
    medium: "Öl auf Leinwand",
    size: "120 × 90 cm",
    price: 2400,
    status: "available",
    images: [
      { src: "images/05-a.jpg", alt: "Abendrot über der Bergstraße, Gesamtansicht" },
      { src: "images/05-b.jpg", alt: "Abendrot über der Bergstraße, Detail" },
      { src: "images/05-c.jpg", alt: "Abendrot über der Bergstraße, im Raum" }
    ]
  },
  {
    title: "Nebel",
    year: 2024,
    medium: "Aquarell auf Papier",
    size: "36 × 48 cm",
    price: 380,
    status: "available",
    images: [
      { src: "images/06-a.jpg", alt: "Nebel, Gesamtansicht" },
      { src: "images/06-b.jpg", alt: "Nebel, Detail" }
    ]
  },
  {
    title: "Fenster nach Süden",
    year: 2024,
    medium: "Öl auf Leinwand",
    size: "70 × 90 cm",
    price: 1500,
    status: "reserved",
    images: [
      { src: "images/07-a.jpg", alt: "Fenster nach Süden, Gesamtansicht" },
      { src: "images/07-b.jpg", alt: "Fenster nach Süden, Detail" }
    ]
  }
];
