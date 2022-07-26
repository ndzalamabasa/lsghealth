let nav = document.querySelector("nav");
let menu = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");

let showMenu = document.querySelector(".desktop-menu");

menu.addEventListener("click", (e) => {
  showMenu.classList.toggle("show-menu");
  mobileMenu.classList.toggle("menu-open");
  nav.classList.toggle("bg-color");
});

gsap.registerPlugin(ScrollTrigger);

function bgColor() {
  gsap.to("nav", {
    backgroundColor: "#ffffff",
    scrollTrigger: {
      scrub: true,
    },
  });
}

window.addEventListener("scroll", function () {
  bgColor();
});

const Top = document.querySelector(".scrollUp");

window.onscroll = function () {
  scroll();
};

function scroll() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    Top.classList.add("top");
  } else {
    Top.classList.remove("top");
  }
}

Top.addEventListener("click", (e) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
