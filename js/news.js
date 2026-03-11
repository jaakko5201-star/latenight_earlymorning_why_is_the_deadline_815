document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.expand-news').forEach(btn => {
    btn.addEventListener('click', () => {
      const events = btn.nextElementSibling;
      const isHidden = events.classList.contains('hidden');
      if (isHidden) {
        events.classList.remove('hidden');
        btn.textContent = '-';
        btn.setAttribute('aria-expanded', 'true');
      } else {
        events.classList.add('hidden');
        btn.textContent = '+';
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
});