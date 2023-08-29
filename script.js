'use strict';

const header = document.querySelector('.primary-header');

window.addEventListener('scroll', ()=>{
  if(window.scrollY > 0){
    header.classList.add('header-active');
  }else{
    header.classList.remove('header-active');
  }
})
