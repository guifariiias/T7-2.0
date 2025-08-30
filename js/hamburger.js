  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu-overlay');
  const body = document.body;
  const dropdownMobile = document.querySelector('.dropdown-mobile');
  const dropdownBtn = document.querySelector('.dropdown-btn');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('menu-active');
  });

  dropdownBtn.addEventListener('click', () => {
    dropdownMobile.classList.toggle('active');
  });

    let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // Scroll para baixo → esconde a navbar
      navbar.classList.add('hidden');
    } else {
      // Scroll para cima → mostra a navbar
      navbar.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
  });