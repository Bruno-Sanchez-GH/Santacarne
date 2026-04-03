/* ============================================================
   main.js — Navbar · Carrusel · Scroll Reveal
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     1. NAVBAR — hamburguesa
     ============================================================ */
  const hamburger  = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile');
  const mobileLinks = document.querySelectorAll('.navbar__mobile-link');

  if (hamburger && mobileMenu) {

    function toggleMenu(forceClose = false) {
      const isOpen = hamburger.classList.contains('is-open');
      if (forceClose || isOpen) {
        hamburger.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      } else {
        hamburger.classList.add('is-open');
        mobileMenu.classList.add('is-open');
        hamburger.setAttribute('aria-expanded', 'true');
        mobileMenu.setAttribute('aria-hidden', 'false');
      }
    }

    hamburger.addEventListener('click', () => toggleMenu());
    mobileLinks.forEach(link => link.addEventListener('click', () => toggleMenu(true)));
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar')) toggleMenu(true);
    });
  }


  /* ============================================================
      2. CARRUSEL — beneficios
     ============================================================ */
  (function initCarrusel() {
    const track    = document.querySelector('.beneficios__track');
    const cards    = document.querySelectorAll('.beneficios__card');
    const btnPrev  = document.querySelector('.beneficios__btn--prev');
    const btnNext  = document.querySelector('.beneficios__btn--next');
    const dotsWrap = document.querySelector('.beneficios__dots');

    if (!track || !cards.length) return;

    const total = cards.length;
    let current = 0;

    function visibles() {
      return track.parentElement.offsetWidth >= 768 ? 3 : 1;
    }

    function maxIndex() {
      return Math.max(0, total - visibles());
    }

    function buildDots() {
      dotsWrap.innerHTML = '';
      const count = maxIndex() + 1;
      for (let i = 0; i < count; i++) {
        const dot = document.createElement('button');
        dot.className = 'beneficios__dot' + (i === 0 ? ' is-active' : '');
        dot.setAttribute('aria-label', `Ir a tarjeta ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
      }
    }

    function updateDots() {
      document.querySelectorAll('.beneficios__dot').forEach((d, i) => {
        d.classList.toggle('is-active', i === current);
      });
    }

    function goTo(index) {
      current = Math.max(0, Math.min(index, maxIndex()));
      const cardW  = cards[0].offsetWidth;
      const gap    = 16;
      const offset = current * (cardW + gap);
      track.style.transform = `translateX(-${offset}px)`;
      btnPrev.disabled = current === 0;
      btnNext.disabled = current === maxIndex();
      updateDots();
    }

    btnPrev.addEventListener('click', () => goTo(current - 1));
    btnNext.addEventListener('click', () => goTo(current + 1));

    /* Swipe táctil */
    let startX = 0;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) diff > 0 ? goTo(current + 1) : goTo(current - 1);
    }, { passive: true });

    /* Recalcular en resize */
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        buildDots();
        goTo(Math.min(current, maxIndex()));
      }, 150);
    });

    buildDots();
    goTo(0);
  })();


  /* ============================================================
     3. SCROLL REVEAL — IntersectionObserver
     ============================================================ */
  (function initReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            /* Una vez visible no necesitamos seguir observando */
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,   /* Se activa cuando el 15% del elemento es visible */
        rootMargin: '0px 0px -40px 0px' /* Margen inferior para que no se active demasiado pronto */
      }
    );

    elements.forEach((el) => observer.observe(el));
  })();

});
