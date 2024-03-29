//smooth scroll

$(".navBtn").on("click", function(e) {
  const goToSection = `.${e.target.dataset.target}`;
  $("body, html").animate({
    scrollTop: $(goToSection).offset().top - (window.innerWidth < 900 ? 0 : 100)
  });
});

//handle nav

const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const navBtns = document.querySelectorAll(".navBtn");
const main = document.querySelector("main");

const toggleNav = () => {
  nav.classList.toggle("active");
};

hamburger.addEventListener("click", toggleNav);
navBtns.forEach(btn => btn.addEventListener("click", toggleNav));
main.addEventListener("click", () => {
  if (nav.classList.value.includes("active")) {
    nav.classList.remove("active");
  }
});

//change headder img

const img = document.querySelector(".header img");
let index = 1;

(function() {
  setInterval(() => {
    if (index === 4) index = 1;
    img.attributes.src.value = `images/head${index}.jpg`;
    index++;
  }, 4000);
})();

// type quote at services section

const text =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, tempora placeat aut, consectetur nihil enim et nesciunt ex quaerat corporis fuga! Atque adipisci harum porro veritatis, vel quaerat dolores.";

const quote = document.querySelector(".quote");
let textIndex = 0;
let typerDone = false;

function quoteTyper() {
  typerDone = true;
  const quoteInterval = setInterval(() => {
    if (textIndex === text.length - 1 || window.scrollY < 200)
      clearInterval(quoteInterval);
    quote.textContent += text[textIndex];
    textIndex++;
  }, 20);
}

// animations on scroll

const testimonials = document.querySelector(".testimonials");
const experience = document.querySelector(".experience");

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    testimonials.offsetTop +
      testimonials.offsetHeight -
      window.innerHeight -
      100
  ) {
    if (!typerDone) quoteTyper();
  }
  if (
    window.scrollY >
    experience.offsetTop + experience.offsetHeight - window.innerHeight - 100
  ) {
    experience.classList.add("active");
  }
  if (window.scrollY < 200) {
    quote.textContent = "";
    textIndex = 0;
    typerDone = false;
    experience.classList.remove("active");
  }
});

// Owl carousel

$(document).ready(function() {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  center: true,
  margin: 10,
  nav: true,
  navText: [
    `<i class="fas fa-arrow-left arrowBtn"></i>`,
    `<i class="fas fa-arrow-right arrowBtn"></i>`
  ],
  responsive: {
    0: {
      items: 1,
      margin: 0
    },
    450: {
      items: 2
    },
    1024: {
      items: 3
    }
  }
});
