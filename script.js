'use strict';

const header = document.querySelector('.primary-header');
const ownerName = document.querySelector('.owner-name');
const onlineTagContent = document.querySelector('.online-tag p');
const onlineTagStatus = document.querySelector('.dot');

const educationSection = document.querySelector('.education-section');
const truckIcon = document.querySelector('.truck-icon > svg');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header-active');
    ownerName.classList.add('owner-name-active');
    onlineTagContent.textContent = 'Available';
    onlineTagStatus.style.backgroundColor = '#78e009';
    onlineTagStatus.style.boxShadow = '0 0 10px 3px #85e80cda';
  } else {
    header.classList.remove('header-active');
    ownerName.classList.remove('owner-name-active');
    onlineTagContent.textContent = 'Busy';
    onlineTagStatus.style.backgroundColor = '#e80c0c';
    onlineTagStatus.style.boxShadow = '0 0 10px 3px #e80c0c';
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
  }else {
    truckIcon.style.position = 'absolute';
    truckIcon.style.top = '15%';
    truckIcon.style.left = '52%';
    
  }
});
