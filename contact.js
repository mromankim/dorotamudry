/* =====================================================================
   Contact side-panel behaviour. Self-contained, no dependencies.
   Opens on any [data-contact-open]; closes on any [data-contact-close],
   on backdrop click, or on Escape.
   ===================================================================== */
(function () {
  const panel = document.querySelector('.contact-panel');
  const backdrop = document.querySelector('.contact-backdrop');
  if (!panel || !backdrop) return;

  const open = () => {
    panel.classList.add('is-open');
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    panel.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-contact-open]').forEach(el => el.addEventListener('click', open));
  document.querySelectorAll('[data-contact-close]').forEach(el => el.addEventListener('click', close));
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();
