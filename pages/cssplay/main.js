const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const iconHamburger = document.querySelector("icon-hamburger");
const iconClose = document.querySelector("icon-close");

navToggle.addEventListener("click", () => {
  navToggle.setAttribute(
    "aria-expanded",
    !primaryNav.hasAttribute("data-visible")
  );
  primaryNav.toggleAttribute("data-visible");

  primaryHeader.toggleAttribute("data-overlay");

  //TODO: Toggle the menu switch icon
});
const slider = new A11YSlider(document.querySelector(".slider"), {
  dots: true,
  arrows: false,
  autoplay: true,
});
