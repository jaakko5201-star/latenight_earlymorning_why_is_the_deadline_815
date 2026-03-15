document.addEventListener('DOMContentLoaded', () => {
  // Expand/collapse details panels (accessible)
  document.querySelectorAll('.expand-news').forEach(btn => {
    btn.addEventListener('click', () => {
      const events = btn.nextElementSibling;
      const isHidden = events.classList.contains('hidden');

      if (isHidden) {
        events.classList.remove('hidden');
        events.setAttribute('aria-hidden', 'false');
        btn.textContent = '−';
        btn.setAttribute('aria-expanded', 'true');
      } else {
        events.classList.add('hidden');
        events.setAttribute('aria-hidden', 'true');
        btn.textContent = '+';
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('#main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.classList.toggle('open');
    });
  }
});