let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let text = document.getElementById('text');
let mountains_behind = document.getElementById('mountains-behind');
let mountains_front = document.getElementById('mountains-front');
let btn = document.getElementById('btn');
let header = document.querySelector('header');
let stars2 = document.getElementById('stars2');

// mueve el fondo al hacer scroll
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * .5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 3 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * .8 + 'px';
    stars2.style.left = value * 0.25 + 'px';
})
