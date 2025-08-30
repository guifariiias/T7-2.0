const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu-overlay');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');           // transforma hambúrguer em X
  mobileMenu.classList.toggle('active');       // abre/fecha overlay
  document.body.classList.toggle('menu-active'); // aplica blur ao resto do site
});
