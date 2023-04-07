const menuBurger = document.querySelector('.menu_hamburger');
const menuBlock = document.querySelector('.menu');
const menuOptions = document.querySelectorAll('.menu li');
const bodyNode = document.querySelector('body');

function menuModal() {
  menuBurger.computedStyleMap.display = 'none';
  menuBlock.classList.add('menu_popup');
  bodyNode.classList.add('modal-active');
}

function menuInteraction() {
  menuBlock.classList.add('out');
  menuBurger.computedStyleMap.display = 'block';
  bodyNode.classList.remove('modal-active');
  setTimeout(menuBlock.classList.remove('menu_popup', 'out'), 700);
}

menuBurger.addEventListener('click', menuModal);
menuOptions.forEach((option) => option.addEventListener('click', menuInteraction));