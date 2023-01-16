// 'use strict';

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

addEventOnElements(navTogglers, "click", function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
})

addEventOnElements(navLinks, "click", function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("nav-active");
})


//when scroll down header will active
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");

})

//reveal behavior
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ------------emailJS------------------
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactMessage = document.getElementById("contact-message"),
  contactStatus = document.getElementById("contact-status")

const sendEmail = (event) => {
  event.preventDefault();

  if (contactName.value === "" || contactEmail.value === "" || contactMessage.value === "") {
    contactStatus.classList.remove("color-blue");
    contactStatus.classList.add("color-red");

    contactMessage.textContent = "All input fields are required"
  } else {
    // serviceID, templateID, formID, publicKey
    emailjs.sendForm('service_rfa6leo', 'template_bbhzego', '#contact-form', 'ujZodUI_1SupV9PPu')
      .then((res) => {
        console.log(res);
        contactStatus.classList.add('color-blue')
        contactStatus.textContent = "Message sent successfully "
        setTimeout(() => {
          contactStatus.textContent = ""
        }, 5000)
      }, (err) => {
        alert("Something went wrong", err)
      })
  }
}

contactForm.addEventListener('submit', sendEmail)