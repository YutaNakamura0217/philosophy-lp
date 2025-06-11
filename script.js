// Intersection Observer for fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Modal handling
const modal = document.getElementById('modal');
const openBtns = document.querySelectorAll('#openModal, #openModalBottom');
openBtns.forEach(btn => btn.addEventListener('click', () => {
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
}));
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }
});
