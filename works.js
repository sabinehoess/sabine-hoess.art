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
    title: "o.T.",
    year: 2023,
    medium: "Aquarell auf 640gr Aquarellkarton",
    size: "104 × 76 cm",
    price: 4500 grau rosa,
    status: "available",
    where: "Künstlerhaus Marktoberdort – bis Dezember 2026",
    images: [
      { src: "Werk Grau Rosa gekreutz b2.jpg", alt: "Morgen am Fluss, Gesamtansicht" }
    ]
  },
  {
    title: "o.T.",
    year: 2023,
    medium: "Aquarell auf 640g Aquarellkarton",
    size: "104 × 76 ",
    price: 4300 bunt,
    status: "exhibited",
    where: "Künstlerhaus Marktoberdort – bis Dezember 2026",
    images: [
      { src: "Werk mit Streifen_2.jpg", alt: "Stilles Feld, Gesamtansicht" }
    ]
  }
];
