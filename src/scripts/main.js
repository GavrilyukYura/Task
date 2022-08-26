'use strict';

const toggler = document.querySelector('.join__button');
const content = document.querySelector('.join__menu');
const arov = document.getElementById('arov');
const cross = document.getElementById('cross');

toggler.addEventListener('click', () => {
  content.classList.toggle('join__menu--hidden');
  arov.classList.toggle('diseible');
  cross.classList.toggle('diseible');
});
