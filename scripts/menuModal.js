const menuHamburger = document.querySelector('.menu_hamburger');
const closeMenu = document.querySelectorAll('.menu li');
const menuPopUp = document.querySelector('.menu');
const body = document.querySelector('body');

function menuModal() {
  console.log(menuPopUp);
  body.classList.add('modal-active');
  menuPopUp.classList.add('menu_popup');
}

function closeMenuModal() {
  console.log(menuPopUp);
  menuPopUp.classList.add('out');
  body.classList.remove('modal-active');
  setTimeout(() => menuPopUp.classList.remove('menu_popup', 'out'), 500);
}

menuHamburger.addEventListener('click', menuModal);
closeMenu.forEach(element => {
  element.addEventListener('click', closeMenuModal);
});





