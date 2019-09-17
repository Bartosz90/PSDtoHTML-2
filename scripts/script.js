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
