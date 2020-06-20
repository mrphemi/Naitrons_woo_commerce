const nav = document.querySelector(".nav");

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
