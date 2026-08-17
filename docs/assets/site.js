/* Small, dependency-free enhancements for the static Sequrin site. */
(function () {
  var founderCard = document.querySelector(".founder-card");
  if (founderCard) {
    var founderStyles = document.createElement("link");
    founderStyles.rel = "stylesheet";
    founderStyles.href = "../assets/founder-card.css";
    document.head.appendChild(founderStyles);
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
