/* Small, dependency-free enhancements for the static Sequrin site. */
(function () {
  var enterpriseNumber = "2026/662912/07";
  var legalName = "Sequrin Technologies";
  var legacyDomain = "sequrin.tech";
  var canonicalDomain = "sequrin.com";

  function migrateDomain(value) {
    return typeof value === "string" ? value.split(legacyDomain).join(canonicalDomain) : value;
  }

  /*
   * Domain migration safety net.
   *
   * The static Pages bundle is committed output. During the sequrin.tech ->
   * sequrin.com cut-over, normalise any legacy absolute URL or contact address
   * left in an older generated page while the source/build pipeline catches up.
   */
  Array.prototype.forEach.call(
    document.querySelectorAll('link[rel="canonical"], meta[property="og:url"], meta[property="og:image"], meta[name="twitter:image"]'),
    function (element) {
      if (element.tagName === "LINK") {
        element.setAttribute("href", migrateDomain(element.getAttribute("href")));
      } else {
        element.setAttribute("content", migrateDomain(element.getAttribute("content")));
      }
    },
  );

  Array.prototype.forEach.call(
    document.querySelectorAll("a[href], form[action], img[src], source[src], source[data-src], video[poster]"),
    function (element) {
      ["href", "action", "src", "data-src", "poster"].forEach(function (attribute) {
        if (element.hasAttribute(attribute)) {
          element.setAttribute(attribute, migrateDomain(element.getAttribute(attribute)));
        }
      });
    },
  );

  Array.prototype.forEach.call(document.querySelectorAll('script[type="application/ld+json"]'), function (script) {
    script.textContent = migrateDomain(script.textContent);
  });

  if (document.body && document.createTreeWalker) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var textNodes = [];
    var current;
    while ((current = walker.nextNode())) {
      var parentName = current.parentElement && current.parentElement.tagName;
      if (parentName && !/^(SCRIPT|STYLE|NOSCRIPT|CODE|PRE)$/.test(parentName) && current.nodeValue.indexOf(legacyDomain) !== -1) {
        textNodes.push(current);
      }
    }
    textNodes.forEach(function (node) {
      node.nodeValue = migrateDomain(node.nodeValue);
    });
  }

  var founderCard = document.querySelector(".founder-card");
  if (founderCard) {
    var founderStyles = document.createElement("link");
    founderStyles.rel = "stylesheet";
    founderStyles.href = "../assets/founder-card.css";
    document.head.appendChild(founderStyles);

    if (founderCard.textContent.indexOf(enterpriseNumber) === -1) {
      var founderCopy = founderCard.querySelector("div");
      if (founderCopy) {
        var companyNote = document.createElement("p");
        companyNote.textContent =
          "Sequrin operates through Sequrin Technologies, a South African registered company (Enterprise No. " +
          enterpriseNumber +
          ").";
        founderCopy.appendChild(companyNote);
      }
    }
  }

  var footerCopyright = document.querySelector(".footer-bottom-inner > span");
  if (footerCopyright && footerCopyright.textContent.indexOf(enterpriseNumber) === -1) {
    footerCopyright.textContent =
      "© 2026 Sequrin. All rights reserved. · " + legalName + " · Enterprise No. " + enterpriseNumber;
  }

  function normaliseLinkLabel(link) {
    var label = link.textContent.trim();
    if (label === "Approach") link.textContent = "How It Works";
    if (label === "For medical schemes") link.textContent = "For Medical Schemes";
    if (label === "Sign in") link.textContent = "Sign In";
    if (label === "Why it matters") link.textContent = "Impact";
    if (label === "Long-term direction") link.textContent = "Secure Integrity Network";
  }

  Array.prototype.forEach.call(document.querySelectorAll(".desktop-nav, .mobile-panel"), function (nav) {
    Array.prototype.forEach.call(nav.querySelectorAll("a"), normaliseLinkLabel);

    var hasHome = Array.prototype.some.call(nav.querySelectorAll("a"), function (link) {
      return link.textContent.trim().toLowerCase() === "home";
    });

    if (!hasHome) {
      var homeLink = document.createElement("a");
      homeLink.href = "/";
      homeLink.textContent = "Home";
      if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
        homeLink.setAttribute("aria-current", "page");
      }
      nav.insertBefore(homeLink, nav.firstChild);
    }
  });

  Array.prototype.forEach.call(document.querySelectorAll(".footer-nav a"), normaliseLinkLabel);

  var footerBrandCopy = document.querySelector(".footer-brand > p");
  if (footerBrandCopy && footerBrandCopy.textContent.trim() === "Healthcare claims integrity technology, being developed in South Africa.") {
    footerBrandCopy.textContent = "Healthcare claims integrity technology, built in South Africa.";
  }

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var bar = document.querySelector(".scroll-progress span");
  if (bar) {
    var update = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var pct = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
      bar.style.transform = "scaleX(" + pct + ")";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  if (!reduce && "IntersectionObserver" in window) {
    var targets = document.querySelectorAll("main > section, main > .section");
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    Array.prototype.forEach.call(targets, function (el, i) {
      if (i === 0) {
        el.classList.add("is-visible");
        return;
      }
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll(".mobile-panel a"), function (link) {
    link.addEventListener("click", function () {
      var details = link.closest("details");
      if (details) details.open = false;
    });
  });

  Array.prototype.forEach.call(document.querySelectorAll("[data-hero-video]"), function (player) {
    var video = player.querySelector("[data-hero-video-element]");
    var button = player.querySelector("[data-hero-video-play]");
    var source = video && video.querySelector("source[data-src]");

    if (!video || !button || !source) return;

    var hidePlayOverlay = function () {
      button.hidden = true;
      button.style.display = "none";
      button.setAttribute("aria-hidden", "true");
    };

    var showPlayOverlay = function () {
      button.hidden = false;
      button.style.removeProperty("display");
      button.removeAttribute("aria-hidden");
    };

    button.addEventListener("click", function () {
      if (!source.getAttribute("src")) {
        source.setAttribute("src", source.getAttribute("data-src"));
        video.load();
      }

      hidePlayOverlay();
      video.controls = true;

      var playback = video.play();
      if (playback && typeof playback.catch === "function") {
        playback.catch(function () {
          showPlayOverlay();
        });
      }
    });

    video.addEventListener("playing", hidePlayOverlay);
    video.addEventListener("error", showPlayOverlay);
  });

  var top = document.querySelector(".back-to-top");
  if (top) {
    top.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      var main = document.querySelector("main");
      if (main) {
        window.setTimeout(
          function () {
            main.focus({ preventScroll: true });
          },
          reduce ? 0 : 350,
        );
      }
    });
  }
})();
