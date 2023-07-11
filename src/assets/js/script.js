const articles = [...document.querySelectorAll("article")];
const navbar = document.querySelector("header");
const cross = document.querySelector(".cross svg");
const darkBG = document.querySelector(".darkbg");
const menuBar = document.querySelector(".menu-bar");
const mobileNav = document.querySelector(".mobile-nav");

// Navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("drop");
  } else {
    navbar.classList.remove("drop");
  }
});

// Menu bar
menuBar.addEventListener("click", () => {
  console.log(menuBar);
  cross.classList.add("rotate-arrow", "opacity-100");
  mobileNav.classList.add("left-0", "visible");
  mobileNav.classList.remove("invisible");
  darkBG.classList.add("visible", "opacity-100");
  darkBG.classList.remove("invisible");
});

// Mobile nav
const hideMenu = [cross, darkBG].map((item) => {
  item.addEventListener("click", () => {
    cross.classList.add("rotate-arrow", "opacity-0", "invisible");
    mobileNav.classList.remove("left-0");
    darkBG.classList.remove("visible");
    darkBG.classList.add("invisible");
  });
});

articles.map((article) => {
  const head = article.querySelector("header");
  const content = article.querySelector(".content");
  const arrow = head.querySelector(".arrow img");

  head.addEventListener("click", () => {
    content.classList.toggle("full-height");
    arrow.classList.toggle("rotate-arrow");
  });
});

// Change price
const display = screen.width > 1023 ? ".desktop-content" : ".mobile-content";
const screenSize = document.querySelector(display);

const day = 45;

const priceButtons = [...screenSize.querySelectorAll(".prices button")];
const dayOne = screenSize.querySelector(".day-one");
const dayTwo = screenSize.querySelector(".day-two");

priceValues = {
  0: ["500", "500", "500", "1,000", "1,000", "1,000", "1,000", "500"],
  1: ["500", "500", "500", "1,000", "1,000", "1,000", "2,500", "1,500"],
  2: ["2,500", "2,500", "2,500", "5,000", "5,000", "5,000", "5,000", "2,500"],
  3: [
    "5,000",
    "5,000",
    "5,000",
    "10,000",
    "10,000",
    "10,000",
    "10,000",
    "5,000",
  ],
};

const prices = [...screenSize.querySelectorAll(".priceVal")];

priceButtons.map((btn, i) => {
  btn.addEventListener("click", () => {
    // Change days
    dayOne.innerHTML = 45;
    dayTwo.innerHTML = 45;

    // Change prices
    prices.map((item, j) => {
      item.innerHTML = priceValues[i][j];
    });

    // Button outline change
    priceButtons.map((button) => button.classList.remove("button-outline"));
    btn.classList.add("button-outline");
  });
});
