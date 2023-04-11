const menuHamburger = document.querySelector('.menu_hamburger');
const closeMenu = document.querySelectorAll('.menu li');
const menuPopUp = document.querySelector('.menu');
const body = document.querySelector('body');

function menuModal() {
  menuHamburger.computedStyleMap.display = 'none';
  body.classList.add('modal-active');
  menuPopUp.classList.add('menu_popup');
}

function closeMenuModal() {
  menuPopUp.classList.add('out');
  menuHamburger.computedStyleMap.display = 'block';
  body.classList.remove('modal-active');
  setTimeout(() => menuPopUp.classList.remove('menu_popup', 'out'), 500);
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    menuPopUp.classList.remove('menu_popup', 'out');
    body.classList.remove('modal-active');
  }
});

menuHamburger.addEventListener('click', menuModal);
closeMenu.forEach((element) => {
  element.addEventListener('click', closeMenuModal);
});
