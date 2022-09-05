'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;


//Mak navbar transparent when it tis on the top
document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark')
  } else{
    navbar.classList.remove('navbar--dark')
  }
})