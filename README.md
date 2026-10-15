# sabine-hoess.art

Statische Website, gehostet über GitHub Pages. Kein Build-Schritt, keine Abhängigkeiten.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Startseite: Begrüßung, Über mich, Ausstellungen, Kontakt |
| `gallery.html` | Galerie – wird aus `works.js` gebaut |
| `works.js` | **Die Werkliste.** Hier neue Arbeiten eintragen (Anleitung steht oben in der Datei) |
| `images/` | Bilddateien. Namensschema `NN-a.jpg` (Hauptansicht), `NN-b.jpg`, `NN-c.jpg` (weitere Ansichten) |
| `impressum.html` | Impressum & Datenschutz – **Platzhalter in eckigen Klammern ausfüllen** |
| `style.css`, `app.js` | Gestaltung und Logik (Burger-Menü, Wischen, Lightbox) |
| `CNAME` | Die Domain, muss `sabine-hoess.art` enthalten |

## Neues Werk hinzufügen

1. Fotos auf max. **2000 px Breite** verkleinern und als JPG (Qualität ~80) speichern, Dateigröße idealerweise unter 400 KB.
   Auf dem Mac: Vorschau → Werkzeuge → Größe anpassen. Oder <https://squoosh.app> im Browser.
2. In `images/` ablegen, z. B. `11-a.jpg`, `11-b.jpg`.
3. In `works.js` einen neuen Block ergänzen (einfach einen bestehenden kopieren und anpassen).
4. Commit & Push – die Seite ist nach ~1 Minute aktualisiert.

## Einmalige Einrichtung (GitHub Pages + Domain)

1. Neues GitHub-Konto für Sabine, neues **öffentliches** Repository `sabine-hoess.art` (Name egal), diese Dateien hochladen.
2. Repository → Settings → Pages → Source: *Deploy from a branch*, Branch `main`, Ordner `/ (root)`.
3. Dort unter *Custom domain* `sabine-hoess.art` eintragen (die `CNAME`-Datei ist bereits im Repo).
4. Beim Domain-Registrar folgende DNS-Einträge setzen:

   | Typ | Name | Wert |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `<github-nutzername>.github.io` |

   (Aktuelle IPs zur Sicherheit prüfen: <https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site>)
5. Nach DNS-Propagation (Minuten bis ein paar Stunden) in den Pages-Einstellungen *Enforce HTTPS* aktivieren.

## Schrift (Datenschutz-Hinweis)

Die Schrift *Newsreader* wird aktuell von Google Fonts geladen. In Deutschland ist das Einbinden von Google Fonts
rechtlich umstritten (IP-Übermittlung an Google). Sauberer ist Selbst-Hosting:

1. Auf <https://gwfh.mranftl.com/fonts/newsreader> die Schnitte *regular*, *500*, *italic* als woff2 herunterladen.
2. In einen Ordner `fonts/` legen.
3. In allen drei HTML-Dateien die drei `<link ... fonts.googleapis.com ...>` Zeilen löschen und oben in `style.css` ergänzen:

   ```css
   @font-face { font-family: "Newsreader"; src: url("fonts/newsreader-regular.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: swap; }
   @font-face { font-family: "Newsreader"; src: url("fonts/newsreader-500.woff2") format("woff2"); font-weight: 500; font-style: normal; font-display: swap; }
   @font-face { font-family: "Newsreader"; src: url("fonts/newsreader-italic.woff2") format("woff2"); font-weight: 400; font-style: italic; font-display: swap; }
   ```
4. Den Google-Fonts-Absatz aus `impressum.html` entfernen.
