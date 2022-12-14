'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;


//Make navbar transparent when it is on the top
document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark')
  } else{
    navbar.classList.remove('navbar--dark')
  }
  navbarMenu.classList.remove('open'); 
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

// Navbar toggle Btn for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
  console.log('click');
})


// Handle scrolling when Contact Btn is clicked 
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener("click",(e) => {
  scrollIntoViews('#contact')
})


//Make Home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1- window.scrollY / homeHeight;
})

// Show "arrow up" Btn when scrolling down 
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight/2){
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');

  }
})

// Handle click one the "arrow up" Btn
arrowUp.addEventListener('click', () => {
  scrollIntoViews('#home');
})

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null){
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected')
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if(filter === '*' || filter === project.dataset.type){
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    })
    projectContainer.classList.remove('anim-out');  
  }, 300)
}) 


function scrollIntoViews(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}