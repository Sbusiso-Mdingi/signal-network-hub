/* Navigation compatibility for legacy static policy/governance pages. */
(function () {
  function canonicaliseUrl(value) {
    return value ? value.replace(/sequrin\.tech/g, "sequrin.com") : value;
  }

  function normaliseNavigation(nav) {
    if (!nav) return;
    var links = Array.prototype.slice.call(nav.querySelectorAll("a"));
    links.forEach(function (link) {
      link.href = canonicaliseUrl(link.href);
      var label = link.textContent.trim();
      if (label === "Approach") link.textContent = "How It Works";
      if (label === "For medical schemes") link.textContent = "For Medical Schemes";
      if (label === "Sign in") link.textContent = "Sign In";
      if (label === "Why it matters") link.textContent = "Impact";
      if (label === "Long-term direction") link.textContent = "Secure Integrity Network";
    });

    var first = nav.querySelector("a");
    if (first && !/\/$/.test(new URL(first.href, location.href).pathname)) {
      var home = document.createElement("a");
      home.href = "/";
      home.textContent = "Home";
      nav.insertBefore(home, first);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[href*='sequrin.tech']").forEach(function (link) {
      link.href = canonicaliseUrl(link.href);
    });

    document.querySelectorAll(".desktop-nav, .mobile-panel").forEach(normaliseNavigation);

    document.querySelectorAll(".footer-nav a").forEach(function (link) {
      var label = link.textContent.trim();
      if (label === "Approach") link.textContent = "How It Works";
      if (label === "For medical schemes") link.textContent = "For Medical Schemes";
      if (label === "Why it matters") link.textContent = "Impact";
      if (label === "Long-term direction") link.textContent = "Secure Integrity Network";
      link.href = canonicaliseUrl(link.href);
    });

    document.querySelectorAll(".footer-heading").forEach(function (heading) {
      if (heading.textContent.trim() === "More") heading.textContent = "Company & policies";
    });

    var progress = document.querySelector(".scroll-progress span");
    if (progress) {
      var update = function () {
        var root = document.documentElement;
        var max = root.scrollHeight - root.clientHeight;
        progress.style.width = (max > 0 ? Math.min(100, (root.scrollTop / max) * 100) : 0) + "%";
      };
      update();
      addEventListener("scroll", update, { passive: true });
      addEventListener("resize", update);
    }
  });
})();
