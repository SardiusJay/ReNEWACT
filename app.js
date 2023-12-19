const listContainer= document.querySelector('#list-container')
const navToggle= document.querySelector('#nav-toggle')
const navClose= document.querySelector('#nav-close')
const links= document.querySelectorAll('.list-item')
const header= document.querySelector('#header')

links.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        if (e.currentTarget) {
            listContainer.classList.remove('show-menu')
        }
    })
})

navToggle.addEventListener('click', ()=>{
    listContainer.classList.add('show-menu')
})

navClose.addEventListener('click', ()=>{
    if (listContainer.classList.contains('show-menu')) {
        listContainer.classList.remove('show-menu')
    }
})

// Since we set the number of steps to 4, 
// we need to have 4 images in our sprite.
// Each image has a width of 100px, so the
// sprite's width is 4 times that: 400px.

var spriteWidth = 400;
var steps = 4;

// When the animation starts, we need to know
// the current step (or image) and position the
// sprite accordingly.

var currentStep = 0;
var currentPos = 0;
var speed = 100;

function animate() {
  currentStep = (currentStep + 1) % steps;
  currentPos = (-currentStep * spriteWidth) + 'px';
  document.querySelector('.animation').style.backgroundPosition = currentPos + ' top';
}

setInterval(animate, speed);




