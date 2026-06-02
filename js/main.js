/* =============================================
   PARTÍCULAS / SPARKLES
   ============================================= */
(function createSparkles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const symbols = ['✦', '✧', '⋆', '·', '✺', '❋'];
  const count = 18;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'sparkle';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      top:  ${Math.random() * 100}%;
      font-size: ${8 + Math.random() * 12}px;
      animation-duration: ${4 + Math.random() * 6}s;
      animation-delay: ${Math.random() * 6}s;
      opacity: 0;
    `;
    container.appendChild(el);
  }
})();

/* =============================================
   NAVEGAÇÃO — scroll + toggle mobile
   ============================================= */
const nav        = document.getElementById('nav');
const navToggle  = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  navToggle.classList.toggle('active');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// fechar menu ao clicar fora
document.addEventListener('click', e => {
  if (!mobileMenu.contains(e.target) && !navToggle.contains(e.target)) {
    mobileMenu.classList.remove('open');
    navToggle.classList.remove('active');
  }
});

/* =============================================
   SCROLL REVEAL
   ============================================= */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* =============================================
   CONTAGEM ANIMADA DOS STATS
   ============================================= */
function animateCount(el, target, duration = 900) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

/* =============================================
   CERTIFICADOS — render, filtro, busca, stats
   ============================================= */
const grid        = document.getElementById('certGrid');
const noResults   = document.getElementById('noResults');
const filterBtns  = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

let currentFilter = 'all';
let currentSearch = '';
let statsAnimated  = false;

function getTypeName(type) {
  const map = { idioma: 'Idioma', curso: 'Curso', escola: 'Escola' };
  return map[type] || type;
}

function buildCard(cert, delay = 0) {
  const card = document.createElement('div');
  card.className = 'cert-card';
  card.style.animationDelay = `${delay}ms`;
  card.dataset.id = cert.id;

  const hasImg = cert.image && cert.image.trim() !== '';
  const hasLink = cert.link && cert.link.trim() !== '';

  card.innerHTML = `
    <div class="cert-card__image">
      ${hasImg
        ? `<img src="${cert.image}" alt="${cert.name}" loading="lazy">`
        : `<div class="cert-card__placeholder">
             <svg viewBox="0 0 24 24" fill="none" stroke-width="1.2">
               <rect x="3" y="3" width="18" height="18" rx="3"/>
               <path d="M9 12l2 2 4-4"/>
             </svg>
             <span>certificado</span>
           </div>`
      }
      <span class="cert-card__type-badge badge--${cert.type}">${getTypeName(cert.type)}</span>
    </div>

    <div class="cert-card__body">
      <div class="cert-card__name">${cert.name}</div>
      <div class="cert-card__institution">${cert.institution}</div>
      ${cert.description ? `<p class="cert-card__desc">${cert.description}</p>` : ''}

      <div class="cert-card__footer">
        <span class="cert-card__date">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8"  y1="2" x2="8"  y2="6"/>
            <line x1="3"  y1="10" x2="21" y2="10"/>
          </svg>
          ${cert.date}${cert.hours ? ' · ' + cert.hours : ''}
        </span>
        <span class="cert-card__link">
          ver
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </span>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openModal(cert));
  return card;
}

function renderCerts() {
  const filtered = CERTIFICATES.filter(cert => {
    const matchFilter = currentFilter === 'all' || cert.type === currentFilter;
    const q = currentSearch.toLowerCase();
    const matchSearch = !q ||
      cert.name.toLowerCase().includes(q) ||
      cert.institution.toLowerCase().includes(q) ||
      (cert.description || '').toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  grid.innerHTML = '';
  noResults.style.display = filtered.length === 0 ? 'block' : 'none';

  filtered.forEach((cert, i) => {
    const card = buildCard(cert, i * 60);
    grid.appendChild(card);
  });
}

function updateStats() {
  const total   = CERTIFICATES.length;
  const idiomas = CERTIFICATES.filter(c => c.type === 'idioma').length;
  const cursos  = CERTIFICATES.filter(c => c.type === 'curso').length;
  const escolas = CERTIFICATES.filter(c => c.type === 'escola').length;

  document.getElementById('statTotal').textContent   = total;
  document.getElementById('statIdiomas').textContent = idiomas;
  document.getElementById('statCursos').textContent  = cursos;
  document.getElementById('statEscolas').textContent = escolas;
}

// Animar stats quando entrar na tela
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsAnimated) {
      statsAnimated = true;
      const total   = CERTIFICATES.length;
      const idiomas = CERTIFICATES.filter(c => c.type === 'idioma').length;
      const cursos  = CERTIFICATES.filter(c => c.type === 'curso').length;
      const escolas = CERTIFICATES.filter(c => c.type === 'escola').length;

      animateCount(document.getElementById('statTotal'),   total,   900);
      animateCount(document.getElementById('statIdiomas'), idiomas, 900);
      animateCount(document.getElementById('statCursos'),  cursos,  900);
      animateCount(document.getElementById('statEscolas'), escolas, 900);
    }
  });
}, { threshold: 0.4 });

const statsEl = document.getElementById('certStats');
if (statsEl) statsObserver.observe(statsEl);

// Filtros
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderCerts();
  });
});

// Busca
searchInput.addEventListener('input', e => {
  currentSearch = e.target.value.trim();
  renderCerts();
});

/* =============================================
   MODAL
   ============================================= */
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose   = document.getElementById('modalClose');

function openModal(cert) {
  const hasImg  = cert.image && cert.image.trim() !== '';
  const hasLink = cert.link  && cert.link.trim()  !== '';

  modalContent.innerHTML = `
    ${hasImg
      ? `<img class="modal-img" src="${cert.image}" alt="${cert.name}">`
      : `<div class="modal-img" style="display:flex;align-items:center;justify-content:center;">
           <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="var(--green-soft)" stroke-width="1.2">
             <rect x="3" y="3" width="18" height="18" rx="3"/>
             <path d="M9 12l2 2 4-4"/>
           </svg>
         </div>`
    }

    <span class="modal-badge cert-card__type-badge badge--${cert.type}">${getTypeName(cert.type)}</span>

    <h2 class="modal-title">${cert.name}</h2>
    <p class="modal-institution">${cert.institution}</p>

    ${cert.description
      ? `<p class="modal-desc">${cert.description}</p>`
      : ''
    }

    <div class="modal-meta">
      <div class="modal-meta-item">
        <span class="modal-meta-label">Data</span>
        <span class="modal-meta-value">${cert.date || '—'}</span>
      </div>
      ${cert.hours ? `
      <div class="modal-meta-item">
        <span class="modal-meta-label">Carga horária</span>
        <span class="modal-meta-value">${cert.hours}</span>
      </div>` : ''}
      <div class="modal-meta-item">
        <span class="modal-meta-label">Categoria</span>
        <span class="modal-meta-value">${getTypeName(cert.type)}</span>
      </div>
    </div>

    <div class="modal-actions">
      ${hasLink
        ? `<a href="${cert.link}" target="_blank" class="modal-btn modal-btn--primary">
             Ver certificado
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
               <polyline points="15 3 21 3 21 9"/>
               <line x1="10" y1="14" x2="21" y2="3"/>
             </svg>
           </a>`
        : ''
      }
      <button class="modal-btn modal-btn--secondary" onclick="closeModal()">Fechar</button>
    </div>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* =============================================
   INIT
   ============================================= */
updateStats();
renderCerts();

// adicionar classe reveal aos elementos que precisam
document.querySelectorAll('.sobre-grid, .cert-stats, .filters').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});
