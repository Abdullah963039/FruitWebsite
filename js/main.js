// Landing Slider Animations
const prevLanding = document.querySelector(".landing .previous");
const nextLanding = document.querySelector(".landing .next");
const landingContainer = document.querySelector('.landing .container');

function animateLandingLeft() {
    landingContainer.classList.add('animate-left');
    setTimeout(() => {
        landingContainer.classList.remove('animate-left')
    }, 1500);
}
function animateLandingRight() {
    landingContainer.classList.add('animate-right');
    setTimeout(() => {
        landingContainer.classList.remove('animate-right')
    }, 1500);
}

prevLanding.onclick = animateLandingRight;
nextLanding.onclick = animateLandingLeft;




// Testemonial Slider Animation
const prevTestimonial = document.querySelector('.testimonial .previous');
const nextTestimonial = document.querySelector('.testimonial .next');
const testimonialContainer = document.querySelector('.testimonial .comments');

function animateTestemonialLeft() {
    testimonialContainer.classList.add('animate-left');
    setTimeout(() => {
        testimonialContainer.classList.remove('animate-left')
    }, 1500);
}
function animateTestemonialRight() {
    testimonialContainer.classList.add('animate-right');
    setTimeout(() => {
        testimonialContainer.classList.remove('animate-right')
    }, 1500);
}
prevTestimonial.onclick = animateTestemonialRight;
nextTestimonial.onclick = animateTestemonialLeft;



// Toggle Menu
const menu = document.getElementById('menu');
let menuIcon = `<ion-icon name="menu" class="menu"></ion-icon>`;
let closeIcon = `<ion-icon name="close-outline" class="close"></ion-icon>`;

menu.onclick = () => {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menu.innerHTML = "";
        menu.innerHTML = menuIcon;
    } else {
        menu.classList.add("active");
        menu.innerHTML = "";
        menu.innerHTML = closeIcon;
    }
}