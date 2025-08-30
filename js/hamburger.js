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