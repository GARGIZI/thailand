const menuLink = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const close = document.querySelector('.nav-menu__close');

const openMenu = () => {
  menu.classList.add('active');
}

const closeMenu = () => {
  menu.classList.remove('active');
}

menuLink.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);