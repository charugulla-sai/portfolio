'use strict';

const header = document.querySelector('.primary-header');
const ownerName = document.querySelector('.owner-name');
const onlineTagContent = document.querySelector('.online-tag p');
const onlineTagStatus = document.querySelector('.dot');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header-active');
    ownerName.classList.add('owner-name-active');
    onlineTagContent.textContent = "Available";
    onlineTagStatus.style.backgroundColor= '#78e009'
    onlineTagStatus.style.boxShadow= '0 0 10px 3px #85e80cda'

  } else {
    header.classList.remove('header-active');
    ownerName.classList.remove('owner-name-active');
    onlineTagContent.textContent = "Busy";
    onlineTagStatus.style.backgroundColor= '#e80c0c'
    onlineTagStatus.style.boxShadow= '0 0 10px 3px #e80c0c'

  }
});

