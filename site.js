document.documentElement.classList.add('js');
(function () {
  var els = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (!els.length) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function revealAll() {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  if (reduce || !('IntersectionObserver' in window)) { revealAll(); return; }

  els.forEach(function (el) { el.classList.add('armed'); });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  els.forEach(function (el) { io.observe(el); });

  // Safety net: if the observer never delivers (odd embeddings, old browsers),
  // show everything rather than leaving the page blank.
  setTimeout(function () {
    io.disconnect();
    revealAll();
  }, 1200);
})();
