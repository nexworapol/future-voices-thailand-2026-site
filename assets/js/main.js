
const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav-links]');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav-links] a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === current || (current === '' && href === 'index.html')) a.classList.add('active');
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
