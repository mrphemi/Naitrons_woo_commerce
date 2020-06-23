const nav = document.querySelector(".nav");
const hamburgerMenu = document.querySelector(".nav__menu");
const navGroup = document.querySelector(".nav__group");

// toggle nav on mobile devices
hamburgerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  navGroup.classList.toggle("open");
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
