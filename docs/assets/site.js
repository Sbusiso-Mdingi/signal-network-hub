/* Sequrin site enhancements: navigation focus + scroll progress + section reveal. No dependencies. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Keep the masthead focused on the current buyer journey. Depth pages remain in the footer and contextual links. */
  var secondaryPrimaryNavPaths = {
    '/impact/': true,
    '/network/': true,
    '/governance/': true
  };
  var primaryNavLinks = document.querySelectorAll('.desktop-nav a, .mobile-panel a');
  Array.prototype.forEach.call(primaryNavLinks, function (link) {
    if (secondaryPrimaryNavPaths[link.pathname]) link.remove();
  });

  /* Scroll progress bar */
  var bar = document.querySelector('.scroll-progress span');
  if (bar) {
    var update = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var pct = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
      bar.style.transform = 'scaleX(' + pct + ')';
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  /* Fade-up on scroll into view */
  if (!reduce && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('main > section, main > .section');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    Array.prototype.forEach.call(targets, function (el, i) {
      if (i === 0) { el.classList.add('is-visible'); return; } /* never hide the hero */
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  /* Back to top */
  var top = document.querySelector('.back-to-top');
  if (top) {
    top.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });
  }
})();