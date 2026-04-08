'use strict';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.menu__link');

if (burger && nav) {
  burger.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('menu--active');
    burger.classList.toggle('burger--active');
    document.body.classList.toggle('body--with-menu');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('menu--active');
      burger.classList.remove('burger--active');
      document.body.classList.remove('body--with-menu');
    });
  });
}
