/* Mathematical Study Point — Shared Components */
(function () {
  "use strict";
  var IC = {
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    arrow:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
    chevDown:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  };
  var path = window.location.pathname;
  function isA(h) {
    if (h === "/") return path === "/" || path === "/index.html" || path === "";
    return path.startsWith(h);
  }

  var hdr = document.getElementById("site-header");
  if (hdr) {
    hdr.innerHTML =
      '<nav class="site-nav" role="navigation" aria-label="Main navigation"><div class="container nav-inner"><a href="/" class="nav-logo" aria-label="Mathematical Study Point Home"><div class="nav-logo-icon" aria-hidden="true">M</div><span style="gap: 3px;">Mathematical Study Point<span class="logo-sub">Since 2003 &middot; Lakhimpur Kheri</span></span></a><div class="nav-links"><a href="/"' +
      (isA("/") ? ' class="active"' : "") +
      '>Home</a><a href="/courses/"' +
      (isA("/courses") ? ' class="active"' : "") +
      '>Courses</a><a href="/about/"' +
      (isA("/about") ? ' class="active"' : "") +
      '>About</a><a href="/contact/"' +
      (isA("/contact") ? ' class="active"' : "") +
      '>Contact</a></div><a href="/contact/" class="btn btn-primary btn-sm nav-cta">Enquire Now ' +
      IC.arrow +
      '</a><div class="hamburger" id="hbg" aria-label="Toggle menu" role="button" tabindex="0" aria-expanded="false"><span></span><span></span><span></span></div></div></nav>';
  }

  var mob = document.getElementById("mobile-menu-slot");
  if (mob) {
    mob.innerHTML =
      '<div class="mobile-menu" id="mob-menu" role="dialog" aria-label="Mobile navigation"><a href="/">Home</a><a href="/courses/">Courses</a><a href="/courses/maths-class-11-12/">Maths 11th-12th</a><a href="/courses/maths-class-9-10/">Maths 9th-10th</a><a href="/courses/science-class-9-10/">Science 9th-10th</a><a href="/courses/cbse-board-preparation/">CBSE Preparation</a><a href="/courses/up-board-preparation/">UP Board Preparation</a><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/contact/" class="btn btn-primary btn-lg">Enquire Now ' +
      IC.arrow +
      "</a></div>";
  }

  var ftr = document.getElementById("site-footer");
  if (ftr) {
    ftr.innerHTML =
      '<footer class="site-footer" role="contentinfo"><div class="container"><div class="footer-grid"><div class="footer-brand"><a href="/" class="nav-logo" aria-label="Mathematical Study Point Home"><div class="nav-logo-icon" aria-hidden="true">M</div><span style="gap: 3px;">Mathematical Study Point<span class="logo-sub">Since 2003</span></span></a><p>Trusted maths and science coaching center in Lakhimpur Kheri, building strong academic foundations for students of Class 9th to 12th since 2003.</p></div><div><div class="footer-heading">Quick Links</div><div class="footer-links"><a href="/">Home</a><a href="/courses/">All Courses</a><a href="/about/">About Us</a><a href="/contact/">Contact Us</a></div></div><div><div class="footer-heading">Our Courses</div><div class="footer-links"><a href="/courses/maths-class-11-12/">Maths (11th-12th)</a><a href="/courses/maths-class-9-10/">Maths (9th-10th)</a><a href="/courses/science-class-9-10/">Science (9th-10th)</a><a href="/courses/cbse-board-preparation/">CBSE Preparation</a><a href="/courses/up-board-preparation/">UP Board Preparation</a></div></div><div><div class="footer-heading">Contact Us</div><div class="footer-contact-item">' +
      IC.pin +
      '<span>Near Bus Stand, Lakhimpur Kheri, Uttar Pradesh 262701</span></div><div class="footer-contact-item">' +
      IC.phone +
      '<a href="tel:+919999999999">+91 99999 99999</a></div><div class="footer-contact-item">' +
      IC.mail +
      '<a href="mailto:info@mathscoach.in">info@mathscoach.in</a></div><div class="footer-contact-item">' +
      IC.clock +
      '<span>Mon - Sat: 7:00 AM - 8:00 PM</span></div></div></div><div class="footer-bottom">&copy; ' +
      new Date().getFullYear() +
      " Mathematical Study Point, Lakhimpur Kheri. All rights reserved.</div></div></footer>";
  }

  var hbg = document.getElementById("hbg"),
    mMenu = document.getElementById("mob-menu");
  if (hbg && mMenu) {
    hbg.addEventListener("click", function () {
      var o = mMenu.classList.toggle("open");
      hbg.classList.toggle("active");
      hbg.setAttribute("aria-expanded", o);
      document.body.style.overflow = o ? "hidden" : "";
    });
    mMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mMenu.classList.remove("open");
        hbg.classList.remove("active");
        hbg.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  var nav = document.querySelector(".site-nav");
  if (nav) {
    window.addEventListener(
      "scroll",
      function () {
        nav.classList.toggle("scrolled", window.scrollY > 20);
      },
      { passive: true },
    );
  }

  var obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );
  document.querySelectorAll(".fade-up").forEach(function (el) {
    obs.observe(el);
  });

  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = this.parentElement;
      var open = item.classList.contains("open");
      item.parentElement
        .querySelectorAll(".faq-item.open")
        .forEach(function (o) {
          o.classList.remove("open");
        });
      if (!open) item.classList.add("open");
    });
  });
})();
