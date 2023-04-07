const menuBurger = document.querySelector('.menu_hamburger');
const menuBlock = document.querySelector('.menu');
const menuOptions = document.querySelectorAll('.menu li');
const bodyNode = document.querySelector('body');

function menuModal() {
  menuBurger.computedStyleMap.display = 'none';
  menuBlock.classList.remove('menu_popup', 'out');
  menuBlock.classList.add('menu_popup');
  bodyNode.classList.add('modal-active');
}

function menuInteraction() {
  menuBlock.classList.add('out');
  menuBurger.computedStyleMap.display = 'block';
  bodyNode.classList.remove('modal-active');
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    menuBlock.classList.remove('menu_popup', 'out');
    bodyNode.classList.remove('modal-active');
  }
});

menuBurger.addEventListener('click', menuModal);
menuOptions.forEach((option) => option.addEventListener('click', menuInteraction));