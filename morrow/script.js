(() => {
  const button = document.querySelector('#shuffle-plan');
  const walk = document.querySelector('.timeline-row.pause');
  const status = document.querySelector('#plan-status');
  if (!button || !walk || !status) return;
  button.addEventListener('click', () => {
    const moved = walk.dataset.moved === 'true';
    const firstTask = document.querySelector('.timeline-row:not(.pause)');
    if (moved) {
      firstTask.after(walk);
      walk.dataset.moved = 'false';
      status.textContent = 'Прогулка снова стоит между задачами.';
    } else {
      document.querySelector('.day-card-top').after(walk);
      walk.dataset.moved = 'true';
      status.textContent = 'Прогулка перенесена в начало дня.';
    }
  });
})();
