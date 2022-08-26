'use strict';

const toggler = document.querySelector('.join__button');
const content = document.querySelector('.join__menu');

toggler.addEventListener('click', () => {
  content.classList.toggle('join__menu--hidden');
});
