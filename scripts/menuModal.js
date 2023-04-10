const menuHamburger = document.querySelector('.menu_hamburger');
const menuPopUp = document.querySelector('.menu');

function menuModal() {
  console.log(menuPopUp);
  menuPopUp.classList.add('menu_popup');
}

menuHamburger.addEventListener('click', menuModal);