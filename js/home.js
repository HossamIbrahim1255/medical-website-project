const navbar     = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}));

scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

document.querySelectorAll('.faq-question').forEach(q => {
  const activate = () => {
    const item = q.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => { i.classList.remove('open'); i.querySelector('.faq-question').setAttribute('aria-expanded','false'); });
    if (!isOpen) { item.classList.add('open'); q.setAttribute('aria-expanded','true'); }
  };
  q.addEventListener('click', activate);
  q.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') { e.preventDefault(); activate(); } });
});