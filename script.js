/* ==========================================================
   Vanilla JavaScript – ohne Frameworks
   Aufgabe: 2 kleine Dinge dynamisch machen:
   1) Header-Farbe wechselt beim Scrollen
   2) Burger-Menü öffnen/schließen auf dem Handy
   ========================================================== */

// document.getElementById sucht ein Element mit einer bestimmten id.
// So bekommen wir Referenzen auf die HTML-Elemente, mit denen wir arbeiten wollen.
const header    = document.getElementById('header');
const burger    = document.getElementById('burger');
const navLinks  = document.getElementById('nav-links');


/* ----------------------------------------------------------
   1) HEADER-EFFEKT BEIM SCROLLEN
   window.addEventListener('scroll', ...) 
   = "Immer wenn der Nutzer scrollt, führe diese Funktion aus."
---------------------------------------------------------- */
window.addEventListener('scroll', function () {
  // window.scrollY = Wie viele Pixel wurde nach unten gescrollt?
  if (window.scrollY > 50) {
    // Klasse 'scrolled' hinzufügen -> CSS ändert das Aussehen
    header.classList.add('scrolled');
  } else {
    // Ganz oben: Klasse wieder entfernen
    header.classList.remove('scrolled');
  }
});


/* ----------------------------------------------------------
   2) BURGER-MENÜ (nur auf dem Handy sichtbar)
   Wenn man auf den Burger-Button klickt, blenden wir die
   Navigations-Links ein oder aus.
---------------------------------------------------------- */
burger.addEventListener('click', function () {
  // toggle = "Wenn Klasse da ist, entfernen. Wenn nicht, hinzufügen."
  navLinks.classList.toggle('open');
});


/* ----------------------------------------------------------
   3) MENÜ AUTOMATISCH SCHLIESSEN NACH KLICK AUF EINEN LINK
   Sonst bleibt es auf dem Handy geöffnet, wenn man zu einer
   Sektion gesprungen ist.
---------------------------------------------------------- */
// querySelectorAll gibt uns eine Liste ALLER passenden Elemente
const links = navLinks.querySelectorAll('a');

// forEach = "Für jedes Element in der Liste..."
links.forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
  });
});
