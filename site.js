'use strict';
// Keep the page fully navigable without JavaScript.
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  document.querySelectorAll('[data-category]').forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    if (card.hidden) card.querySelector('video')?.pause();
  });
}));
const heroVideo = document.getElementById('hero-video');
const motionButton = document.querySelector('.motion-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (heroVideo && motionButton) {
  function updateMotionButton() {
    motionButton.textContent = heroVideo.paused ? 'Play film ▷' : 'Pause film Ⅱ';
    motionButton.setAttribute('aria-label', heroVideo.paused ? 'Play background film' : 'Pause background film');
  }
  heroVideo.addEventListener('play', updateMotionButton);
  heroVideo.addEventListener('pause', updateMotionButton);
  motionButton.addEventListener('click', () => {
    if (heroVideo.paused) heroVideo.play().catch(updateMotionButton);
    else heroVideo.pause();
  });
  if (!reducedMotion.matches && !navigator.connection?.saveData) heroVideo.play().catch(updateMotionButton);
  reducedMotion.addEventListener('change', event => { if (event.matches) heroVideo.pause(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) heroVideo.pause(); });
}
// Avoid competing audio tracks and motion when a visitor plays a film.
document.querySelectorAll('.film-card video').forEach(video => video.addEventListener('play', () => {
  document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
}));
