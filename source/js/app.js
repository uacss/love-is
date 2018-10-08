//open menu
const menuBtn = document.querySelector('.main-nav__button-sandwich');
const closeBtn = document.querySelector('.main-nav__close-button');
const navbar = document.querySelector('.main-nav__wrap-bottom');

menuBtn.addEventListener('click', function() {
  openMenu();
});

closeBtn.addEventListener('click', function() {
  closeMenu();
});

function openMenu() {
  navbar.classList.toggle('main-nav__hide');
}

function closeMenu() {
  navbar.classList.add('main-nav__hide');
}

window.addEventListener('DOMContentLoaded', function() {
  closeMenu();
});
