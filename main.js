const nav = document.querySelector(".nav");
const hamburgerMenu = document.querySelector(".nav__menu .open-nav");
const navGroup = document.querySelector(".nav__group");
const closeIcon = document.querySelector(".nav__menu .close-nav");

// open nav on mobile devices
hamburgerMenu.addEventListener("click", () => {
  navGroup.classList.add("open");
  hamburgerMenu.classList.add("hide");
  closeIcon.classList.remove("hide");
});

// open nav on mobile devices
closeIcon.addEventListener("click", () => {
  navGroup.classList.remove("open");
  closeIcon.classList.add("hide");
  hamburgerMenu.classList.remove("hide");
});

// Change nav background color on window scroll
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    nav.classList.add("coloured");
  } else {
    nav.classList.remove("coloured");
  }
});

// Initialize slider
const mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  speed: 500,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
