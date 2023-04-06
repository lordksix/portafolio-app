const menuLinks = document.querySelectorAll('.menu li a');
const headerLink = document.querySelector('.logo a');

menuLinks.forEach(link => link.addEventListener('click', smoothScroll));
headerLink.addEventListener('click', smoothScrollTop);

function smoothScroll(e){
    e.preventDefault();
    const headerHeight = document.getElementById("header").offsetHeight;
    const targetDestination = e.target.getAttribute('href');
    const targetSelector= document.querySelector(targetDestination);
    console.log(targetSelector.getBoundingClientRect());
    const targetTop = Math.floor(targetSelector.getBoundingClientRect().top)-headerHeight;
    window.scrollBy({top: targetTop, left: 0, behavior: 'smooth'});
}

function smoothScrollTop(e){
    e.preventDefault();
    const targetDestination = e.target.getAttribute('href');
    const targetSelector = document.querySelector(targetDestination);
    console.log(targetSelector.getBoundingClientRect());
    const targetTop = Math.floor(targetSelector.getBoundingClientRect().top);
    window.scrollBy({top: targetTop, left: 0, behavior: 'smooth'});
}