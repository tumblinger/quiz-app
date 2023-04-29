const backBtn = document.querySelector('.btn__prev');
const nextBtn = document.querySelector('.btn__next');
const carousel = document.querySelector('.carousel-content');
const cards = document.querySelectorAll('.carousel-img');
const animalsBtn = document.querySelector('.play-quiz');
const capitalsBtn = document.querySelector('.capitals-quiz');
const javascriptBtn = document.querySelector('.javascript-quiz');
const canadaBtn = document.querySelector('.canada-quiz');
const hiddenTexts = document.querySelectorAll('.card__hiddenText');
let angle = 0;

/* Animation for the slides */

nextBtn.addEventListener('click', () => {
    angle -= 90;
    carousel.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
})

backBtn.addEventListener('click', () => {
    angle += 90;
    carousel.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
})

/* Button links */
animalsBtn.addEventListener('click', () => {
    setTimeout(function () {
        document.location.assign('animals/index.html');
    }, 800);
});

capitalsBtn.addEventListener('click', () => {
    setTimeout(function () {
        document.location.assign('capitals/index.html');
    }, 800);
});

javascriptBtn.addEventListener('click', () => {
    setTimeout(function () {
        document.location.assign('javascript/index.html');
    }, 800);
});

canadaBtn.addEventListener('click', () => {
    setTimeout(function () {
        document.location.assign('canada/index.html');
    }, 800);
});