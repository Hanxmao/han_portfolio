'use strict';

// add event on different element groups for different events
const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

// mobile navbar behavior
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

addEventOnElements(navTogglers, "click", function (){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
})

addEventOnElements(navLinks, "click", function (){
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("nav-active");
})


//when scroll down header will active
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function (){
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");

})