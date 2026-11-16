// Subtle pointer parallax on the hero artwork; disabled for touch and reduced-motion users.
(() => {
  const art = document.querySelector('.hero-art');
  if (!art || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(hover: hover)').matches) return;
  const sphere = art.querySelector('.sphere');
  const sun = art.querySelector('.sun');
  art.addEventListener('pointermove', (event) => {
    const bounds = art.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    sphere.style.translate = `${x * 12}px ${y * 10}px`;
    sun.style.translate = `${x * -7}px ${y * -6}px`;
  });
  art.addEventListener('pointerleave', () => {
    sphere.style.translate = '';
    sun.style.translate = '';
  });
})();
