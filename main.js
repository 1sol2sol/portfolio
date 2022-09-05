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

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener("click", (e)=> {
  const target = event.target;
  const link = target.dataset.link;
  if(link == null){
    return;
  }
  scrollIntoViews(link);
})

// Handle scrolling when Contact Btn is clicked 
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener("click",(e) => {
  scrollIntoViews('#contact')
})

function scrollIntoViews(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}