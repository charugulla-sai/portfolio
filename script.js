'use strict';

const header = document.querySelector('.primary-header');

const onlineTagStatus = document.querySelector('.dot');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header-active');
    onlineTagStatus.style.backgroundColor = '#78e009';
  } else {
    header.classList.remove('header-active');
    onlineTagStatus.style.backgroundColor = '#e80c0c';
  }
});

