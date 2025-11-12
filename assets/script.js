/* ---------- 1) Ano automático no rodapé ---------- */
(() => {
  const yearSpans = [document.getElementById('year'), document.getElementById('ano')];
  const target = yearSpans.find(Boolean);
  if (target) target.textContent = new Date().getFullYear();
})();

/* ---------- 2) Navegação mobile (headers novos e antigos) ---------- */
(() => {
  // Header novo (hamburger + .nav)
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Header antigo (id="menu-toggle" + .nav-links) — fallback
  const legacyToggle = document.getElementById('menu-toggle');
  const legacyNav = document.querySelector('.nav-links');
  if (legacyToggle && legacyNav) {
    legacyToggle.addEventListener('click', () => {
      legacyNav.classList.toggle('active');
      legacyToggle.classList.toggle('active');
    });
  }
})();

/* ---------- 3) Efeito “AGENDAR” (compatível com botão antigo .btn-agendar) ---------- */
(() => {
  const agendarBtn = document.querySelector('.btn-agendar');
  if (agendarBtn) {
    agendarBtn.addEventListener('mouseenter', () => (agendarBtn.textContent = 'AGENDAR AGORA!'));
    agendarBtn.addEventListener('mouseleave', () => (agendarBtn.textContent = 'AGENDAR'));
  }
})();

/* ---------- 4) Redes sociais flutuantes (contato) ---------- */
(() => {
  const toggleButton = document.querySelector('.toggle-menu');
  const socialMenu = document.querySelector('.redes-sociais');
  if (toggleButton && socialMenu) {
    toggleButton.addEventListener('click', () => {
      socialMenu.classList.toggle('ativo');
    });
  }
})();

