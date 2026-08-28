/* -----------------------------------------------------------
   The scroll reveal, and nothing else.

   This file used to also drive the nav (scroll shadow, mobile
   toggle) and swallow the footer newsletter's submit. Both of
   those elements were removed from the page, so both handlers
   went with them. The hero's ground is pure CSS, so there is
   no canvas to drive either.

   Nothing here touches the quote form — Drupal owns that
   submit.
   ----------------------------------------------------------- */
(function () {
  'use strict';
  const REDUCE = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initReveal() {
    const els = document.querySelectorAll('.iw-reveal');
    if (REDUCE || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    const obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); o.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    els.forEach(function (el) { obs.observe(el); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initReveal);
  else initReveal();
})();
