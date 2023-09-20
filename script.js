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

window.addEventListener('scroll', () => {
  const top = educationSection.getBoundingClientRect().top;
  const bottom = educationSection.getBoundingClientRect().bottom;
  console.log(top, bottom);
  if (top < -15 && bottom > 115) {
    truckIcon.style.position = 'fixed';
    truckIcon.style.top = '17.5%';
    truckIcon.style.left = '51.8%';
  } else {
    truckIcon.style.position = 'absolute';
    truckIcon.style.top = '15%';
    truckIcon.style.left = '52%';
  }
});
