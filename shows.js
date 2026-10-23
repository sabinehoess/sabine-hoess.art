// ============================================================
//  Ausstellungen – hier eintragen.
//
//  Erscheinen auf der Startseite (kurze Liste) und auf der Seite
//  "Ausstellungen" (mit Fotos). Reihenfolge hier = Reihenfolge
//  auf der Website (neueste/kommende oben).
//
//  Felder:
//    id       – kurzer Name ohne Leerzeichen, z. B. "herrsching-2023"
//               (für Links direkt zu dieser Ausstellung)
//    date     – so wie es angezeigt wird, z. B. "Jul–Sep 2023"
//    datetime – Beginn als Jahr-Monat, z. B. "2023-07"
//    title    – Name der Ausstellung
//    text     – optional, z. B. Vernissage-Termin und Ort
//    link     – optional, Webseite der Veranstaltung
//    images   – optional, Fotos aus der Ausstellung. Bilddateien liegen
//               im Ordner "images/ausstellungen". Gibt es Fotos, steht
//               auf der Startseite "Bilder aus der Ausstellung ansehen".
// ============================================================

const SHOWS = [
  {
    id: "augsburg-2026",
    date: "Nov 2026 – Mär 2027",
    datetime: "2026-11",
    title: "78. Große Schwäbische Kunstausstellung | Kunstsammlungen und Museen Augsburg",
    text: "Vernissage am 28. November in der Augsburger Kunsthalle im Glaspalast, 11 Uhr.",
    link: "https://kunstsammlungen-museen.augsburg.de/78-grosse-schwaebische"
  },
  {
    id: "marktoberdorf-2026",
    date: "Nov 2026 – Jan 2027",
    datetime: "2026-11",
    title: "48. Ostallgäuer Kunstausstellung",
    text: "Vernissage am 28. Oktober im Künstlerhaus Marktoberdorf, 18 Uhr.",
    link: "https://www.kuenstlerhaus-marktoberdorf.de/"
  },
  {
    id: "herrsching-2023",
    date: "Jul–Sep 2023",
    datetime: "2023-07",
    title: "Einzelausstellung im Haus der Bayerischen Landwirtschaft, Tutzing",
    images: [
      { src: "images/ausstellungen/2023-herrsching-01.jpg", alt: "Ausstellungsansicht" },
      { src: "images/ausstellungen/2023-herrsching-02.jpg", alt: "Ausstellungsansicht" },
      { src: "images/ausstellungen/2023-herrsching-03.jpg", alt: "Ausstellungsansicht" },
      { src: "images/ausstellungen/2023-herrsching-04.jpg", alt: "Ausstellungsansicht" },
      { src: "images/ausstellungen/2023-herrsching-05.jpg", alt: "Ausstellungsansicht" },
      { src: "images/ausstellungen/2023-herrsching-06.jpg", alt: "Ausstellungsansicht" },
      { src: "images/ausstellungen/2023-herrsching-07.jpg", alt: "Ausstellungsansicht" },
      { src: "images/ausstellungen/2023-herrsching-08.jpg", alt: "Ausstellungsansicht" },
      { src: "images/ausstellungen/2023-herrsching-09.jpg", alt: "Ausstellungsansicht" },
      { src: "images/ausstellungen/2023-herrsching-10.jpg", alt: "Ausstellungsansicht" },
      { src: "images/ausstellungen/2023-herrsching-11.jpg", alt: "Ausstellungsansicht" },
      { src: "images/ausstellungen/2023-herrsching-12.jpg", alt: "Ausstellungsansicht" }
    ]
  }
];
