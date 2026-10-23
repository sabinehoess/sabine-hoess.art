/* sabine-hoess.art – Navigation, Galerie, Lightbox */
(function () {
  "use strict";

  /* ---------- Navigation (Burger-Menü) ---------- */
  var nav = document.querySelector(".nav");
  var burger = document.querySelector(".burger");
  if (nav && burger) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll(".menu a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Hilfsfunktionen ---------- */
  var STATUS = {
    available: "verfügbar",
    sold: "verkauft",
    reserved: "reserviert",
    exhibited: "derzeit ausgestellt"
  };
  var EUR = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }

  var ICON_PREV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>';
  var ICON_NEXT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>';
  var ICON_X = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';

  /* Baut einen horizontal wischbaren Bilderstreifen mit Punkten + Pfeilen. */
  function buildViews(images, onImageClick, lazy) {
    var track = el("div", { "class": "track", tabindex: "0", "aria-label": "Ansichten" });
    images.forEach(function (im, i) {
      var img = el("img", { src: im.src, alt: im.alt || "", loading: lazy ? "lazy" : "eager", decoding: "async" });
      if (onImageClick) img.addEventListener("click", function () { onImageClick(i); });
      track.appendChild(el("figure", null, [img]));
    });

    var views = el("div", { "class": "views" }, [track]);
    if (images.length > 1) views.setAttribute("data-multi", "");

    var prev = el("button", { "class": "arrow prev", "aria-label": "Vorherige Ansicht", html: ICON_PREV });
    var next = el("button", { "class": "arrow next", "aria-label": "Nächste Ansicht", html: ICON_NEXT });
    var dots = el("div", { "class": "dots", role: "tablist" });
    views.appendChild(prev); views.appendChild(next);

    var current = 0;
    function goTo(i) {
      i = Math.max(0, Math.min(images.length - 1, i));
      track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
    }
    function update() {
      var i = Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
      current = i;
      prev.disabled = i === 0;
      next.disabled = i === images.length - 1;
      Array.prototype.forEach.call(dots.children, function (d, k) {
        d.setAttribute("aria-current", k === i ? "true" : "false");
      });
    }
    if (images.length > 1) {
      images.forEach(function (_, i) {
        var d = el("button", { "aria-label": "Ansicht " + (i + 1) + " von " + images.length, role: "tab" });
        d.addEventListener("click", function () { goTo(i); });
        dots.appendChild(d);
      });
    }
    prev.addEventListener("click", function () { goTo(current - 1); });
    next.addEventListener("click", function () { goTo(current + 1); });
    track.addEventListener("scroll", update, { passive: true });
    track.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { goTo(current - 1); e.preventDefault(); }
      if (e.key === "ArrowRight") { goTo(current + 1); e.preventDefault(); }
    });
    window.addEventListener("resize", function () { track.scrollLeft = current * track.clientWidth; });
    update();

    return { root: views, dots: dots, goTo: goTo, track: track };
  }

  /* ---------- Lightbox ---------- */
  var lightbox = null, lbViews = null, lastFocus = null;

  function openLightbox(work, index) {
    closeLightbox();
    lastFocus = document.activeElement;
    lbViews = buildViews(work.images, null, false);
    var close = el("button", { "class": "close", "aria-label": "Schließen", html: ICON_X });
    function capText(i) { return work.images[i].alt || work.title; }
    var cap = el("div", { "class": "lb-caption", text: capText(index) });
    lightbox = el("div", { "class": "lightbox open", role: "dialog", "aria-modal": "true", "aria-label": work.title }, [lbViews.root, close, cap]);
    document.body.appendChild(lightbox);
    document.body.classList.add("lb-open");
    close.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox || e.target.tagName === "FIGURE") closeLightbox(); });
    lbViews.track.addEventListener("scroll", function () {
      var i = Math.round(lbViews.track.scrollLeft / Math.max(1, lbViews.track.clientWidth));
      cap.textContent = capText(i);
    }, { passive: true });
    // Ohne Animation direkt zur angeklickten Ansicht springen
    lbViews.track.scrollLeft = index * lbViews.track.clientWidth;
    lbViews.track.focus();
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.remove(); lightbox = null;
    document.body.classList.remove("lb-open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLightbox(); });

  /* ---------- Galerie rendern ---------- */
  var gallery = document.getElementById("gallery");
  if (gallery && typeof WORKS !== "undefined") {
    WORKS.forEach(function (work, wi) {
      var views = buildViews(work.images, function (i) { openLightbox(work, i); }, wi > 0);

      // PREIS – derzeit ausgeblendet (reine Präsentation, kein Verkauf).
      // Zum Wiedereinschalten diese Zeile und die zwei Zeilen unten bei "PREIS" aktivieren
      // (die "//" am Anfang entfernen) und dann das Impressum auf § 5 DDG erweitern.
      // var priceText = work.status === "sold" ? "" : (work.price ? EUR.format(work.price) : "Preis auf Anfrage");
      var metaParts = [work.medium, work.size].filter(Boolean).join(", ");

      var caption = el("div", { "class": "caption" }, [
        el("h3", null, [
          document.createTextNode(work.title),
          work.year ? el("span", { "class": "year", text: String(work.year) }) : null
        ]),
        metaParts ? el("p", { "class": "meta", text: metaParts }) : null,
        // PREIS + Status (verfügbar/verkauft/reserviert) – zum Wiedereinschalten die nächsten
        // zwei Zeilen aktivieren und die Zeile "nur ausgestellt" darunter löschen.
        // priceText ? el("p", { "class": "price", text: priceText }) : null,
        // work.status ? el("p", { "class": "status " + work.status, text: STATUS[work.status] || work.status }) : null,
        work.status === "exhibited" ? el("p", { "class": "status exhibited", text: STATUS.exhibited }) : null, // nur ausgestellt
        work.status === "exhibited" && work.where ? el("p", { "class": "where", text: work.where }) : null,
        work.note ? el("p", { "class": "note", text: work.note }) : null
      ]);

      gallery.appendChild(el("article", { "class": "work", id: "werk-" + (wi + 1) }, [views.root, views.dots, caption]));
    });
  }

  /* ---------- Ausstellungen ---------- */
  function showInfo(show) {
    return el("span", null, [
      show.text ? document.createTextNode(show.text + " ") : null,
      show.link ? el("a", { href: show.link, text: "Link zur Veranstaltung" }) : null,
      show.works ? el("span", { "class": "show-works" }, [
        document.createTextNode("Die ausgestellten Werke finden Sie unter "),
        el("a", { href: "gallery.html", text: "Arbeiten" }),
        document.createTextNode(".")
      ]) : null
    ]);
  }

  // Kurze Liste auf der Startseite
  var showsList = document.getElementById("shows-list");
  if (showsList && typeof SHOWS !== "undefined") {
    SHOWS.forEach(function (show) {
      var hasImages = show.images && show.images.length;
      showsList.appendChild(el("li", null, [
        el("time", { datetime: show.datetime || "", text: show.date }),
        el("div", null, [
          el("strong", { text: show.title }),
          showInfo(show),
          hasImages ? el("span", null, [el("a", { href: "ausstellungen.html#" + show.id, text: "Bilder aus der Ausstellung ansehen" })]) : null
        ])
      ]));
    });
  }

  // Eigene Seite mit Fotos
  var showsPage = document.getElementById("shows");
  if (showsPage && typeof SHOWS !== "undefined") {
    SHOWS.forEach(function (show, si) {
      var hasImages = show.images && show.images.length;
      var views = hasImages ? buildViews(show.images, function (i) { openLightbox(show, i); }, si > 0) : null;
      showsPage.appendChild(el("article", { "class": "show", id: show.id }, [
        el("time", { datetime: show.datetime || "", text: show.date }),
        el("h2", { text: show.title }),
        (show.text || show.link) ? el("p", { "class": "show-info" }, [showInfo(show)]) : null,
        views ? views.root : null,
        views ? views.dots : null
      ]));
    });
    // Inhalt entsteht erst per JS – Sprungziel (#herrsching-2023 o. ä.) danach anfahren
    var target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }

  /* Jahr in der Fußzeile */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
